import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Affordable Digital Service Packages | PureDesignHub Pricing",
  description: "Check out our competitive pricing for web development, SEO, and branding packages. We offer cost-effective solutions for startups and established businesses.",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
