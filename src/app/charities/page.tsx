import { CharitiesFilter } from "@/components/CharitiesFilter";
import { PageHero } from "@/components/PageHero";
import { TrustBanner } from "@/components/TrustBanner";
import { getCharities, getCharityCategories } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Charities",
  description:
    "Meet the charity partners supported by Link to Charity. Affiliate commissions from your shopping fund real-world impact.",
  path: "/charities",
});

export default function CharitiesPage() {
  const charities = getCharities();
  const categories = getCharityCategories();

  return (
    <>
      <PageHero
        title="Charities we support"
        subtitle="Every commission we earn from your shopping is donated to these trusted organizations. Full transparency, real impact."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <TrustBanner />
          </div>
          <CharitiesFilter charities={charities} categories={categories} />
        </div>
      </section>
    </>
  );
}
