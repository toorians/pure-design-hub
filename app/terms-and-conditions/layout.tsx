import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | PureDesignHub",
  description: "View the terms and conditions for using PureDesignHub's digital services and website. Understand your rights and responsibilities.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
