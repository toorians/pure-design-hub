import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "PureDesignHub | Web Development, SEO & Digital Marketing Agency in USA",
  description: "PureDesignHub is a leading digital agency in the USA offering custom web development, professional SEO, mobile app development, and branding solutions to grow your business.",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
