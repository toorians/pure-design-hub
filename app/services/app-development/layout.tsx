import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Mobile App Development Services | Android & iOS Solutions",
  description: "End-to-end mobile app development services for businesses of all sizes. From idea to launch, we build apps that are fast, modern and scalable.",
  alternates: {
    canonical: `${SITE_URL}/services/app-development`,
  },
};

const appDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/app-development`,
      "url": `${SITE_URL}/services/app-development`,
      "name": "Mobile App Development Services - Pure Design Hub",
      "description": "Professional mobile app development services by Pure Design Hub, building scalable, user-friendly, and high-performance Android and iOS applications for businesses in the United States.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Service",
        "name": "Mobile App Development Services"
      }
    },
    {
      "@type": "Service",
      "name": "Mobile App Development Services",
      "serviceType": "iOS and Android App Development",
      "provider": {
        "@type": "Organization",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom mobile app development services including iOS apps, Android apps, cross-platform apps, MVP development, and scalable mobile solutions for startups and businesses."
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
          "name": "App Development",
          "item": `${SITE_URL}/services/app-development`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appDevSchema) }}
      />
      {children}
    </>
  );
}

