import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Browser Extension",
  description:
    "Install the Link to Charity Chrome extension. Automatic retailer detection and donation opportunities while you shop.",
  path: "/extension",
  keywords: ["browser extension charity", "chrome extension donate shopping"],
});

const benefits = [
  {
    title: "Automatic detection",
    description:
      "When you visit a supported retailer, the extension reminds you to shop through Link to Charity.",
  },
  {
    title: "Never miss a donation",
    description:
      "Activate affiliate tracking with one click so commissions go to charity, not marketers.",
  },
  {
    title: "Privacy-first",
    description:
      "We don't read your browsing history or personal data. Only retailer detection on supported sites.",
  },
];

const faqs = [
  {
    question: "Which browsers are supported?",
    answer:
      "The Link to Charity extension is currently available for Google Chrome. Firefox and Safari versions are planned.",
  },
  {
    question: "Does the extension track everything I browse?",
    answer:
      "No. The extension only activates on supported retailer websites to offer donation opportunities. We do not collect or sell browsing data.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes, completely free. Like the website, the extension helps redirect affiliate commissions to charity at no cost to you.",
  },
];

export default function ExtensionPage() {
  return (
    <>
      <PageHero
        title="Shop smarter with our extension"
        subtitle="Automatically detect when you're on a supported retailer and activate charity donations with one click."
      >
        <a
          href="#"
          className="inline-block rounded-full bg-ltc-accent px-8 py-3.5 text-base font-medium text-white hover:bg-ltc-accent/90 transition-colors"
        >
          Add to Chrome — Free
        </a>
      </PageHero>

      <section className="py-16 bg-ltc-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-white p-6 border border-black/5"
              >
                <h3 className="text-lg font-semibold text-ltc-black">{b.title}</h3>
                <p className="mt-2 text-sm text-ltc-gray leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-center text-ltc-black mb-8">
            How to install
          </h2>
          <ol className="space-y-4 max-w-lg mx-auto">
            {[
              "Click 'Add to Chrome' above",
              "Confirm the installation in the Chrome Web Store",
              "Pin the extension for easy access",
              "Shop at supported retailers — we'll notify you",
            ].map((step, i) => (
              <li key={step} className="flex gap-4 items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ltc-accent text-white text-sm font-semibold">
                  {i + 1}
                </span>
                <span className="text-sm text-ltc-gray pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-16 rounded-2xl bg-ltc-light aspect-video flex items-center justify-center border border-black/5">
            <p className="text-ltc-gray text-sm">Extension screenshots coming soon</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-ltc-light">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-center text-ltc-black mb-8">
            Extension FAQs
          </h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="text-ltc-gray mb-4">Prefer shopping without an extension?</p>
        <Link
          href="/retailers"
          className="text-ltc-accent font-medium hover:underline"
        >
          Browse retailers on the website →
        </Link>
      </section>
    </>
  );
}
