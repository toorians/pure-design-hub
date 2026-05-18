import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Digital Agency Support – PureDesignHub",
  description: "Have questions about our web development, SEO, or branding services? Find answers to commonly asked questions about our process, pricing, and expertise.",
  alternates: {
    canonical: `${SITE_URL}/faqs`,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
