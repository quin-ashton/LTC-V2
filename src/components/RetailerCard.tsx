import type { Retailer } from "@/types";

type RetailerCardProps = {
  retailer: Retailer;
};

export function RetailerCard({ retailer }: RetailerCardProps) {
  const initial = retailer.name.charAt(0).toUpperCase();

  return (
    <article className="group flex flex-col rounded-2xl bg-white border border-black/5 p-5 hover:border-black/10 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white text-lg font-semibold"
          style={{ backgroundColor: retailer.logoColor }}
          aria-hidden
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-ltc-black truncate">{retailer.name}</h3>
          <p className="text-xs text-ltc-gray mt-0.5">{retailer.category}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-ltc-gray line-clamp-2 flex-1">
        {retailer.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-ltc-green bg-ltc-green/10 px-2.5 py-1 rounded-full">
          {retailer.donationRate}
        </span>
        <a
          href={retailer.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="rounded-full bg-ltc-black px-4 py-2 text-xs font-medium text-white hover:bg-ltc-black/80 transition-colors shrink-0"
        >
          Shop
        </a>
      </div>
    </article>
  );
}
