"use server";

import { createClient } from "@/utils/supabase/server";

export type AutomationBlueprintInput = {
  adminHours: number;
  emailHours: number;
  contentHours: number;
  hasCRM: "yes" | "no";
  usesAutomationTools: "yes" | "no";
};

export type AutomationBlueprintResult = {
  score: number;
  workflows: string;
  timeSaved: string;
  tools: string;
  spell: string;
};

export type AutomationBlueprintState = {
  status: "success" | "error";
  message: string;
  result?: AutomationBlueprintResult;
  fieldErrors?: Partial<Record<keyof AutomationBlueprintInput, string>>;
};

function isValidAnswer(value: string): value is "yes" | "no" {
  return value === "yes" || value === "no";
}

function validateHours(value: number, label: string) {
  if (!Number.isFinite(value)) {
    return `${label} must be a number.`;
  }

  if (!Number.isInteger(value)) {
    return `${label} must be a whole number.`;
  }

  if (value < 0 || value > 168) {
    return `${label} must be between 0 and 168.`;
  }

  return undefined;
}

function calculateBlueprint({
  adminHours,
  emailHours,
  contentHours,
  hasCRM,
  usesAutomationTools,
}: AutomationBlueprintInput): AutomationBlueprintResult {
  const score = Math.min(
    100,
    adminHours * 2 +
      emailHours * 2 +
      contentHours * 1.5 +
      (hasCRM === "no" ? 10 : 0) +
      (usesAutomationTools === "no" ? 10 : 0),
  );

  if (score > 70) {
    return {
      score,
      workflows: "Lead follow-up, Client onboarding, Invoice reminders",
      timeSaved: "6–10 hours/week",
      tools: "Zapier, Make.com, ClickUp",
      spell:
        "The Flow of Endless Hands — a spell that duplicates your effort by automating repetitive tasks.",
    };
  }

  if (score > 40) {
    return {
      score,
      workflows: "Content scheduling, Email templates, Social posting",
      timeSaved: "3–5 hours/week",
      tools: "Zapier, Notion, Tally",
      spell: "The Scroll of Swift Steps — a spell that speeds up your daily workflow.",
    };
  }

  return {
    score,
    workflows: "Basic admin cleanup, File organization, Simple reminders",
    timeSaved: "1–2 hours/week",
    tools: "Canva, Google Workspace",
    spell: "The Ember of Order — a spell that brings structure to your scattered tasks.",
  };
}

export async function saveAutomationBlueprint(
  input: AutomationBlueprintInput,
): Promise<AutomationBlueprintState> {
  const fieldErrors: AutomationBlueprintState["fieldErrors"] = {
    adminHours: validateHours(input.adminHours, "Admin hours"),
    emailHours: validateHours(input.emailHours, "Email hours"),
    contentHours: validateHours(input.contentHours, "Content hours"),
    hasCRM: isValidAnswer(input.hasCRM) ? undefined : "Choose whether you have a CRM.",
    usesAutomationTools: isValidAnswer(input.usesAutomationTools)
      ? undefined
      : "Choose whether you use automation tools.",
  };

  Object.keys(fieldErrors).forEach((key) => {
    const typedKey = key as keyof AutomationBlueprintInput;
    if (!fieldErrors[typedKey]) {
      delete fieldErrors[typedKey];
    }
  });

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  const result = calculateBlueprint(input);
  const supabase = await createClient();
  const { error } = await supabase.from("automation_blueprints").insert({
    admin_hours: input.adminHours,
    email_hours: input.emailHours,
    content_hours: input.contentHours,
    has_crm: input.hasCRM,
    uses_automation_tools: input.usesAutomationTools,
    score: result.score,
    workflows: result.workflows,
    time_saved: result.timeSaved,
    tools: result.tools,
    spell: result.spell,
  });

  if (error) {
    console.error("Automation blueprint insert failed:", error.code, error.message);

    return {
      status: "error",
      message: "The spell fizzled before it could be saved. Please try again shortly.",
    };
  }

  return {
    status: "success",
    message: "Your automation blueprint is ready.",
    result,
  };
}
