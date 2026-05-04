import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PureDesignHub | Web Development, SEO & Digital Marketing Agency in USA",
  description: "PureDesignHub is a leading digital agency in the USA offering custom web development, professional SEO, mobile app development, and branding solutions to grow your business.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
