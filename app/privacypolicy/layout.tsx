import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PureDesignHub Digital Agency",
  description: "Read the privacy policy of PureDesignHub. We are committed to protecting your personal data and ensuring a secure experience on our website.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
