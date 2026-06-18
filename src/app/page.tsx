import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

const magicCards = [
  {
    icon: "sparkle",
    title: "Save Time",
    description: "Automate repetitive tasks and reclaim hours every week.",
  },
  {
    icon: "AI",
    title: "Work Smarter",
    description: "Let AI handle the busywork while you focus on what matters.",
  },
  {
    icon: "++",
    title: "Grow Faster",
    description: "Spend more energy serving customers and building your business.",
  },
];

const steps = [
  "Find the task that's slowing you down.",
  "Discover the right AI tool or automation.",
  "Let the magic happen.",
];

const resources = [
  "AI Tool Recommendations",
  "Automation Guides",
  "Free Templates",
  "Tool Comparisons",
];

function HeroLogo() {
  return (
    <div className="hero-logo-wrap relative mx-auto mb-10 h-56 w-56 sm:h-64 sm:w-64">
      <span className="hero-logo-aura" aria-hidden="true" />
      <span className="hero-logo-ring hero-logo-ring-one" aria-hidden="true" />
      <span className="hero-logo-ring hero-logo-ring-two" aria-hidden="true" />
      <span className="hero-sparkle hero-sparkle-one" />
      <span className="hero-sparkle hero-sparkle-two" />
      <span className="hero-sparkle hero-sparkle-three" />
      <span className="hero-sparkle hero-sparkle-four" />
      <Image
        src="/images/workflow-wizard-hat.png"
        alt="Workflow Wizard AI wizard hat logo"
        width={1024}
        height={1024}
        priority
        className="hero-logo-image relative z-10 h-full w-full object-contain"
      />
    </div>
  );
}

function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/workflow-wizard-wordmark.png"
      alt="Workflow Wizard AI"
      width={258}
      height={100}
      className={`object-contain ${className}`}
      preload
    />
  );
}

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const variants = {
    primary:
      "border-transparent bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-[0_18px_42px_rgba(91,119,255,0.28)]",
    secondary:
      "border-slate-200 bg-white/75 text-slate-950 shadow-[0_10px_30px_rgba(42,47,80,0.06)]",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-[3.25rem] items-center justify-center rounded-full border px-6 text-sm font-bold transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-violet-200 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

function SectionHeading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mx-auto max-w-4xl text-center text-4xl font-bold leading-none tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-6xl"
    >
      {children}
    </h2>
  );
}

function ElegantCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-[1.75rem] border border-slate-200 bg-white/80 p-7 shadow-[0_16px_46px_rgba(34,38,70,0.06)] transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_24px_80px_rgba(40,45,80,0.11)] ${className}`}
    >
      {children}
    </article>
  );
}

function MagicIcon({ value }: { value: string }) {
  return (
    <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-base font-black text-violet-600">
      {value === "sparkle" ? <span aria-hidden="true">&#10024;</span> : value}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate grid min-h-[92vh] place-items-center overflow-hidden px-5 py-16 text-center sm:px-6 lg:px-8">
      <div className="top-section-sparkles absolute inset-0 -z-10" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className={`top-sparkle top-sparkle-${index + 1}`} />
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <HeroLogo />
        <BrandWordmark className="mx-auto mb-4 h-20 w-auto max-w-[min(300px,86vw)]" />
        <h1 className="mx-auto max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.075em] text-slate-950 sm:text-7xl lg:text-8xl">
          Making AI Automations Feel Like Magic
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
          Spend less time on repetitive work and more time growing your business.
          Workflow Wizard AI helps small business owners discover simple AI tools
          and automations that save time without the complexity.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="#newsletter">Get Free AI Tips</ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary">
            See How It Works
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm font-semibold text-slate-500 sm:text-base">
          No coding. No complicated setups. Just practical AI that works.
        </p>
      </div>
    </section>
  );
}

function MagicSection() {
  return (
    <section
      className="bg-gradient-to-b from-transparent via-slate-50 to-transparent px-5 py-20 sm:px-6 lg:px-8"
      aria-labelledby="magic-title"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="magic-title">
          What if your repetitive tasks could disappear?
        </SectionHeading>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {magicCards.map((card) => (
            <ElegantCard key={card.title}>
              <MagicIcon value={card.icon} />
              <h3 className="text-xl font-bold tracking-[-0.035em] text-slate-950">
                {card.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">{card.description}</p>
            </ElegantCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section
      id="how-it-works"
      className="px-5 py-20 text-center sm:px-6 lg:px-8"
      aria-labelledby="steps-title"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="steps-title">Three Simple Steps</SectionHeading>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <ElegantCard key={step} className="grid justify-items-center text-center">
              <span className="mb-4 grid h-[3.25rem] w-[3.25rem] place-items-center rounded-full bg-white text-lg font-black text-violet-600 shadow-[0_14px_34px_rgba(80,86,140,0.12)]">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold tracking-[-0.035em] text-slate-950">
                {step}
              </h3>
            </ElegantCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section
      className="bg-gradient-to-b from-transparent via-slate-50 to-transparent px-5 py-20 sm:px-6 lg:px-8"
      aria-labelledby="resources-title"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="resources-title">
          Simple AI Resources for Small Businesses
        </SectionHeading>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <ElegantCard
              key={resource}
              className="grid min-h-32 place-items-center text-center text-lg font-extrabold text-slate-950"
            >
              {resource}
            </ElegantCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="px-5 py-20 text-center sm:px-6 lg:px-8"
      aria-labelledby="newsletter-title"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.4rem] border border-slate-200 bg-[radial-gradient(circle_at_top,rgba(149,100,255,0.16),transparent_28rem),#fff] px-6 py-12 shadow-[0_24px_80px_rgba(40,45,80,0.11)] sm:px-10 lg:px-16 lg:py-20">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-600">
            Newsletter
          </p>
          <SectionHeading id="newsletter-title">Get Weekly AI Magic</SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Simple tips, practical automations, and useful AI tools delivered
            straight to your inbox.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-sm text-slate-500">
            One useful email per week. No spam.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-9 text-slate-500 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <BrandWordmark className="mx-auto h-14 w-auto max-w-[240px] sm:mx-0" />
          <p>Making AI Automations Feel Like Magic</p>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-2 font-bold sm:justify-end"
          aria-label="Footer navigation"
        >
          <Link href="/about" className="transition hover:text-violet-600">
            About
          </Link>
          <a href="#" className="transition hover:text-violet-600">
            Resources
          </a>
          <a href="#" className="transition hover:text-violet-600">
            Contact
          </a>
          <Link
            href="/terms-and-conditions"
            className="transition hover:text-violet-600"
          >
            Terms
          </Link>
          <Link
            href="/privacy-policy"
            className="transition hover:text-violet-600"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_0%,rgba(126,113,255,0.16),transparent_32rem),linear-gradient(180deg,#fff_0%,#fbfcff_48%,#fff_100%)] text-slate-950">
      <main>
        <HeroSection />
        <MagicSection />
        <StepsSection />
        <ResourcesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
