-- =============================================================
-- Tennis Line — database schema
-- Target: Postgres 15+ (Supabase).
-- Apply in: Supabase Studio → SQL Editor → New query → paste → Run
-- Idempotent: re-running is safe (existing objects are kept).
-- =============================================================

-- ── Extensions ───────────────────────────────────────────────
create extension if not exists "pgcrypto";   -- gen_random_uuid()
create extension if not exists "btree_gist"; -- range EXCLUDE for court bookings

-- ── Products (racquets / strings / apparel) ──────────────────
create table if not exists products (
  id            text primary key,                                -- e.g. 'r-pro-blade'
  name          text not null,
  category      text not null check (category in ('racquets','strings','apparel')),
  levels        text[] not null default '{}',                    -- {beginner,intermediate,advanced,pro}
  price_cents   integer not null check (price_cents >= 0),
  was_cents     integer check (was_cents is null or was_cents >= price_cents),
  kicker        text not null,
  specs         text not null,
  badge_text    text,
  badge_kind    text check (badge_kind is null or badge_kind in ('court','ball')),
  accent        text not null default '#1F3357',
  in_stock      boolean not null default true,
  sort_order    integer not null default 100,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);
create index if not exists products_category_idx on products(category);
create index if not exists products_levels_idx   on products using gin (levels);
create index if not exists products_sort_idx     on products(sort_order);

-- ── Orders + line items (for the cart → Stripe checkout flow) ─
create table if not exists orders (
  id                 uuid primary key default gen_random_uuid(),
  customer_email     text not null,
  customer_name      text,
  subtotal_cents     integer not null check (subtotal_cents >= 0),
  shipping_cents     integer not null default 0 check (shipping_cents >= 0),
  total_cents        integer generated always as (subtotal_cents + shipping_cents) stored,
  status             text not null default 'pending'
                       check (status in ('pending','paid','shipped','delivered','cancelled','refunded')),
  stripe_session_id  text unique,
  notes              text,
  created_at         timestamptz not null default now()
);
create index if not exists orders_customer_email_idx on orders(customer_email);
create index if not exists orders_status_idx        on orders(status);
create index if not exists orders_created_at_idx    on orders(created_at desc);

create table if not exists order_items (
  id                uuid primary key default gen_random_uuid(),
  order_id          uuid not null references orders(id) on delete cascade,
  product_id        text not null references products(id) on delete restrict,
  qty               integer not null check (qty > 0),
  unit_price_cents  integer not null check (unit_price_cents >= 0),
  created_at        timestamptz not null default now()
);
create index if not exists order_items_order_id_idx on order_items(order_id);

-- ── Stringing requests (from /stringing.html form) ───────────
create table if not exists stringing_requests (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  email           text not null,
  string_type     text not null
                    check (string_type in ('poly','multi','gut','hybrid','synthetic','recommend')),
  tension         integer check (tension is null or (tension between 30 and 80)),
  racquet_model   text,
  notes           text,
  status          text not null default 'received'
                    check (status in ('received','in_progress','completed','cancelled')),
  created_at      timestamptz not null default now()
);
create index if not exists stringing_status_idx on stringing_requests(status, created_at desc);
create index if not exists stringing_email_idx  on stringing_requests(email);

-- ── Courts (3 outdoor) + bookings (from /court-hire.html) ────
create table if not exists courts (
  id        smallint primary key,                                 -- 1, 2, 3
  name      text not null,
  surface   text not null default 'outdoor_hard',
  active    boolean not null default true
);

create table if not exists court_bookings (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  players     text not null,                                      -- "2 (singles)" etc., raw form value
  court_id    smallint references courts(id) on delete set null,  -- null = "any court"
  start_at    timestamptz not null,
  end_at      timestamptz not null,
  notes       text,
  status      text not null default 'pending'
                check (status in ('pending','confirmed','cancelled','completed','no_show')),
  created_at  timestamptz not null default now(),
  check (end_at > start_at),
  -- prevent double-booking on a specific court while pending/confirmed
  exclude using gist (
    court_id with =,
    tstzrange(start_at, end_at) with &&
  ) where (court_id is not null and status in ('pending','confirmed'))
);
create index if not exists court_bookings_start_at_idx on court_bookings(start_at);
create index if not exists court_bookings_email_idx    on court_bookings(email);
create index if not exists court_bookings_status_idx   on court_bookings(status);

