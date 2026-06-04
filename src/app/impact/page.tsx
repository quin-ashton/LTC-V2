import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { DonationChart } from "@/components/DonationChart";
import { PageHero } from "@/components/PageHero";
import { TrustBanner } from "@/components/TrustBanner";
import {
  getImpactStats,
  getMilestones,
  getMonthlyDonations,
} from "@/lib/data";
import { formatCurrency } from "@/lib/format";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Impact",
  description:
    "See the real impact of Link to Charity. Live donation counters, transparency reports, and growth statistics.",
  path: "/impact",
  keywords: ["charity shopping impact", "affiliate donation transparency"],
});

export default function ImpactPage() {
  const stats = getImpactStats();
  const monthly = getMonthlyDonations();
  const milestones = getMilestones();
  const last12Months = monthly.slice(-12);
  const last6Months = monthly.slice(-6);
  const year2025 = monthly.filter((m) => m.year === 2025);
  const total2025 = year2025.reduce((sum, m) => sum + m.amount, 0);
  const total2026 = monthly
    .filter((m) => m.year === 2026)
    .reduce((sum, m) => sum + m.amount, 0);
  const growthRate =
    total2025 > 0
      ? Math.round(((total2026 / (total2025 / 12)) - 1) * 100)
      : 0;

  return (
    <>
      <PageHero
        title="Real impact. Full transparency."
        subtitle="Every number on this page represents real affiliate commissions redirected to charity. No hidden fees. No extra cost to shoppers."
      />

      <section className="bg-ltc-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            <AnimatedCounter
              value={stats.totalRaised}
              label="Total Donated"
              isCurrency
            />
            <AnimatedCounter
              value={stats.totalPurchases}
              label="Purchases Tracked"
            />
            <AnimatedCounter
              value={stats.totalClicks}
              label="Affiliate Clicks"
            />
            <AnimatedCounter
              value={stats.retailersAvailable}
              label="Retailers"
            />
            <AnimatedCounter
              value={stats.charitiesSupported}
              label="Charities"
            />
          </div>
          <p className="mt-8 text-center text-xs text-ltc-gray">
            Last updated: {stats.lastUpdated}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <DonationChart data={last12Months} title="Monthly donations (12 months)" />
            <DonationChart data={last6Months} title="Recent trend (6 months)" />
          </div>
        </div>
      </section>

      <section className="bg-ltc-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-ltc-black text-center mb-12">
            Growth statistics
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white p-6 text-center border border-black/5">
              <p className="text-3xl font-semibold text-ltc-black">
                {formatCurrency(total2025)}
              </p>
              <p className="mt-2 text-sm text-ltc-gray">Donated in 2025</p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center border border-black/5">
              <p className="text-3xl font-semibold text-ltc-black">
                {formatCurrency(total2026)}
              </p>
              <p className="mt-2 text-sm text-ltc-gray">Donated in 2026 (YTD)</p>
            </div>
            <div className="rounded-2xl bg-white p-6 text-center border border-black/5">
              <p className="text-3xl font-semibold text-ltc-green">
                +{growthRate}%
              </p>
              <p className="mt-2 text-sm text-ltc-gray">Monthly growth rate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-ltc-black text-center mb-12">
            Milestones
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.title} className="flex gap-6 pb-10 relative">
                {i < milestones.length - 1 && (
                  <div
                    className="absolute left-[11px] top-6 bottom-0 w-px bg-ltc-accent/30"
                    aria-hidden
                  />
                )}
                <div className="h-6 w-6 shrink-0 rounded-full bg-ltc-accent mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-ltc-gray">{m.date}</p>
                  <h3 className="text-lg font-semibold text-ltc-black mt-1">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm text-ltc-gray">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-ltc-light">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-ltc-black mb-6">
            Transparency commitment
          </h2>
          <div className="rounded-2xl bg-white p-6 sm:p-8 border border-black/5 space-y-4 text-sm text-ltc-gray leading-relaxed">
            <p>
              Link to Charity publishes donation statistics publicly. Affiliate
              commissions are the sole source of donations — we do not charge
              shoppers, retailers, or charities any fees.
            </p>
            <p>
              Annual transparency reports and detailed allocation breakdowns will
              be published as the platform grows. Our goal is complete openness
              about every dollar raised and donated.
            </p>
          </div>
          <div className="mt-8">
            <TrustBanner />
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold text-ltc-black mb-4">
          Be part of the next milestone
        </h2>
        <Link
          href="/retailers"
          className="inline-block rounded-full bg-ltc-accent px-8 py-3.5 text-base font-medium text-white hover:bg-ltc-accent/90 transition-colors"
        >
          Start Shopping
        </Link>
      </section>
    </>
  );
}
