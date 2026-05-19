// 'use client';

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { GeoProvider } from "@/app/context/GeoContext"; // Your GeoProvider if needed

// // Load your Stripe publishable key
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <GeoProvider> {/* Optionally wrap with other providers like GeoProvider */}
//           <Elements stripe={stripePromise}>
//             {children}
//           </Elements>
//         </GeoProvider>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import Script from "next/script";
import Providers from "./providers";
import "./globals.css";
import FloatingActions from "./component/FloatingActions";
import { SITE_URL } from "./lib/siteUrl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "rVBvxfTizYco7L31ozQWynX8xjGcv6BURMWVJSgS-VU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/assets/images/AI-02.png", type: "image/png", sizes: "any" },
      { url: "/assets/images/AI-02.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/assets/images/AI-02.png",
    apple: [{ url: "/assets/images/AI-02.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning: extensions (e.g. ColorZilla) add attrs like cz-shortcut-listen on <body> before React hydrates */}
      <body suppressHydrationWarning>
        <Providers>
          {children}
          <FloatingActions />
        </Providers>
        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6a04ed9841a4f41c3717f831/1johk0779';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`,
          }}
        />
      </body>
    </html>
  );
}