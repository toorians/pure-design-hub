import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Content Writing Services | SEO Optimized Website & Blog Content",
  description: "Looking for expert content writers? We create SEO-friendly, well-researched content for websites, blogs, and digital marketing campaigns.",
  alternates: {
    canonical: `${SITE_URL}/services/content-writing`,
  },
};

const contentWritingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/content-writing`,
      "url": `${SITE_URL}/services/content-writing`,
      "name": "Content Writing Services | SEO Optimized Website & Blog Content",
      "description": "Looking for expert content writers We create SEO friendly, well researched content for websites, blogs, and digital marketing campaigns",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Service",
        "name": "Content Writing Services"
      }
    },
    {
      "@type": "Service",
      "name": "Content Writing Services",
      "serviceType": "SEO Content Writing and Copywriting",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Looking for expert content writers We create SEO friendly, well researched content for websites, blogs, and digital marketing campaigns",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "129",
          "maxPrice": "849"
        }
      }
    },
    {
      "@type": "ProfessionalService",
      "name": "Pure Design Hub",
      "url": `${SITE_URL}/`,
      "image": `${SITE_URL}/_next/static/media/Png_2.03f48aca.png`,
      "priceRange": "$129 - $849",
      "description": "Looking for expert content writers We create SEO friendly, well researched content for websites, blogs, and digital marketing campaigns",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
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
          "name": "Content Writing",
          "item": `${SITE_URL}/services/content-writing`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contentWritingSchema) }}
      />
      {children}
    </>
  );
}

