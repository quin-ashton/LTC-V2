import type { Charity } from "@/types";

type CharityCardProps = {
  charity: Charity;
};

export function CharityCard({ charity }: CharityCardProps) {
  const initial = charity.name.charAt(0).toUpperCase();

  return (
    <article className="flex flex-col rounded-2xl bg-white border border-black/5 p-6 hover:border-black/10 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white text-xl font-semibold"
          style={{ backgroundColor: charity.logoColor }}
          aria-hidden
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold text-lg text-ltc-black">{charity.name}</h3>
          <span className="inline-block mt-1 text-xs font-medium text-ltc-gray bg-ltc-light px-2.5 py-0.5 rounded-full">
            {charity.category}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-ltc-black">{charity.mission}</p>
      <p className="mt-2 text-sm text-ltc-gray line-clamp-3 flex-1">
        {charity.description}
      </p>

      <a
        href={charity.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm font-medium text-ltc-accent hover:underline inline-flex items-center gap-1"
      >
        Visit website
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}
