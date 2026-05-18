import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Affordable SEO Services in USA | PureDesignHub",
  description: "Looking for affordable SEO services in the USA? PureDesignHub helps businesses improve rankings, drive traffic, and generate leads with cost-effective SEO strategies.",
  alternates: {
    canonical: `${SITE_URL}/services/seo-services`,
  },
};

const seoSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/seo-services`,
      "url": `${SITE_URL}/services/seo-services`,
      "name": "Affordable SEO Services in USA | PureDesignHub",
      "description": "Looking for affordable SEO services in the USA PureDesignHub helps businesses improve rankings, drive traffic, and generate leads with cost effective SEO strategies",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Service",
        "name": "SEO Services"
      }
    },
    {
      "@type": "Service",
      "name": "SEO Services",
      "serviceType": "Search Engine Optimization Services",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Looking for affordable SEO services in the USA PureDesignHub helps businesses improve rankings, drive traffic, and generate leads with cost effective SEO strategies",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "249",
          "maxPrice": "799"
        }
      }
    },
    {
      "@type": "ProfessionalService",
      "name": "Affordable SEO Services in USA | PureDesignHub",
      "image": `${SITE_URL}/_next/static/media/Png_2.03f48aca.png`,
      "url": `${SITE_URL}/`,
      "priceRange": "$249 - $799",
      "description": "Looking for affordable SEO services in the USA PureDesignHub helps businesses improve rankings, drive traffic, and generate leads with cost effective SEO strategies",
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
          "name": "SEO Services",
          "item": `${SITE_URL}/services/seo-services`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoSchema) }}
      />
      {children}
    </>
  );
}

