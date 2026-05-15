/**
 * Canonical site origin for metadataBase, sitemap, and robots.
 * Set `NEXT_PUBLIC_SITE_URL` at build time if the live domain differs.
 */
export const SITE_URL = (
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
  process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
    ? process.env.NEXT_PUBLIC_SITE_URL.trim()
    : "https://puredesignhub.com"
).replace(/\/$/, "");
