import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable SEO Services in USA | PureDesignHub",
  description: "Looking for affordable SEO services in the USA? PureDesignHub helps businesses improve rankings, drive traffic, and generate leads with cost-effective SEO strategies.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
