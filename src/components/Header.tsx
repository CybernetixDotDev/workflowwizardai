import Image from "next/image";
import Link from "next/link";
import { AnimatedWizardLogo } from "./AnimatedWizardLogo";

const navItems = [
  { label: "Tools", href: "/#tools" },
  { label: "Guides", href: "/#guides" },
  { label: "Templates", href: "/#templates" },
  { label: "Comparisons", href: "/#comparisons" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-1"
          aria-label="Workflow Wizard AI home"
        >
          <AnimatedWizardLogo />
          <Image
            src="/images/workflow-wizard-wordmark.png"
            alt="Workflow Wizard AI"
            width={258}
            height={100}
            className="h-16 w-auto max-w-[230px] object-contain"
            preload
          />
        </Link>
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="#newsletter"
          className="shrink-0 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 sm:px-5"
        >
          <span className="hidden sm:inline">Join the Newsletter</span>
          <span className="sm:hidden">Join</span>
        </a>
      </div>
    </header>
  );
}
