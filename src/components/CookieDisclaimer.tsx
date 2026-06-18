"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

type CookiePreference = "all" | "essential";

const cookieName = "workflow_wizard_cookie_consent";
const oneYearInSeconds = 60 * 60 * 24 * 365;
const preferenceChangedEvent = "workflow-wizard-cookie-preference-changed";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(preferenceChangedEvent, onStoreChange);

  return () => {
    window.removeEventListener(preferenceChangedEvent, onStoreChange);
  };
}

function hasNoSavedPreference() {
  return !document.cookie
    .split("; ")
    .some((cookie) => cookie.startsWith(`${cookieName}=`));
}

export function CookieDisclaimer() {
  const isVisible = useSyncExternalStore(
    subscribe,
    hasNoSavedPreference,
    () => false,
  );

  function savePreference(preference: CookiePreference) {
    document.cookie = `${cookieName}=${preference}; Max-Age=${oneYearInSeconds}; Path=/; SameSite=Lax`;
    window.dispatchEvent(new Event(preferenceChangedEvent));
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-disclaimer-title"
      aria-describedby="cookie-disclaimer-description"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2
            id="cookie-disclaimer-title"
            className="text-lg font-bold text-slate-950"
          >
            A small cookie spell 🍪
          </h2>
          <p
            id="cookie-disclaimer-description"
            className="mt-2 text-sm leading-6 text-slate-600"
          >
            We use essential cookies to keep the site secure and working
            properly. Optional cookies may help us improve your experience, but
            you can continue with essential cookies only. Read our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-violet-700 underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => savePreference("essential")}
            className="min-h-11 rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-100"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => savePreference("all")}
            className="min-h-11 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            Accept all
          </button>
        </div>
      </div>
    </aside>
  );
}
