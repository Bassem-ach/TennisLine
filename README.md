# Tennis Line

A modern tennis gear shop and services site — racquets, strings, apparel, coaching, court hire, and racquet stringing.

**Live site:** [bassem-ach.github.io/TennisLine](https://bassem-ach.github.io/TennisLine/)

## Features

- **Shop** — Browse racquets, strings, and apparel with level filters and a persistent cart
- **Coaching** — Book sessions with certified coaches
- **Court hire** — Reserve indoor and outdoor courts
- **Stringing** — Request racquet restringing with tension and string type options
- **Supabase backend** — Products and bookings stored in Postgres with row-level security

## Tech stack

- Static HTML, CSS, and vanilla JavaScript (no build step)
- [Supabase](https://supabase.com/) for Postgres, auth-ready schema, and live product data
- GitHub Pages for hosting

## Local development

```bash
git clone https://github.com/Bassem-ach/TennisLine.git
cd TennisLine
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). The site works offline with hardcoded product fallbacks if Supabase is unavailable.

## Database setup

1. Create a Supabase project
2. Run `db/schema.sql` in the SQL Editor (creates tables, RLS policies, and indexes)
3. Run `db/seed.sql` to load sample products and services
4. Copy your project URL and publishable key into `config.js`

## Project structure

```
├── index.html          # Main shop page
├── coaching.html       # Coaching bookings
├── court-hire.html     # Court reservations
├── stringing.html      # Stringing requests
├── app.js              # Shop logic, cart, product loading
├── config.js           # Supabase client config
├── styles.css          # Shared styles
└── db/
    ├── schema.sql      # Postgres schema + RLS
    └── seed.sql        # Sample data
```

## License

MIT
