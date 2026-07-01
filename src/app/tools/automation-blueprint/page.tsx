import type { Metadata } from "next";
import { AutomationForm } from "./AutomationForm";

export const metadata: Metadata = {
  title: "Automation Blueprint Generator",
  description:
    "Discover your personalized automation score and wizard-crafted workflow recommendations.",
};

export default function AutomationBlueprintPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(34,211,238,0.16),transparent_24rem),radial-gradient(circle_at_86%_16%,rgba(168,85,247,0.24),transparent_26rem),linear-gradient(180deg,#050816_0%,#0f1024_48%,#050816_100%)] text-white">
      <section className="relative isolate px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className="absolute h-1.5 w-1.5 rounded-full bg-cyan-100 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
              style={{
                left: `${8 + ((index * 19) % 84)}%`,
                top: `${9 + ((index * 31) % 78)}%`,
                opacity: 0.28 + (index % 4) * 0.14,
              }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-7 grid h-20 w-20 place-items-center rounded-[1.75rem] border border-cyan-200/30 bg-cyan-300/10 text-4xl shadow-[0_0_54px_rgba(34,211,238,0.28)]">
              ✨
            </div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200">
              Workflow Wizards AI
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              ✨ Automation Blueprint Generator
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Discover your personalized automation score and wizard-crafted
              workflow recommendations.
            </p>
          </div>

          <div className="mt-12">
            <AutomationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
