import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Online",
  description: "Boost your brand with expert social media marketing services in the USA. PureDesignHub helps increase engagement, reach, and conversions.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
