"use client";

import { useMemo, useState } from "react";
import { RetailerCard } from "./RetailerCard";
import { getAlphabet } from "@/lib/format";
import type { Retailer } from "@/types";

type RetailersSearchProps = {
  retailers: Retailer[];
  categories: string[];
};

export function RetailersSearch({ retailers, categories }: RetailersSearchProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [letter, setLetter] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return retailers.filter((r) => {
      if (category !== "All" && r.category !== category) return false;
      if (letter !== "All" && r.name[0]?.toUpperCase() !== letter) return false;
      if (!q) return true;
      return (
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
      );
    });
  }, [retailers, query, category, letter]);

  const alphabet = getAlphabet();

  return (
    <div>
      <div className="sticky top-14 z-40 bg-white/95 backdrop-blur-xl border-b border-black/5 py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <label htmlFor="retailer-search" className="sr-only">
            Search retailers
          </label>
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ltc-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              id="retailer-search"
              type="search"
              placeholder="Search 1,000+ retailers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-black/10 bg-ltc-light pl-12 pr-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-ltc-accent/50 focus:bg-white transition-colors"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <button
            type="button"
            onClick={() => setCategory("All")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
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
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                category === cat
                  ? "bg-ltc-black text-white"
                  : "bg-ltc-light text-ltc-gray hover:text-ltc-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-3 overflow-x-auto pb-1">
          <div className="flex gap-1 min-w-max justify-center px-2">
            <button
              type="button"
              onClick={() => setLetter("All")}
              className={`h-8 min-w-[2rem] rounded-md text-xs font-medium ${
                letter === "All" ? "bg-ltc-accent text-white" : "text-ltc-gray hover:bg-ltc-light"
              }`}
            >
              All
            </button>
            {alphabet.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLetter(l)}
                className={`h-8 w-8 rounded-md text-xs font-medium ${
                  letter === l ? "bg-ltc-accent text-white" : "text-ltc-gray hover:bg-ltc-light"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-ltc-gray text-center">
        {filtered.length} retailer{filtered.length !== 1 ? "s" : ""} found
        {query && ` for "${query}"`}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((retailer) => (
            <RetailerCard key={retailer.id} retailer={retailer} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center py-12">
          <p className="text-lg font-medium text-ltc-black">No retailers found</p>
          <p className="mt-2 text-sm text-ltc-gray">
            Try a different search term or browse all categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
              setLetter("All");
            }}
            className="mt-4 text-sm font-medium text-ltc-accent hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
