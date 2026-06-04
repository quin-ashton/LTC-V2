"use client";

import { useEffect, useRef, useState } from "react";
import { formatCurrency } from "@/lib/format";
import type { MonthlyDonation } from "@/types";

type DonationChartProps = {
  data: MonthlyDonation[];
  title: string;
};

export function DonationChart({ data, title }: DonationChartProps) {
  const max = Math.max(...data.map((d) => d.amount));
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <h3 className="text-lg font-semibold text-ltc-black mb-6">{title}</h3>
      <div className="flex items-end gap-1 sm:gap-2 h-48">
        {data.map((d, i) => {
          const height = (d.amount / max) * 100;
          return (
            <div
              key={`${d.month}-${d.year}`}
              className="flex-1 flex flex-col items-center gap-2 group"
            >
              <div className="relative w-full flex-1 flex items-end">
                <div
                  className="w-full rounded-t-md bg-ltc-accent transition-all duration-700 ease-out group-hover:bg-ltc-accent/80"
                  style={{
                    height: visible ? `${height}%` : "0%",
                    transitionDelay: `${i * 30}ms`,
                  }}
                  title={`${d.month} ${d.year}: ${formatCurrency(d.amount)}`}
                />
              </div>
              <span className="text-[10px] sm:text-xs text-ltc-gray -rotate-0 truncate w-full text-center">
                {d.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
