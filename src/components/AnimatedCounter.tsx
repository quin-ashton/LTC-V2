"use client";

import { useEffect, useRef, useState } from "react";
import { formatCurrency, formatNumber } from "@/lib/format";

type CounterProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  isCurrency?: boolean;
  duration?: number;
};

export function AnimatedCounter({
  value,
  label,
  prefix = "",
  suffix = "",
  isCurrency = false,
  duration = 2000,
}: CounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted = isCurrency
    ? formatCurrency(display)
    : `${prefix}${formatNumber(display)}${suffix}`;

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ltc-black tabular-nums">
        {formatted}
      </p>
      <p className="mt-2 text-sm text-ltc-gray">{label}</p>
    </div>
  );
}
