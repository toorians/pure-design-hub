import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Terms and Conditions | PureDesignHub",
  description: "View the terms and conditions for using PureDesignHub's digital services and website. Understand your rights and responsibilities.",
  alternates: {
    canonical: `${SITE_URL}/terms-and-conditions`,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
