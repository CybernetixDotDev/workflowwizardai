import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | Workflow Wizard AI",
  description:
    "The terms governing access to and use of the Workflow Wizard AI website and resources.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Rules of the realm"
      title="Terms and Conditions"
      description="A little magic is welcome. Confusion is not. These terms set the ground rules for using Workflow Wizard AI."
    >
      <section>
        <h2>1. Acceptance of these terms</h2>
        <p>
          By accessing or using Workflow Wizard AI, you agree to these Terms and
          Conditions and our <Link href="/privacy-policy">Privacy Policy</Link>.
          If you do not agree, please do not use the site.
        </p>
      </section>

      <section>
        <h2>2. What the site provides</h2>
        <p>
          Workflow Wizard AI shares educational content, recommendations,
          comparisons, templates, and practical ideas about AI tools and
          automation. Features and content may change, pause, or disappear as
          the technology—and occasionally the enchanted machinery—evolves.
        </p>
      </section>

      <section>
        <h2>3. Informational content, not professional advice</h2>
        <p>
          Content is provided for general information and education. It is not
          legal, financial, tax, cybersecurity, employment, medical, or other
          professional advice. You are responsible for evaluating whether a
          tool or workflow is suitable for your circumstances and for obtaining
          professional advice where appropriate.
        </p>
      </section>

      <section>
        <h2>4. AI and automation risks</h2>
        <p>
          AI-generated output can be inaccurate, incomplete, biased, outdated,
          or unsuitable. Automations can fail or create unintended results.
          Review important output, test workflows safely, maintain backups, and
          keep a human in the loop for meaningful decisions.
        </p>
        <p>
          Do not upload confidential, regulated, or personal information to a
          third-party AI tool until you understand that provider’s terms,
          privacy practices, retention settings, and security controls.
        </p>
      </section>

      <section>
        <h2>5. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use the site for unlawful, fraudulent, or harmful activity;</li>
          <li>interfere with security, availability, or normal operation;</li>
          <li>attempt unauthorised access to accounts, systems, or data;</li>
          <li>submit malicious code, spam, or deceptive information;</li>
          <li>scrape or copy the site at scale without written permission;</li>
          <li>misrepresent our content as your own official guidance; or</li>
          <li>use our materials to violate another person’s rights.</li>
        </ul>
      </section>

      <section>
        <h2>6. Intellectual property</h2>
        <p>
          The site’s original branding, design, text, graphics, and materials
          are owned by or licensed to Workflow Wizard AI and are protected by
          applicable intellectual-property laws. You may use publicly available
          content for personal or internal business reference, but may not
          republish, sell, or commercially exploit substantial portions without
          permission.
        </p>
        <p>
          Product names, logos, and trademarks belonging to third parties
          remain the property of their respective owners.
        </p>
      </section>

      <section>
        <h2>7. Third-party tools and links</h2>
        <p>
          We may discuss or link to third-party products. We do not control
          those services and are not responsible for their content,
          availability, security, pricing, policies, or results. A mention is
          not a guarantee. Review the provider’s terms before using or buying
          anything.
        </p>
        <p>
          If we use affiliate links or receive compensation for a
          recommendation, we will aim to disclose that relationship clearly
          near the relevant content.
        </p>
      </section>

      <section>
        <h2>8. Newsletter</h2>
        <p>
          Newsletter subscription is optional. You must provide accurate
          information and expressly opt in. You can unsubscribe at any time
          using the method provided in an email. Delivery frequency and content
          may change, and we cannot guarantee that every message will reach
          every inbox.
        </p>
      </section>

      <section>
        <h2>9. Disclaimers</h2>
        <p>
          To the fullest extent permitted by law, the site and its content are
          provided “as is” and “as available,” without warranties of accuracy,
          completeness, fitness for a particular purpose, non-infringement, or
          uninterrupted availability. Nothing in these terms excludes a
          warranty or right that cannot legally be excluded.
        </p>
      </section>

      <section>
        <h2>10. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Workflow Wizard AI will not be
          liable for indirect, incidental, special, consequential, exemplary,
          or punitive losses, or for lost profits, revenue, data, goodwill, or
          business opportunities arising from use of the site, third-party
          tools, or reliance on content.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations, so parts of this
          section may not apply to you. Your non-waivable consumer rights remain
          unaffected.
        </p>
      </section>

      <section>
        <h2>11. Responsibility for your use</h2>
        <p>
          You are responsible for your decisions, configurations, accounts,
          data, permissions, legal compliance, and the results of automations
          you deploy. You agree to compensate us for losses caused by your
          unlawful misuse of the site or violation of another person’s rights,
          to the extent permitted by law.
        </p>
      </section>

      <section>
        <h2>12. Suspension and termination</h2>
        <p>
          We may restrict access when reasonably necessary to protect the site,
          users, or third parties; investigate misuse; comply with law; or
          maintain service integrity. Provisions that logically continue after
          access ends—including intellectual property, disclaimers, and
          liability limits—will survive.
        </p>
      </section>

      <section>
        <h2>13. Governing rules and disputes</h2>
        <p>
          Applicable law and any mandatory consumer protections will govern
          these terms. Before starting formal proceedings, please contact us
          with a clear description of the issue so we can try to resolve it
          informally and sensibly.
        </p>
      </section>

      <section>
        <h2>14. Changes and contact</h2>
        <p>
          We may update these terms as our services or legal obligations change.
          Updated terms will be posted here with a revised effective date.
          Continued use after an update means you accept the revised terms to
          the extent permitted by law.
        </p>
        <p>
          For questions, use the Contact option on the Workflow Wizard AI
          homepage or reply to a newsletter email.
        </p>
      </section>
    </LegalPage>
  );
}
