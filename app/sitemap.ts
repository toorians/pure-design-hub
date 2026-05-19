import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/siteUrl";

export const dynamic = "force-static";

/** Public routes (static export); keep in sync with app route pages. */
const PATHS: string[] = [
  "",
  "/about-us",
  "/contact-us",
  "/portfolio",
  "/pricing",
  "/get-quote",
  "/faqs",
  "/terms-and-conditions",
  "/privacypolicy",
  "/services/web-development",
  "/services/app-development",
  "/services/branding-design",
  "/services/content-writing",
  "/services/seo-services",
  "/services/social-media-marketing",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.map((path) => ({
    url: path === "" ? SITE_URL : SITE_URL + path,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.85 : 0.75,
  }));
}
