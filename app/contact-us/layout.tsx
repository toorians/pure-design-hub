import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PureDesignHub | Get a Free Digital Strategy Consultation",
  description: "Ready to grow your business? Contact PureDesignHub today for expert web development, SEO, and branding services. Let's build something great together.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
