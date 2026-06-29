import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "about-me",
    "experience",
    "projects",
    "tech",
    "certifications",
    "contact-me",
  ];

  const base = siteUrl.replace(/\/$/, "");

  return routes.map((route) => ({
    url: route ? `${base}/${route}` : `${base}/`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