-- ── Coaches + coaching requests (from /coaching.html) ────────
create table if not exists coaches (
  id              uuid primary key default gen_random_uuid(),
  name            text not null,
  bio             text,
  specialities    text[] not null default '{}',
  levels_taught   text[] not null default '{}',
  photo_url       text,
  hourly_cents    integer check (hourly_cents is null or hourly_cents >= 0),
  active          boolean not null default true,
  created_at      timestamptz not null default now()
);

create table if not exists coaching_requests (
  id                 uuid primary key default gen_random_uuid(),
  name               text not null,
  email              text not null,
  phone              text,
  age_group          text not null,
  level              text not null,
  format             text not null,
  preferred_days     text[] not null default '{}',
  preferred_time     text,
  frequency          text,
  goals              text,
  assigned_coach_id  uuid references coaches(id) on delete set null,
  status             text not null default 'received'
                       check (status in ('received','contacted','scheduled','completed','cancelled')),
  created_at         timestamptz not null default now()
);
create index if not exists coaching_status_idx on coaching_requests(status, created_at desc);
create index if not exists coaching_email_idx  on coaching_requests(email);

-- ── updated_at trigger (re-usable) ───────────────────────────
create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists products_updated_at on products;
create trigger products_updated_at
  before update on products
  for each row execute function set_updated_at();

-- =============================================================
-- Row Level Security
-- =============================================================
-- Goal: the public (anon key) can…
--   • read products, courts, coaches that are active/in stock
--   • INSERT into the three request tables + orders/order_items
--   • not read other customers' requests/orders (privacy)
-- Admin reads happen via the service_role key (RLS-bypassing) in
-- Edge Functions or in Supabase Studio.

alter table products            enable row level security;
alter table orders              enable row level security;
alter table order_items         enable row level security;
alter table stringing_requests  enable row level security;
alter table courts              enable row level security;
alter table court_bookings      enable row level security;
alter table coaches             enable row level security;
alter table coaching_requests   enable row level security;

-- Public reads
drop policy if exists products_public_read on products;
create policy products_public_read on products
  for select using (in_stock = true);

drop policy if exists courts_public_read on courts;
create policy courts_public_read on courts
  for select using (active = true);

drop policy if exists coaches_public_read on coaches;
create policy coaches_public_read on coaches
  for select using (active = true);

-- Form-submission inserts (anon)
drop policy if exists stringing_public_insert on stringing_requests;
create policy stringing_public_insert on stringing_requests
  for insert with check (true);

drop policy if exists court_bookings_public_insert on court_bookings;
create policy court_bookings_public_insert on court_bookings
  for insert with check (
    status = 'pending'                                    -- can only create pending
    and start_at > now()                                  -- only future bookings
    and end_at  <= start_at + interval '4 hours'          -- max 4-hour block
  );

drop policy if exists coaching_public_insert on coaching_requests;
create policy coaching_public_insert on coaching_requests
  for insert with check (true);

-- Cart checkout: anon can create the order shell + items. The real
-- secure path (Stripe verification) will run in an Edge Function
-- with the service_role key. RLS here just keeps the door open.
drop policy if exists orders_public_insert on orders;
create policy orders_public_insert on orders
  for insert with check (status = 'pending');

drop policy if exists order_items_public_insert on order_items;
create policy order_items_public_insert on order_items
  for insert with check (true);

-- Read your own court booking by id (so a confirmation page can show it).
drop policy if exists court_bookings_read_own on court_bookings;
create policy court_bookings_read_own on court_bookings
  for select using (false);   -- locked down for now; flip to true + filter on session email later

-- =============================================================
-- Useful views for the admin dashboard / Edge Functions
-- =============================================================
create or replace view court_bookings_calendar as
select
  cb.id, cb.court_id, c.name as court_name,
  cb.start_at, cb.end_at,
  cb.name as customer_name, cb.email, cb.players, cb.status
from court_bookings cb
left join courts c on c.id = cb.court_id
order by cb.start_at;

-- =============================================================
-- Done.
-- Next: run db/seed.sql to populate products, courts, coaches.
-- =============================================================
