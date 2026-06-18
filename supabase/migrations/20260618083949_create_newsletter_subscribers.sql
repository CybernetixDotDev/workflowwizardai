create table public.newsletter_subscribers (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null unique,
  newsletter_opt_in boolean not null default true,
  consented_at timestamptz not null default now(),
  source text not null default 'website',
  created_at timestamptz not null default now(),
  constraint newsletter_subscribers_name_length
    check (char_length(btrim(name)) between 1 and 100),
  constraint newsletter_subscribers_email_normalized
    check (email = lower(btrim(email))),
  constraint newsletter_subscribers_email_length
    check (char_length(email) between 3 and 320),
  constraint newsletter_subscribers_opt_in_required
    check (newsletter_opt_in is true),
  constraint newsletter_subscribers_source_allowed
    check (source in ('website'))
);

alter table public.newsletter_subscribers enable row level security;

revoke all on table public.newsletter_subscribers from anon, authenticated;
revoke all on sequence public.newsletter_subscribers_id_seq from anon, authenticated;

grant insert on table public.newsletter_subscribers to anon, authenticated;
grant usage on sequence public.newsletter_subscribers_id_seq to anon, authenticated;

create policy "Visitors can subscribe to the newsletter"
on public.newsletter_subscribers
for insert
to anon, authenticated
with check (
  newsletter_opt_in is true
  and source = 'website'
);
