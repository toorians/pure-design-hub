import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Writing Services | SEO Optimized Website & Blog Content",
  description: "Looking for expert content writers? We create SEO-friendly, well-researched content for websites, blogs, and digital marketing campaigns.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
