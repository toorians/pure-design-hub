import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Android & iOS Solutions",
  description: "End-to-end mobile app development services for businesses of all sizes. From idea to launch, we build apps that are fast, modern and scalable.",
  alternates: {
    canonical: `${SITE_URL}/mobile-app-development`,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
