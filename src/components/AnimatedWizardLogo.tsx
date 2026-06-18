import Image from "next/image";

type AnimatedWizardLogoProps = {
  className?: string;
};

export function AnimatedWizardLogo({ className = "" }: AnimatedWizardLogoProps) {
  return (
    <span
      className={`animated-wizard-logo relative isolate grid size-12 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-950/10 ring-1 ring-blue-100 ${className}`}
    >
      <Image
        src="/images/workflow-wizard-hat.png"
        alt="Workflow Wizard AI logo"
        width={1024}
        height={1024}
        className="wizard-hat-image relative z-10 h-full w-full object-contain"
        priority
      />
      <span className="wizard-glow absolute inset-1 rounded-2xl bg-blue-500/10 blur-md" />
      <span className="wizard-sparkle sparkle-one" aria-hidden="true" />
      <span className="wizard-sparkle sparkle-two" aria-hidden="true" />
      <span className="wizard-sparkle sparkle-three" aria-hidden="true" />
      <span className="wizard-sparkle sparkle-four" aria-hidden="true" />
    </span>
  );
}
