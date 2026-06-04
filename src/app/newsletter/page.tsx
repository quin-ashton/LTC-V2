import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Newsletter",
  description:
    "Subscribe to Link to Charity updates. Impact reports, new retailers, charity news, and platform growth.",
  path: "/newsletter",
});

const benefits = [
  "Monthly impact updates and donation milestones",
  "New retailer announcements as our network grows",
  "Charity partner news and impact stories",
  "Platform updates and transparency reports",
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        title="Stay connected"
        subtitle="Join thousands of shoppers making a difference. Get impact updates delivered to your inbox."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <NewsletterForm />
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-ltc-black mb-4">
              What you&apos;ll receive
            </h2>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ltc-gray">
                  <span className="text-ltc-green shrink-0" aria-hidden>
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-8 text-xs text-ltc-gray text-center">
            We respect your privacy. Unsubscribe anytime. See our{" "}
            <a href="/privacy" className="text-ltc-accent hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
