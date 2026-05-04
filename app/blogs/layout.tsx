import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog | Digital Marketing, Web & Tech Insights – PureDesignHub",
  description: "Stay updated with the latest trends in digital marketing, web development, and branding. PureDesignHub shares expert tips and insights to help your business grow.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
