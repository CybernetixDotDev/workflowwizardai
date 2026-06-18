import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(126,113,255,0.16),transparent_32rem),linear-gradient(180deg,#fff_0%,#fbfcff_48%,#fff_100%)] text-slate-950">
      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <Link
            href="/"
            aria-label="Workflow Wizard AI home"
            className="transition hover:opacity-80"
          >
            <Image
              src="/images/workflow-wizard-wordmark.png"
              alt="Workflow Wizard AI"
              width={258}
              height={100}
              className="h-14 w-auto max-w-[220px] object-contain"
              preload
            />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-100"
          >
            Back home
          </Link>
        </div>
      </header>

      <main className="px-5 py-14 sm:px-6 sm:py-20">
        <article className="mx-auto max-w-4xl">
          <div className="rounded-[2.25rem] border border-slate-200 bg-white/85 px-6 py-10 shadow-[0_24px_80px_rgba(40,45,80,0.1)] sm:px-10 sm:py-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-none tracking-[-0.055em] sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {description}
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-500">
              Effective date: June 18, 2026
            </p>

            <div className="mt-10 space-y-9 text-[1.02rem] leading-8 text-slate-700 [&_a]:font-semibold [&_a]:text-violet-700 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.035em] [&_h2]:text-slate-950 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
              {children}
            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6 text-sm leading-6 text-slate-600">
              <strong className="text-slate-950">A practical note:</strong> these
              pages describe how Workflow Wizard AI currently operates. As the
              site gains new powers, we will update the spellbook—and the
              effective date—before those changes take effect.
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
