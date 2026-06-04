import type { Metadata } from "next";

const SITE_URL = "https://linktocharity.org";
const SITE_NAME = "Link to Charity";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMeta): Metadata {
  const fullTitle =
    title === "Home" ? `${SITE_NAME} — Shop Online, Support Charity` : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "charity shopping",
      "shop for charity",
      "ethical shopping",
      "affiliate donations",
      "donate while shopping",
      "support charities for free",
      ...keywords,
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Link to Charity redirects affiliate commissions from online shopping to charitable causes. Shoppers pay nothing extra.",
  nonprofitStatus: "NonprofitType",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/retailers?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
