import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Link to Charity terms of service. Rules and guidelines for using our charity shopping platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        subtitle="Last updated: June 1, 2026"
      />
      <article className="pb-24 mx-auto max-w-3xl px-4 sm:px-6">
        <LegalSection title="Agreement to Terms">
          <p>
            By accessing or using Link to Charity (&quot;LTC,&quot; &quot;the
            Platform&quot;), you agree to these Terms of Service. If you do not
            agree, please do not use our services.
          </p>
        </LegalSection>

        <LegalSection title="Description of Service">
          <p>
            Link to Charity is a not-for-profit initiative that redirects
            affiliate commissions from online retail purchases to charitable
            organizations. Users shop through affiliate links at no additional
            cost. Retailers pay standard affiliate commissions; LTC donates
            received commissions to charity partners.
          </p>
        </LegalSection>

        <LegalSection title="No Extra Cost">
          <p>
            Link to Charity does not charge shoppers any fees. Prices on
            retailer websites are determined solely by the retailer. We do not
            add markups, surcharges, or hidden fees to any purchase.
          </p>
        </LegalSection>

        <LegalSection title="Affiliate Relationships">
          <p>
            LTC participates in affiliate marketing programs with retailers. When
            you click a retailer link and complete a qualifying purchase, LTC may
            receive an affiliate commission. Commission rates vary by retailer
            and are displayed as estimates (&quot;Up to X%&quot;).
          </p>
          <p>
            Commissions are only earned when purchases are successfully tracked
            and confirmed by affiliate networks. Tracking may fail due to ad
            blockers, cookie settings, returning directly to retailer sites, or
            network policies.
          </p>
        </LegalSection>

        <LegalSection title="Donations">
          <p>
            LTC commits to donating affiliate commissions to supported charity
            partners. Donation amounts, timing, and allocation may vary. Impact
            statistics published on our website represent good-faith estimates
            based on tracked affiliate data.
          </p>
        </LegalSection>

        <LegalSection title="User Responsibilities">
          <ul>
            <li>Use the Platform for lawful personal shopping purposes</li>
            <li>Do not attempt to manipulate affiliate tracking systems</li>
            <li>Do not use automated tools to generate fraudulent clicks</li>
            <li>Provide accurate information when contacting us or subscribing to newsletters</li>
          </ul>
        </LegalSection>

        <LegalSection title="Third-Party Retailers">
          <p>
            Retailer websites are operated by third parties. LTC is not
            responsible for retailer products, pricing, shipping, returns, or
            customer service. Your relationship with retailers is governed by
            their respective terms and policies.
          </p>
        </LegalSection>

        <LegalSection title="Intellectual Property">
          <p>
            All content on the Platform, including text, graphics, logos, and
            design, is owned by Link to Charity or licensed to us. You may not
            reproduce, distribute, or create derivative works without permission.
          </p>
        </LegalSection>

        <LegalSection title="Disclaimer of Warranties">
          <p>
            The Platform is provided &quot;as is&quot; without warranties of any
            kind. We do not guarantee uninterrupted access, accurate commission
            tracking, or specific donation amounts.
          </p>
        </LegalSection>

        <LegalSection title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, LTC shall not be liable for
            indirect, incidental, special, or consequential damages arising from
            your use of the Platform.
          </p>
        </LegalSection>

        <LegalSection title="Modifications">
          <p>
            We may modify these Terms at any time. Continued use after changes
            constitutes acceptance. Material changes will be posted on this page.
          </p>
        </LegalSection>

        <LegalSection title="Governing Law">
          <p>
            These Terms are governed by applicable laws in the jurisdiction where
            Link to Charity operates, without regard to conflict of law
            principles.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>Questions about these Terms: legal@linktocharity.org</p>
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
      <div className="space-y-4 text-sm text-ltc-gray leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
