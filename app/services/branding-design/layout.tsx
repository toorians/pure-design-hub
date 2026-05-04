import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Branding Services | Brand Strategy & Identity Design",
  description: "Looking for Digital Branding solutions? We develop unique brand identities, logos and strategies that position your business for growth.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
