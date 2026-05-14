// Tennis Line — Supabase config
// The publishable key is safe to expose in client code; RLS policies
// (db/schema.sql) decide what it can actually read or write.
// Do NOT add the `sb_secret_*` / `service_role` key here — that one
// belongs only inside server-side Edge Functions.

const SUPABASE_URL = 'https://uamrmnnkmtyilbmzdqxu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-v-tvVpyAFHZJTYTUJaaCg_a9L1uGda';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
