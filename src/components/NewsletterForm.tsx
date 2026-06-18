"use client";

import { useActionState } from "react";
import {
  subscribeToNewsletter,
  type NewsletterState,
} from "@/app/newsletter-actions";

const initialState: NewsletterState = {
  status: "idle",
  message: "",
};

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="mx-auto mt-9 grid max-w-2xl gap-4 text-left"
      aria-label="Join the Workflow Wizard AI newsletter"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="newsletter-name" className="sr-only">
            Name
          </label>
          <input
            id="newsletter-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(state.errors?.name)}
            aria-describedby={
              state.errors?.name ? "newsletter-name-error" : undefined
            }
            className="min-h-14 w-full rounded-full border border-slate-200 px-6 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
          {state.errors?.name && (
            <p id="newsletter-name-error" className="mt-2 px-3 text-sm text-red-600">
              {state.errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            maxLength={320}
            autoComplete="email"
            inputMode="email"
            placeholder="Your email address"
            aria-invalid={Boolean(state.errors?.email)}
            aria-describedby={
              state.errors?.email ? "newsletter-email-error" : undefined
            }
            className="min-h-14 w-full rounded-full border border-slate-200 px-6 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
          />
          {state.errors?.email && (
            <p id="newsletter-email-error" className="mt-2 px-3 text-sm text-red-600">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="newsletter-website">Website</label>
        <input
          id="newsletter-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-2xl px-2 text-sm leading-6 text-slate-600">
        <input
          name="newsletterOptIn"
          type="checkbox"
          required
          aria-invalid={Boolean(state.errors?.newsletterOptIn)}
          className="mt-1 size-4 shrink-0 accent-violet-600"
        />
        <span>
          Yes, I’d like to receive the Workflow Wizard AI newsletter by email.
          I can unsubscribe at any time.
        </span>
      </label>

      {state.errors?.newsletterOptIn && (
        <p className="px-2 text-sm text-red-600">
          {state.errors.newsletterOptIn}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 px-6 text-sm font-bold text-white shadow-[0_18px_42px_rgba(91,119,255,0.28)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-violet-200 disabled:cursor-wait disabled:opacity-65"
      >
        {pending ? "Joining…" : "Join the Newsletter"}
      </button>

      <p
        className={`min-h-6 text-center text-sm font-semibold ${
          state.status === "success"
            ? "text-emerald-700"
            : state.status === "error"
              ? "text-red-600"
              : "text-transparent"
        }`}
        role="status"
        aria-live="polite"
      >
        {state.message || "Newsletter signup status"}
      </p>
    </form>
  );
}
