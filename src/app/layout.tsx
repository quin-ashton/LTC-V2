import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://link-to-charity.com"),
  title: {
    default: "Link to Charity — Shop Online, Support Charity",
    template: "%s | Link to Charity",
  },
  description:
    "Turn everyday online shopping into charitable donations. Affiliate commissions fund charity — you pay nothing extra.",
  keywords: [
    "charity shopping",
    "shop for charity",
    "ethical shopping",
    "affiliate donations",
    "donate while shopping",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
  src="https://s.skimresources.com/js/305309X1793505.skimlinks.js"
  strategy="afterInteractive"
/>
      </body>
    </html>
  );
}
