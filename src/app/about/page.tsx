import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Practical AI for Small Business",
  description:
    "Discover how Workflow Wizard AI makes AI tools and automation clearer, more practical, and less intimidating for small business owners.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Workflow Wizard AI",
    description:
      "Practical AI guidance and automation ideas that help small businesses save time without the technical fog.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Workflow Wizard AI",
    description:
      "Making useful AI tools and automation feel less complicated—and a little more magical.",
  },
};

const principles = [
  {
    icon: "✦",
    title: "Practical before flashy",
    description:
      "We care about tools that solve real problems, not technology that merely looks impressive in a demo.",
  },
  {
    icon: "◇",
    title: "Clarity over jargon",
    description:
      "AI should be explained in ordinary language, with honest trade-offs and steps people can actually follow.",
  },
  {
    icon: "↗",
    title: "Small wins compound",
    description:
      "One well-chosen automation can return hours every month. That is where useful magic begins.",
  },
];

export default function AboutPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Workflow Wizard AI",
    url: siteUrl,
    description:
      "Practical AI tools, automation guidance, templates, and resources for small business owners.",
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(126,113,255,0.18),transparent_34rem),linear-gradient(180deg,#fff_0%,#f9faff_55%,#fff_100%)] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
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
            href="/#newsletter"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-200"
          >
            Join the newsletter
          </Link>
        </div>
      </header>

      <main>
        <section className="relative isolate px-5 py-20 text-center sm:px-6 sm:py-28">
          <div
            className="absolute left-1/2 top-12 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/20 blur-3xl"
            aria-hidden="true"
          />
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-violet-600">
            Behind the curtain
          </p>
          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-bold leading-[0.94] tracking-[-0.07em] sm:text-7xl">
            Making practical AI feel less complicated—and a little more magical.
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Workflow Wizard AI helps small business owners discover useful AI
            tools, approachable automations, and clearer ways to work. No
            crystal ball required. Just thoughtful guidance and fewer repetitive
            tasks.
          </p>
        </section>

        <section className="px-5 py-10 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative grid min-h-80 place-items-center overflow-hidden rounded-[2.5rem] border border-violet-100 bg-gradient-to-br from-blue-500/10 via-white to-violet-500/15 p-10 shadow-[0_24px_80px_rgba(40,45,80,0.1)]">
              <span
                className="absolute left-10 top-10 text-3xl text-blue-500"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="absolute bottom-12 right-12 text-4xl text-violet-500"
                aria-hidden="true"
              >
                ✧
              </span>
              <Image
                src="/images/workflow-wizard-hat.png"
                alt="Workflow Wizard AI wizard hat"
                width={1024}
                height={1024}
                className="h-64 w-64 object-contain drop-shadow-[0_24px_32px_rgba(79,70,229,0.2)]"
              />
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white/85 p-8 shadow-[0_24px_80px_rgba(40,45,80,0.08)] sm:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">
                Our mission
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-none tracking-[-0.055em] sm:text-5xl">
                Turn “I should automate that” into “it’s already handled.”
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  AI advice often lives at two unhelpful extremes: dense
                  technical instruction or breathless promises that every tool
                  will transform a business overnight. We prefer the useful
                  middle.
                </p>
                <p>
                  Our goal is to help people identify the work worth
                  automating, choose tools with clear eyes, and build workflows
                  that remain understandable after the initial sparkle fades.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-600">
                The wizard’s code
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-none tracking-[-0.055em] sm:text-6xl">
                How we choose what belongs in the spellbook
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-7 shadow-[0_16px_46px_rgba(34,38,70,0.06)]"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-xl font-black text-violet-600">
                    {principle.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-[-0.035em]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(149,100,255,0.18),transparent_28rem),#fff] px-6 py-14 text-center shadow-[0_24px_80px_rgba(40,45,80,0.11)] sm:px-12">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-violet-600">
              Start with one small spell
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-none tracking-[-0.055em] sm:text-5xl">
              Let’s make your next repetitive task disappear.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Join the newsletter for practical AI ideas, useful tools, and
              simple automations delivered without the technical fog.
            </p>
            <Link
              href="/#newsletter"
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 px-7 text-sm font-bold text-white shadow-[0_18px_42px_rgba(91,119,255,0.28)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-violet-200"
            >
              Get weekly AI magic
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
