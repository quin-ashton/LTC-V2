import { PageHero } from "@/components/PageHero";
import { RetailersSearch } from "@/components/RetailersSearch";
import { TrustBanner } from "@/components/TrustBanner";
import { getRetailerCategories, getRetailers } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Retailers",
  description:
    "Search 1,000+ retailers and shop through Link to Charity. Affiliate commissions fund donations — you pay nothing extra.",
  path: "/retailers",
  keywords: ["charity shopping retailers", "shop for charity stores"],
});

export default function RetailersPage() {
  const retailers = getRetailers();
  const categories = getRetailerCategories();

  return (
    <>
      <PageHero
        title="Shop your favorite stores"
        subtitle="Search our retailer database and click through to shop. When you buy, affiliate commissions are donated to charity — at no extra cost to you."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-8">
            <TrustBanner />
          </div>
          <RetailersSearch retailers={retailers} categories={categories} />
        </div>
      </section>
    </>
  );
}
