export type RetailerCategory =
  | "Fashion"
  | "Electronics"
  | "Travel"
  | "Home"
  | "Beauty"
  | "Sports"
  | "Food"
  | "Health"
  | "Kids"
  | "Automotive"
  | "General";

export interface Retailer {
  id: string;
  name: string;
  slug: string;
  category: RetailerCategory;
  description: string;
  donationRate: string;
  affiliateUrl: string;
  featured?: boolean;
  logoColor: string;
}

export type CharityCategory =
  | "Environmental"
  | "Humanitarian"
  | "Medical"
  | "Animal Welfare"
  | "Children";

export interface Charity {
  id: string;
  name: string;
  slug: string;
  category: CharityCategory;
  mission: string;
  description: string;
  website: string;
  featured?: boolean;
  logoColor: string;
}

export interface ImpactStats {
  totalRaised: number;
  totalPurchases: number;
  totalClicks: number;
  retailersAvailable: number;
  charitiesSupported: number;
  lastUpdated: string;
}

export interface MonthlyDonation {
  month: string;
  year: number;
  amount: number;
}
