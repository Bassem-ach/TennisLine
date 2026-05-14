-- =============================================================
-- Tennis Line — seed data
-- Run AFTER schema.sql. Safe to re-run (uses ON CONFLICT).
-- =============================================================

-- ── Products (matches the PRODUCTS array currently in app.js) ─
-- Prices are stored in cents (USD). $245 = 24500.
insert into products (id, name, category, levels, price_cents, was_cents, kicker, specs, badge_text, badge_kind, accent, sort_order) values
  ('r-pro-blade',   'Blade Pro 98',     'racquets', '{advanced,pro}',                          24500, 26900, 'Racquet · Control',   '305g · 98 sq.in · 16x19',       'Pro pick',     'court', '#1F3357', 10),
  ('r-spin-99',     'TopSpin 99',       'racquets', '{intermediate,advanced}',                 19900, null,  'Racquet · Spin',      '300g · 99 sq.in · 16x20',       null,           null,    '#2A4775', 20),
  ('r-rally-100',   'Rally 100',        'racquets', '{beginner,intermediate}',                 12900, null,  'Racquet · All-court', '285g · 100 sq.in · 16x19',      'Best seller',  'ball',  '#D8FF3E', 30),
  ('r-power-110',   'Power 110 Lite',   'racquets', '{beginner}',                               8900, null,  'Racquet · Power',     '260g · 110 sq.in · 16x19',      'New',          'court', '#1FA89A', 40),
  ('r-tour-95',     'Tour Lab 95',      'racquets', '{pro}',                                   28900, null,  'Racquet · Tour',      '315g · 95 sq.in · 18x20',       null,           null,    '#14254A', 50),
  ('r-junior-26',   'Junior 26"',       'racquets', '{beginner}',                               5900, null,  'Racquet · Junior',    '240g · 100 sq.in · Foam grip',  null,           null,    '#C8E76A', 60),

  ('s-polylux',     'PolyLux Tour',     'strings',  '{advanced,pro}',                           1800, null,  'String · Co-poly',       '1.25mm · Set · High control',   'Tour spec', 'court', '#1F3357', 110),
  ('s-gut-natural', 'Natural Gut 16',   'strings',  '{pro}',                                    4200, null,  'String · Multifilament', '1.30mm · Set · Soft feel',      null,        null,    '#F5F1E6', 120),
  ('s-hybrid-spin', 'Hybrid Spin Pack', 'strings',  '{intermediate,advanced}',                  2400, null,  'String · Hybrid',        'Poly + Multi · 1.25/1.30mm',    'Combo',     'ball',  '#D8FF3E', 130),
  ('s-synth-22',    'Synthetic 22',     'strings',  '{beginner,intermediate}',                   900, null,  'String · Synthetic',     '1.30mm · Set · Durable',        null,        null,    '#5DA8B6', 140),
  ('s-soft-multi',  'SoftPlay Multi',   'strings',  '{beginner,intermediate}',                  1400, null,  'String · Arm-friendly',  '1.32mm · Set · Comfort',        null,        null,    '#8FC7D4', 150),

  ('a-tee-court',   'Court Tee',        'apparel',  '{beginner,intermediate,advanced,pro}',     3500, null,  'Top · Lightweight',   'Recycled poly · Quick-dry',     null,           null,    '#D8FF3E', 210),
  ('a-polo-pro',    'Pro Polo',         'apparel',  '{intermediate,advanced,pro}',              6500, null,  'Top · Match day',     'Mesh back · Stretch knit',      'New',          'court', '#1F3357', 220),
  ('a-skirt-rally', 'Rally Skirt',      'apparel',  '{beginner,intermediate,advanced,pro}',     5500, null,  'Bottom · Skirt',      'Built-in shorts · 4-way stretch', null,         null,    '#F4FFB8', 230),
  ('a-shorts-7',    '7" Match Shorts',  'apparel',  '{intermediate,advanced,pro}',              5000, null,  'Bottom · Shorts',     'Side pockets · Sweat-wick',     null,           null,    '#2A4775', 240),
  ('a-cap-court',   'Court Cap',        'apparel',  '{beginner,intermediate,advanced,pro}',     2800, null,  'Accessory · Cap',     'Sweatband · UPF 50',            'Best seller',  'ball',  '#D8FF3E', 250),
  ('a-socks-grip',  'Grip Crew Socks',  'apparel',  '{beginner,intermediate,advanced,pro}',     1600, null,  'Accessory · Socks',   '3-pack · Arch support',         null,           null,    '#5DA8B6', 260),
  ('a-jacket-warm', 'Warm-Up Jacket',   'apparel',  '{intermediate,advanced,pro}',              9500, null,  'Layer · Warm-up',     'Brushed inside · Zip pockets',  null,           null,    '#14254A', 270)
on conflict (id) do nothing;

-- ── Courts (3 outdoor hard courts) ──────────────────────────
insert into courts (id, name, surface, active) values
  (1, 'Court 1', 'outdoor_hard', true),
  (2, 'Court 2', 'outdoor_hard', true),
  (3, 'Court 3', 'outdoor_hard', true)
on conflict (id) do nothing;

-- ── Sample coaches (replace later with real roster) ──────────
insert into coaches (name, bio, specialities, levels_taught, hourly_cents) values
  ('Maya Okafor',         'LTA Level 4 coach, ex-college #1 singles player. Loves first-time adults and tactical match prep.', '{technique,match-prep,fitness}', '{beginner,intermediate,advanced}', 4500),
  ('Tom Halloran',        'LTA Level 3, junior development specialist. Patient with under-12s, sharp with ranked teens.',      '{juniors,technique,competition}', '{beginner,intermediate}',         4500),
  ('Priya Subramanian',   'LTA Level 5 + ITPA. Works with tournament adults on serve mechanics and match psychology.',          '{serve,match-prep,competition}',  '{advanced,pro}',                   6500)
on conflict do nothing;

-- =============================================================
-- Sanity check: row counts
-- =============================================================
-- select 'products' as t, count(*) from products
-- union all select 'courts',  count(*) from courts
-- union all select 'coaches', count(*) from coaches;
