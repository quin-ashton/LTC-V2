"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/5 rounded-2xl border border-black/5 overflow-hidden">
      {items.map((item, i) => (
        <div key={item.question}>
          <button
            type="button"
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-ltc-light/50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-medium text-ltc-black">{item.question}</span>
            <svg
              className={`h-5 w-5 shrink-0 text-ltc-gray transition-transform ${open === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === i && (
            <div className="px-6 pb-5 -mt-1">
              <p className="text-sm text-ltc-gray leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
