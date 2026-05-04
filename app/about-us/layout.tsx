import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PureDesignHub | Our Mission & Expert Digital Team",
  description: "Learn more about PureDesignHub, a top-rated digital agency dedicated to delivering innovative web, mobile, and marketing solutions for businesses across the USA.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
