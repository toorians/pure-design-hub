import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development Services | Custom Web Solutions – PureDesignHub",
  description: "Get professional website development services in the USA. PureDesignHub builds fast, responsive, and SEO-friendly websites designed to grow your business online.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
