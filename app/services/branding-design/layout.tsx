import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Digital Branding Services | Brand Strategy & Identity Design",
  description: "Looking for Digital Branding solutions? We develop unique brand identities, logos and strategies that position your business for growth.",
  alternates: {
    canonical: `${SITE_URL}/services/branding-design`,
  },
};

const brandingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/branding-design`,
      "url": `${SITE_URL}/services/branding-design`,
      "name": "Digital Branding Services | Brand Strategy & Identity Design",
      "description": "Looking for Digital Branding solutions We develop unique brand identities, logos and strategies that position your business for growth.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Service",
        "name": "Branding Design Services"
      }
    },
    {
      "@type": "Service",
      "name": "Branding Design Services",
      "serviceType": "Brand Identity and Visual Branding",
      "provider": {
        "@type": "Organization",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Looking for Digital Branding solutions We develop unique brand identities, logos and strategies that position your business for growth"
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
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${SITE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${SITE_URL}/services/`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Branding Design",
          "item": `${SITE_URL}/services/branding-design`
        }
      ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandingSchema) }}
      />
      {children}
    </>
  );
}

