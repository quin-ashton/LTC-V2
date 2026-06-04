"use client";

import { useMemo, useState } from "react";
import { CharityCard } from "./CharityCard";
import type { Charity } from "@/types";

type CharitiesFilterProps = {
  charities: Charity[];
  categories: string[];
};

export function CharitiesFilter({ charities, categories }: CharitiesFilterProps) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return charities.filter((c) => {
      if (category !== "All" && c.category !== category) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.mission.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    });
  }, [charities, category, query]);

  return (
    <div>
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="search"
          placeholder="Search charities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-full border border-black/10 bg-ltc-light px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ltc-accent/50 focus:bg-white"
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          type="button"
          onClick={() => setCategory("All")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            category === "All"
              ? "bg-ltc-black text-white"
              : "bg-ltc-light text-ltc-gray hover:text-ltc-black"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              category === cat
                ? "bg-ltc-black text-white"
                : "bg-ltc-light text-ltc-gray hover:text-ltc-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((charity) => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </div>
    </div>
  );
}
