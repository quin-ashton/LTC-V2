import type { MetadataRoute } from "next";

const baseUrl = "https://linktocharity.com";

const routes = [
  "",
  "/retailers",
  "/charities",
  "/how-it-works",
  "/impact",
  "/contact",
  "/extension",
  "/newsletter",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/impact" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/retailers" ? 0.9 : 0.7,
  }));
}
