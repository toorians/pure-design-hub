import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "About PureDesignHub | Our Mission & Expert Digital Team",
  description: "Learn more about PureDesignHub, a top-rated digital agency dedicated to delivering innovative web, mobile, and marketing solutions for businesses across the USA.",
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/about-us`,
      "url": `${SITE_URL}/about-us`,
      "name": "About Us - Pure Design Hub",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Organization",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "description": "Learn more about Pure Design Hub, a full-service digital agency offering SEO, web development, mobile app development, branding, logo design, content writing, and social media marketing services for businesses in the United States."
    },
    {
      "@type": "Organization",
      "name": "Pure Design Hub",
      "url": `${SITE_URL}/`,
      "logo": `${SITE_URL}/_next/static/media/Png_2.03f48aca.png`,
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "sameAs": [
        "https://www.facebook.com/people/Pure-Design-Hub/61577469429417/",
        "https://www.instagram.com/puredesignhubofficial/",
        "https://www.linkedin.com/"
      ]
    },
    {
      "@type": "AboutPage",
      "name": "About Pure Design Hub",
      "url": `${SITE_URL}/about-us`,
      "mainEntity": {
        "@type": "Organization",
        "name": "Pure Design Hub"
      }
    }
  ]
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}

