import charitiesData from "@/data/charities.json";
import impactData from "@/data/impact.json";
import retailersData from "@/data/retailers.json";
import type { Charity, ImpactStats, MonthlyDonation, Retailer } from "@/types";

export function getRetailers(): Retailer[] {
  return retailersData as Retailer[];
}

export function getFeaturedRetailers(limit = 8): Retailer[] {
  return getRetailers()
    .filter((r) => r.featured)
    .slice(0, limit);
}

export function getRetailerCategories(): Retailer["category"][] {
  const categories = new Set(getRetailers().map((r) => r.category));
  return Array.from(categories).sort();
}

export function getCharities(): Charity[] {
  return charitiesData as Charity[];
}

export function getFeaturedCharities(limit = 6): Charity[] {
  return getCharities()
    .filter((c) => c.featured)
    .slice(0, limit);
}

export function getCharityCategories(): Charity["category"][] {
  const categories = new Set(getCharities().map((c) => c.category));
  return Array.from(categories).sort();
}

export function getImpactStats(): ImpactStats {
  const { monthlyDonations: _, milestones: __, ...stats } = impactData;
  return stats as ImpactStats;
}

export function getMonthlyDonations(): MonthlyDonation[] {
  return impactData.monthlyDonations as MonthlyDonation[];
}

export function getMilestones() {
  return impactData.milestones;
}

export function searchRetailers(
  query: string,
  category?: string,
  letter?: string
): Retailer[] {
  const q = query.trim().toLowerCase();
  return getRetailers().filter((r) => {
    if (category && category !== "All" && r.category !== category) return false;
    if (letter && letter !== "All" && r.name[0]?.toUpperCase() !== letter)
      return false;
    if (!q) return true;
    return (
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q)
    );
  });
}
