create table if not exists public.automation_blueprints (
  id uuid primary key default gen_random_uuid(),
  admin_hours int not null,
  email_hours int not null,
  content_hours int not null,
  has_crm text not null,
  uses_automation_tools text not null,
  score float8 not null,
  workflows text not null,
  time_saved text not null,
  tools text not null,
  spell text not null,
  created_at timestamptz not null default now(),
  constraint automation_blueprints_admin_hours_range
    check (admin_hours between 0 and 168),
  constraint automation_blueprints_email_hours_range
    check (email_hours between 0 and 168),
  constraint automation_blueprints_content_hours_range
    check (content_hours between 0 and 168),
  constraint automation_blueprints_has_crm_allowed
    check (has_crm in ('yes', 'no')),
  constraint automation_blueprints_uses_automation_tools_allowed
    check (uses_automation_tools in ('yes', 'no')),
  constraint automation_blueprints_score_range
    check (score between 0 and 100)
);

alter table public.automation_blueprints enable row level security;

revoke all on table public.automation_blueprints from anon, authenticated;

grant insert on table public.automation_blueprints to anon, authenticated;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'automation_blueprints'
      and policyname = 'Visitors can create automation blueprints'
  ) then
    create policy "Visitors can create automation blueprints"
    on public.automation_blueprints
    for insert
    to anon, authenticated
    with check (
      admin_hours between 0 and 168
      and email_hours between 0 and 168
      and content_hours between 0 and 168
      and has_crm in ('yes', 'no')
      and uses_automation_tools in ('yes', 'no')
      and score between 0 and 100
    );
  end if;
end
$$;
