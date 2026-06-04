import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Link to Charity privacy policy. How we handle cookies, analytics, affiliate tracking, and newsletter data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="Last updated: June 1, 2026"
      />
      <article className="pb-24 prose-ltc mx-auto max-w-3xl px-4 sm:px-6">
        <LegalSection title="Introduction">
          <p>
            Link to Charity (&quot;LTC,&quot; &quot;we,&quot; &quot;us&quot;) is
            committed to protecting your privacy. This policy explains how we
            collect, use, and safeguard information when you use our website and
            services.
          </p>
        </LegalSection>

        <LegalSection title="Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Contact information:</strong> Name and email when you
              submit our contact form or subscribe to our newsletter.
            </li>
            <li>
              <strong>Usage data:</strong> Pages visited, retailer clicks, and
              general analytics to improve our platform.
            </li>
            <li>
              <strong>Affiliate tracking data:</strong> When you click through
              to a retailer, standard affiliate tracking cookies may be set to
              attribute purchases to Link to Charity.
            </li>
            <li>
              <strong>Technical data:</strong> Browser type, device type, IP
              address (anonymized where possible), and referring URLs.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Cookies">
          <p>We use cookies and similar technologies for:</p>
          <ul>
            <li>Essential website functionality</li>
            <li>Analytics to understand how visitors use our site</li>
            <li>Affiliate tracking to attribute commissions from retailer purchases</li>
            <li>Remembering newsletter subscription preferences</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling
            cookies may affect affiliate tracking and our ability to generate
            donations from your purchases.
          </p>
        </LegalSection>

        <LegalSection title="Affiliate Tracking">
          <p>
            When you click a retailer link on Link to Charity, you may be
            redirected through affiliate tracking URLs. Retailers and affiliate
            networks may set cookies to track whether a purchase was referred by
            our platform. This is standard affiliate marketing practice and does
            not change the price you pay.
          </p>
        </LegalSection>

        <LegalSection title="Analytics">
          <p>
            We use privacy-respecting analytics to understand traffic patterns
            and improve user experience. Analytics data is aggregated and does
            not personally identify individual shoppers unless voluntarily
            provided through forms.
          </p>
        </LegalSection>

        <LegalSection title="Newsletter Data">
          <p>
            If you subscribe to our newsletter, we store your email address to
            send impact updates, new retailer announcements, and platform news.
            You may unsubscribe at any time via the link in any email or by
            contacting us.
          </p>
        </LegalSection>

        <LegalSection title="How We Use Your Information">
          <ul>
            <li>Operate and improve the Link to Charity platform</li>
            <li>Track and report charitable impact statistics</li>
            <li>Respond to contact form inquiries</li>
            <li>Send newsletter communications (with consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </LegalSection>

        <LegalSection title="Data Sharing">
          <p>
            We do not sell your personal information. We may share data with:
          </p>
          <ul>
            <li>Affiliate networks and retailers (tracking data only, as required for commission attribution)</li>
            <li>Service providers who assist in operating our website</li>
            <li>Authorities when required by law</li>
          </ul>
        </LegalSection>

        <LegalSection title="Your Rights">
          <p>
            Depending on your location, you may have rights to access, correct,
            delete, or port your personal data. Contact us at privacy@linktocharity.org
            to exercise these rights.
          </p>
        </LegalSection>

        <LegalSection title="Security">
          <p>
            We implement reasonable technical and organizational measures to
            protect your information. No method of transmission over the Internet
            is 100% secure.
          </p>
        </LegalSection>

        <LegalSection title="Children">
          <p>
            Our services are not directed at children under 13. We do not
            knowingly collect personal information from children.
          </p>
        </LegalSection>

        <LegalSection title="Changes">
          <p>
            We may update this policy periodically. Material changes will be
            noted on this page with an updated date.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Questions about this policy: privacy@linktocharity.org
          </p>
        </LegalSection>
      </article>
    </>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-ltc-black mb-4">{title}</h2>
      <div className="space-y-4 text-sm text-ltc-gray leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-ltc-black">
        {children}
      </div>
    </section>
  );
}
