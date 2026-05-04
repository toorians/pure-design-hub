import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Successful Digital Projects by PureDesignHub",
  description: "Explore our work! See how PureDesignHub has helped businesses succeed with custom websites, mobile apps, and result-oriented marketing campaigns.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
