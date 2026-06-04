# Link to Charity

A modern website that turns everyday online shopping into charitable donations by redirecting affiliate commissions to charity partners. Shoppers pay nothing extra.

## Tech Stack

- **Next.js 15** (App Router) — fast, SEO-friendly pages
- **React 19** + **TypeScript**
- **Tailwind CSS** — Apple-inspired minimal design

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, impact counters, how it works, featured retailers & charities |
| `/retailers` | Searchable retailer database with filters |
| `/charities` | Charity partners with category filters |
| `/how-it-works` | Visual flow, examples, FAQs |
| `/impact` | Live counters, donation charts, milestones |
| `/contact` | Contact form with spam protection |
| `/extension` | Browser extension promotion |
| `/newsletter` | Newsletter signup |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Data Layer

Retailers and charities are stored in JSON for easy scaling:

- `src/data/retailers.json` — add retailers without touching components
- `src/data/charities.json` — charity partner directory
- `src/data/impact.json` — impact statistics and charts

Update `affiliateUrl` in retailer entries to point to your real affiliate tracking URLs.

## Build

```bash
npm run build
npm start
```

## Core Concept

Retailers already pay affiliate commissions to marketers. Link to Charity receives those commissions and donates them to charity. The shopper and retailer pay nothing extra.
