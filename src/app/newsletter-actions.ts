"use server";

import { createClient } from "@/utils/supabase/server";

export type NewsletterState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string;
    email?: string;
    newsletterOptIn?: string;
  };
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToNewsletter(
  _previousState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const newsletterOptIn = formData.get("newsletterOptIn") === "on";
  const website = String(formData.get("website") ?? "").trim();

  // Quietly accept bot submissions caught by the honeypot field.
  if (website) {
    return {
      status: "success",
      message: "Thanks! You’re on the list.",
    };
  }

  const errors: NewsletterState["errors"] = {};

  if (!name || name.length > 100) {
    errors.name = "Enter your name using 100 characters or fewer.";
  }

  if (!emailPattern.test(email) || email.length > 320) {
    errors.email = "Enter a valid email address.";
  }

  if (!newsletterOptIn) {
    errors.newsletterOptIn = "Please confirm that you want to receive the newsletter.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("newsletter_subscribers").insert({
    name,
    email,
    newsletter_opt_in: true,
    consented_at: new Date().toISOString(),
    source: "website",
  });

  if (error?.code === "23505") {
    return {
      status: "success",
      message: "You’re already subscribed—no need to sign up twice.",
    };
  }

  if (error) {
    console.error("Newsletter signup failed:", error.code, error.message);

    return {
      status: "error",
      message: "We couldn’t add you right now. Please try again shortly.",
    };
  }

  return {
    status: "success",
    message: "You’re in! Watch your inbox for weekly AI magic.",
  };
}
