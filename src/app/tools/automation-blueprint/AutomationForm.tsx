"use client";

import { FormEvent, useState, useTransition } from "react";
import {
  AutomationBlueprintInput,
  AutomationBlueprintResult,
  AutomationBlueprintState,
  saveAutomationBlueprint,
} from "./actions";

type NumberField = "adminHours" | "emailHours" | "contentHours";
type RadioField = "hasCRM" | "usesAutomationTools";

const initialForm: AutomationBlueprintInput = {
  adminHours: 0,
  emailHours: 0,
  contentHours: 0,
  hasCRM: "no",
  usesAutomationTools: "no",
};

const numberFields: Array<{
  name: NumberField;
  label: string;
  helper: string;
}> = [
  {
    name: "adminHours",
    label: "Admin hours per week",
    helper: "Inbox cleanup, data entry, scheduling, reporting.",
  },
  {
    name: "emailHours",
    label: "Email hours per week",
    helper: "Replies, follow-ups, nurture sequences, client updates.",
  },
  {
    name: "contentHours",
    label: "Content hours per week",
    helper: "Writing, repurposing, posting, design prep.",
  },
];

const resultSections: Array<{
  label: string;
  key: keyof Omit<AutomationBlueprintResult, "score">;
}> = [
  { label: "Recommended Workflows", key: "workflows" },
  { label: "Estimated Time Saved", key: "timeSaved" },
  { label: "Recommended Tools", key: "tools" },
  { label: "Your Wizard Spell", key: "spell" },
];

function scoreLabel(score: number) {
  if (score > 70) {
    return "High automation opportunity";
  }

  if (score > 40) {
    return "Steady optimization potential";
  }

  return "Foundational workflow cleanup";
}

function RadioGroup({
  name,
  legend,
  value,
  error,
  onChange,
}: {
  name: RadioField;
  legend: string;
  value: "yes" | "no";
  error?: string;
  onChange: (value: "yes" | "no") => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-100">{legend}</legend>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {(["yes", "no"] as const).map((option) => (
          <label
            key={option}
            className={`flex cursor-pointer items-center justify-center rounded-2xl border px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] transition ${
              value === option
                ? "border-cyan-300 bg-cyan-300/15 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.22)]"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-violet-300/60 hover:bg-violet-400/10"
            }`}
          >
            <input
              className="sr-only"
              name={name}
              type="radio"
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              required
            />
            {option}
          </label>
        ))}
      </div>
      {error ? <p className="mt-2 text-sm text-rose-200">{error}</p> : null}
    </fieldset>
  );
}

export function AutomationForm() {
  const [form, setForm] = useState<AutomationBlueprintInput>(initialForm);
  const [state, setState] = useState<AutomationBlueprintState | null>(null);
  const [isPending, startTransition] = useTransition();

  function updateNumberField(name: NumberField, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value === "" ? Number.NaN : Number(value),
    }));
  }

  function updateRadioField(name: RadioField, value: "yes" | "no") {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    startTransition(async () => {
      const nextState = await saveAutomationBlueprint(form);
      setState(nextState);
    });
  }

  const result = state?.result;
  const hasError = state?.status === "error";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.9fr)] lg:items-start">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.55)] backdrop-blur sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-200">
              Arcane Inputs
            </p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
              Build your automation map
            </h2>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-violet-300/30 bg-violet-400/10 text-2xl shadow-[0_0_34px_rgba(168,85,247,0.32)]">
            ✦
          </span>
        </div>

        <div className="mt-8 grid gap-5">
          {numberFields.map((field) => (
            <label key={field.name} className="block">
              <span className="text-sm font-semibold text-slate-100">{field.label}</span>
              <input
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-base font-semibold text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300 focus:bg-cyan-300/10 focus:ring-4 focus:ring-cyan-300/10"
                inputMode="numeric"
                min={0}
                max={168}
                name={field.name}
                required
                step={1}
                type="number"
                value={Number.isNaN(form[field.name]) ? "" : form[field.name]}
                onChange={(event) => updateNumberField(field.name, event.target.value)}
              />
              <span className="mt-2 block text-sm leading-6 text-slate-400">
                {field.helper}
              </span>
              {state?.fieldErrors?.[field.name] ? (
                <span className="mt-2 block text-sm text-rose-200">
                  {state.fieldErrors[field.name]}
                </span>
              ) : null}
            </label>
          ))}

          <RadioGroup
            name="hasCRM"
            legend="Do you currently have a CRM?"
            value={form.hasCRM}
            error={state?.fieldErrors?.hasCRM}
            onChange={(value) => updateRadioField("hasCRM", value)}
          />

          <RadioGroup
            name="usesAutomationTools"
            legend="Do you already use automation tools?"
            value={form.usesAutomationTools}
            error={state?.fieldErrors?.usesAutomationTools}
            onChange={(value) => updateRadioField("usesAutomationTools", value)}
          />
        </div>

        <button
          className="mt-8 flex min-h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 px-6 text-base font-black text-white shadow-[0_0_38px_rgba(168,85,247,0.42)] transition hover:-translate-y-0.5 hover:shadow-[0_0_54px_rgba(34,211,238,0.34)] focus:outline-none focus:ring-4 focus:ring-cyan-200/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          disabled={isPending}
          type="submit"
        >
          {isPending ? "Conjuring your blueprint..." : "Generate Blueprint"}
        </button>

        {state?.message ? (
          <p
            className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${
              hasError
                ? "border-rose-300/20 bg-rose-400/10 text-rose-100"
                : "border-cyan-300/20 bg-cyan-400/10 text-cyan-100"
            }`}
            role={hasError ? "alert" : "status"}
          >
            {state.message}
          </p>
        ) : null}
      </form>

      <section className="relative overflow-hidden rounded-[2rem] border border-violet-300/20 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.24),transparent_20rem),rgba(15,23,42,0.86)] p-5 shadow-[0_0_70px_rgba(124,58,237,0.26)] backdrop-blur sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-14 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-300/10 text-2xl shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              ✨
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-violet-200">
                Wizard Results
              </p>
              <h2 className="text-2xl font-black tracking-tight text-white">
                Your Blueprint
              </h2>
            </div>
          </div>

          {result ? (
            <div className="mt-8">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-slate-300">
                  Your Automation Score
                </p>
                <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <p className="text-6xl font-black leading-none text-white">
                    {result.score}
                  </p>
                  <p className="pb-2 text-lg font-bold text-cyan-100">/ 100</p>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.45)]"
                    style={{ width: `${result.score}%` }}
                  />
                </div>
                <p className="mt-4 text-sm font-semibold text-violet-100">
                  {scoreLabel(result.score)}
                </p>
              </div>

              <div className="mt-5 grid gap-4">
                {resultSections.map((section) => (
                  <article
                    key={section.key}
                    className="rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-4"
                  >
                    <h3 className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                      {section.label}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-100">{result[section.key]}</p>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-white/15 bg-white/[0.04] p-6 text-slate-300">
              <p className="text-lg font-bold text-white">Awaiting your ingredients.</p>
              <p className="mt-3 leading-7">
                Enter your weekly workload and tool setup to reveal your score,
                recommended workflows, saved time, tools, and wizard spell.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
