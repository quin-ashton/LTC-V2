import { getImpactStats } from "@/lib/data";
import { AnimatedCounter } from "./AnimatedCounter";

export function ImpactCounters() {
  const stats = getImpactStats();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
        value={stats.retailersAvailable}
        label="Retailers Available"
      />
      <AnimatedCounter
        value={stats.charitiesSupported}
        label="Charities Supported"
      />
    </div>
  );
}
