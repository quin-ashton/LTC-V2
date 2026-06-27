import Link from "next/link";
import { CharityCard } from "@/components/CharityCard";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { ImpactCounters } from "@/components/ImpactCounters";
import { NewsletterForm } from "@/components/NewsletterForm";
import { RetailerCard } from "@/components/RetailerCard";
import { TrustBanner } from "@/components/TrustBanner";
import { getFeaturedCharities, getFeaturedRetailers } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Shop online and support charity for free. Link to Charity redirects affiliate commissions to charitable causes. You pay nothing extra.",
  path: "/",
});

export default function HomePage() {
  const featuredRetailers = getFeaturedRetailers();
  const featuredCharities = getFeaturedCharities();

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover opacity-[0.25]"
          style={{
            backgroundImage: "url('/images/hero-background.jpeg')",
            backgroundPosition: "230% 45%",
            backgroundSize: "115% auto",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-24 text-center">
          <p className="text-sm font-medium text-ltc-accent mb-4 animate-fade-in">
            Affiliate commissions → Charity
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ltc-black text-balance animate-slide-up">
            Shop Online.
            <br />
            Support Charity.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-gray-700 leading-relaxed text-balance">
            Every purchase can help generate donations at absolutely no cost to
            you. Retailers already pay affiliate commissions — we redirect them
            to charity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/retailers"
              className="rounded-full bg-ltc-accent px-8 py-3.5 text-base font-medium text-white hover:bg-ltc-accent/90 transition-colors w-full sm:w-auto"
            >
              Start Shopping
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-black/10 px-8 py-3.5 text-base font-medium text-ltc-black hover:bg-ltc-light transition-colors w-full sm:w-auto"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ltc-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-ltc-gray uppercase tracking-wider mb-10">
            Live Impact
          </p>
          <ImpactCounters />
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ltc-black">
              How it works
            </h2>
            <p className="mt-4 text-ltc-gray">
              Four simple steps. You shop normally. Charity receives the
              commission.
            </p>
          </div>
          <HowItWorksSteps compact />
          <div className="mt-12 max-w-3xl mx-auto">
            <TrustBanner />
          </div>
        </div>
      </section>

      <section className="bg-ltc-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ltc-black">
                Featured retailers
              </h2>
              <p className="mt-2 text-ltc-gray">
                Click to shop. Commissions fund donations automatically.
              </p>
            </div>
            <Link
              href="/retailers"
              className="text-sm font-medium text-ltc-accent hover:underline shrink-0"
            >
              View all retailers →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredRetailers.map((retailer) => (
              <RetailerCard key={retailer.id} retailer={retailer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ltc-black">
                Charities we support
              </h2>
              <p className="mt-2 text-ltc-gray">
                Your shopping helps fund these incredible organizations.
              </p>
            </div>
            <Link
              href="/charities"
              className="text-sm font-medium text-ltc-accent hover:underline shrink-0"
            >
              View all charities →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCharities.map((charity) => (
              <CharityCard key={charity.id} charity={charity} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ltc-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ltc-black text-center">
            What shoppers say
          </h2>
          <p className="mt-4 text-center text-ltc-gray max-w-xl mx-auto">
            Real stories from people who shop with purpose.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "I was going to buy from Amazon anyway. Knowing a portion goes to charity makes it a no-brainer.",
                author: "Sarah M.",
                location: "Melbourne, AU",
              },
              {
                quote:
                  "Finally understood how this works — no extra cost, just redirecting money that was already there.",
                author: "James T.",
                location: "London, UK",
              },
              {
                quote:
                  "The impact page convinced me this is legitimate. Over $2.8M donated speaks for itself.",
                author: "Priya K.",
                location: "Toronto, CA",
              },
            ].map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl bg-white p-6 border border-black/5"
              >
                <p className="text-sm text-ltc-black leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-xs text-ltc-gray">
                  — {t.author}, {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ltc-black">
            Stay in the loop
          </h2>
          <p className="mt-4 text-ltc-gray">
            Impact updates, new retailers, and charity news — delivered to your
            inbox.
          </p>
          <div className="mt-8">
            <NewsletterForm compact />
          </div>
        </div>
      </section>

      <section className="bg-ltc-black text-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            You were going to shop anyway.
          </h2>
          <p className="mt-6 text-lg text-white/70 text-balance">
            If you can help charities for free, why wouldn&apos;t you use Link
            to Charity?
          </p>
          <Link
            href="/retailers"
            className="inline-block mt-10 rounded-full bg-white px-8 py-3.5 text-base font-medium text-ltc-black hover:bg-white/90 transition-colors"
          >
            Start Shopping — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  );
}
