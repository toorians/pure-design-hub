import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout | PureDesignHub",
  description: "Complete your order securely with PureDesignHub. Choose your payment method and start your digital project with us today.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
