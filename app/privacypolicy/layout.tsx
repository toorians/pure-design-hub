import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Privacy Policy | PureDesignHub Digital Agency",
  description: "Read the privacy policy of PureDesignHub. We are committed to protecting your personal data and ensuring a secure experience on our website.",
  alternates: {
    canonical: `${SITE_URL}/privacypolicy`,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
