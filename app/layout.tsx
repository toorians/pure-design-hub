import type { Metadata } from "next";
import {Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500','600', '700'], 
  variable: '--font-roboto', 
})


export const metadata: Metadata = {
  title: "Pure Design",
  description: "Transforming ideas into impactful digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
