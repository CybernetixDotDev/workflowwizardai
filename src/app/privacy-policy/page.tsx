import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Workflow Wizard AI",
  description:
    "Learn how Workflow Wizard AI collects, uses, protects, and manages personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy spellbook"
      title="Privacy Policy"
      description="No smoke, no mirrors. This policy explains what information we collect, why we collect it, and the choices you have."
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          Workflow Wizard AI provides practical information about artificial
          intelligence tools, automation, templates, and related resources for
          small businesses. In this policy, “we,” “us,” and “our” refer to
          Workflow Wizard AI.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <p>We currently collect limited information:</p>
        <ul>
          <li>
            <strong>Newsletter details:</strong> your name, email address,
            consent choice, signup source, and the date and time you subscribed.
          </li>
          <li>
            <strong>Cookie preference:</strong> whether you selected essential
            cookies only or accepted all cookies.
          </li>
          <li>
            <strong>Technical information:</strong> our hosting and security
            providers may process ordinary request information such as IP
            address, browser type, device information, and timestamps to deliver
            and protect the site.
          </li>
          <li>
            <strong>Messages you send:</strong> information you choose to
            provide when contacting us.
          </li>
        </ul>
        <p>
          Please do not send sensitive personal information through the
          newsletter form.
        </p>
      </section>

      <section>
        <h2>3. How and why we use information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>add you to the newsletter when you expressly opt in;</li>
          <li>send requested AI tips, resources, and relevant updates;</li>
          <li>maintain consent and unsubscribe records;</li>
          <li>operate, secure, troubleshoot, and improve the site;</li>
          <li>respond to questions and privacy requests; and</li>
          <li>meet legal obligations and prevent misuse.</li>
        </ul>
        <p>
          Depending on where you live, our legal basis may be your consent,
          performance of a requested service, our legitimate interests in
          operating a secure site, or compliance with law. You may withdraw
          newsletter consent at any time.
        </p>
      </section>

      <section>
        <h2>4. Newsletter choices</h2>
        <p>
          We send newsletter email only after you tick the opt-in box and
          submit the form. You may unsubscribe using the link included in a
          newsletter or by replying to a newsletter message with your request.
          We may retain a minimal suppression record so we remember not to
          contact you again.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          We use an essential preference cookie to remember your cookie choice.
          Supabase authentication cookies may also be used if account or
          authenticated features are introduced or used. As of the effective
          date, we do not use advertising cookies or sell cookie-derived
          profiles.
        </p>
        <p>
          Selecting “Accept all” records your preference; it does not activate
          advertising technology that is not present on the site. You can clear
          cookies through your browser settings to reset your choice.
        </p>
      </section>

      <section>
        <h2>6. How information is shared</h2>
        <p>
          We do not sell personal information. We may disclose information to
          service providers that help us operate the site, including Supabase
          for database and infrastructure services and our website hosting
          providers. These providers process information for the services they
          supply to us.
        </p>
        <p>
          We may also disclose information when reasonably necessary to comply
          with law, protect rights or safety, investigate misuse, or complete a
          business reorganisation. We do not share newsletter details with
          unrelated marketers for their own direct marketing.
        </p>
      </section>

      <section>
        <h2>7. International processing</h2>
        <p>
          Our service providers may process information in countries other than
          your own. Where required, we use appropriate safeguards for
          international transfers. Privacy protections can vary by country.
        </p>
      </section>

      <section>
        <h2>8. Retention and security</h2>
        <p>
          We retain newsletter information while your subscription is active
          and for a reasonable period afterward when needed for consent,
          suppression, security, dispute, or legal records. We delete or
          anonymise information when it is no longer reasonably required.
        </p>
        <p>
          We use reasonable administrative and technical safeguards, including
          restricted database access. No online service can promise perfect
          security, but we do our best not to leave the castle gate open.
        </p>
      </section>

      <section>
        <h2>9. Your privacy rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, restrict, object to, or receive a copy of your personal
          information, and to withdraw consent. You may also have the right to
          complain to your local privacy regulator.
        </p>
        <p>
          We do not sell personal information or use it for cross-context
          behavioural advertising. If you make a request, we may need to verify
          your identity before acting on it.
        </p>
      </section>

      <section>
        <h2>10. Children’s privacy</h2>
        <p>
          The site is intended for adults and business users. We do not
          knowingly collect personal information from children under 13. If you
          believe a child has submitted information, please contact us so it can
          be reviewed and removed.
        </p>
      </section>

      <section>
        <h2>11. Changes and contact</h2>
        <p>
          We may update this policy as the site changes. Material updates will
          be posted here with a revised effective date.
        </p>
        <p>
          To ask a privacy question or exercise a right, reply to a Workflow
          Wizard AI newsletter email or use the Contact option on our homepage.
          Please include enough detail for us to understand and verify your
          request.
        </p>
        <p>
          You can also read our <Link href="/terms-and-conditions">Terms and Conditions</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
