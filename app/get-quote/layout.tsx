import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Get a Free Quote | Digital Solutions for Your Business – PureDesignHub",
  description: "Request a free quote for your web development, SEO, or branding project. PureDesignHub offers affordable and high-quality digital services tailored to your needs.",
  alternates: {
    canonical: `${SITE_URL}/get-quote`,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
