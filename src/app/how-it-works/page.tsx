import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { PageHero } from "@/components/PageHero";
import { TrustBanner } from "@/components/TrustBanner";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "How It Works",
  description:
    "Learn how Link to Charity redirects affiliate commissions to charity. Shop normally, pay nothing extra, and support causes you care about.",
  path: "/how-it-works",
  keywords: ["how affiliate charity works", "donate while shopping free"],
});

const faqs = [
  {
    question: "Does this cost me anything extra?",
    answer:
      "No. You pay exactly the same price as shopping directly. Retailers already budget affiliate commissions for marketing partners. Link to Charity simply receives that commission and donates it instead.",
  },
  {
    question: "What is affiliate marketing?",
    answer:
      "When you shop online, retailers often pay a commission to websites that referred you — influencers, coupon sites, or review blogs. That commission already exists. Link to Charity is registered as an affiliate partner and redirects those earnings to charity.",
  },
  {
    question: "How are donations funded?",
    answer:
      "100% of affiliate commissions earned through Link to Charity are donated to our charity partners. We operate as a not-for-profit initiative focused on maximizing charitable impact from everyday shopping.",
  },
  {
    question: "Do retailers pay extra?",
    answer:
      "No. Retailers pay the same affiliate commission they would pay to any marketing partner. Nothing changes on their end — only where the commission goes.",
  },
  {
    question: "How do I know donations are real?",
    answer:
      "Our Impact page displays live statistics including total raised, purchases tracked, and donation history. We publish transparency reports and milestone updates so you can verify our progress.",
  },
  {
    question: "What if I use an ad blocker?",
    answer:
      "Some ad blockers may interfere with affiliate tracking. For the best experience, consider using our browser extension or allowing Link to Charity when you click through to shop.",
  },
];

const flowSteps = [
  { label: "You", description: "Shop online as normal" },
  { label: "Retailer", description: "Processes your purchase" },
  { label: "Affiliate Commission", description: "Paid by retailer" },
  { label: "Link to Charity", description: "Receives commission" },
  { label: "Charity", description: "Receives donation" },
  { label: "Real Impact", description: "Lives changed" },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        title="How Link to Charity works"
        subtitle="We redirect affiliate commissions that retailers already pay — from marketers to charities. You shop normally. Charity wins."
      />

      <section className="py-16 bg-ltc-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <HowItWorksSteps />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-ltc-black mb-12">
            The complete flow
          </h2>
          <div className="flex flex-col gap-4">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ltc-accent text-white text-sm font-semibold">
                  {i + 1}
                </div>
                <div className="flex-1 rounded-xl bg-ltc-light px-5 py-4">
                  <p className="font-semibold text-ltc-black">{step.label}</p>
                  <p className="text-sm text-ltc-gray">{step.description}</p>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="hidden sm:block text-ltc-gray" aria-hidden>
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ltc-light">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-ltc-black mb-6">
            A real example
          </h2>
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-black/5 space-y-4 text-sm text-ltc-gray leading-relaxed">
            <p>
              <strong className="text-ltc-black">You</strong> need running shoes
              and were going to buy from Nike anyway.
            </p>
            <p>
              <strong className="text-ltc-black">Step 1:</strong> You visit Link
              to Charity and click the Nike retailer card.
            </p>
            <p>
              <strong className="text-ltc-black">Step 2:</strong> You&apos;re
              redirected to Nike.com with affiliate tracking active.
            </p>
            <p>
              <strong className="text-ltc-black">Step 3:</strong> You buy $120
              shoes at the regular price — no markup, no fees.
            </p>
            <p>
              <strong className="text-ltc-black">Step 4:</strong> Nike pays an
              ~8% affiliate commission ($9.60) to Link to Charity.
            </p>
            <p>
              <strong className="text-ltc-black">Step 5:</strong> Link to
              Charity donates that commission to charity partners.
            </p>
            <p className="text-ltc-black font-medium">
              Result: You got the shoes you wanted. Charity received $9.60. You
              paid nothing extra.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <TrustBanner />
          <h2 className="text-2xl font-semibold text-ltc-black mt-16 mb-8 text-center">
            Frequently asked questions
          </h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="py-16 text-center">
        <Link
          href="/retailers"
          className="inline-block rounded-full bg-ltc-accent px-8 py-3.5 text-base font-medium text-white hover:bg-ltc-accent/90 transition-colors"
        >
          Find a Retailer
        </Link>
      </section>
    </>
  );
}
