import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Online",
  description: "Boost your brand with expert social media marketing services in the USA. PureDesignHub helps increase engagement, reach, and conversions.",
  alternates: {
    canonical: `${SITE_URL}/services/social-media-marketing`,
  },
};

const smmSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/social-media-marketing`,
      "url": `${SITE_URL}/services/social-media-marketing`,
      "name": "Social Media Marketing Services | Grow Your Brand Online",
      "description": "Boost your brand with expert social media marketing services in the USA. PureDesignHub helps increase engagement, reach, and conversions.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Service",
        "name": "Social Media Marketing Services"
      }
    },
    {
      "@type": "Service",
      "name": "Social Media Marketing Services",
      "serviceType": "Social Media Marketing and Management",
      "provider": {
        "@type": "ProfessionalService",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Boost your brand with expert social media marketing services in the USA. PureDesignHub helps increase engagement, reach, and conversions.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "minPrice": "349",
          "maxPrice": "1499"
        }
      }
    },
    {
      "@type": "ProfessionalService",
      "name": "Pure Design Hub",
      "url": `${SITE_URL}/`,
      "image": `${SITE_URL}/_next/static/media/Png_2.03f48aca.png`,
      "priceRange": "$349 - $1499",
      "description": "Boost your brand with expert social media marketing services in the USA. PureDesignHub helps increase engagement, reach, and conversions.",
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
          "name": "Social Media Marketing",
          "item": `${SITE_URL}/services/social-media-marketing`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smmSchema) }}
      />
      {children}
    </>
  );
}

