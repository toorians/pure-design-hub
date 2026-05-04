import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Android & iOS Solutions",
  description: "End-to-end mobile app development services for businesses of all sizes. From idea to launch, we build apps that are fast, modern and scalable.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
