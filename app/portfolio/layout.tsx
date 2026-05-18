import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Our Portfolio | Successful Digital Projects by PureDesignHub",
  description: "Explore our work! See how PureDesignHub has helped businesses succeed with custom websites, mobile apps, and result-oriented marketing campaigns.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/portfolio`,
      "url": `${SITE_URL}/portfolio`,
      "name": "Our Portfolio | Successful Digital Projects by PureDesignHub",
      "description": "Explore our work! See how PureDesignHub has helped businesses succeed with custom websites, mobile apps, and result oriented marketing campaigns",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Organization",
        "name": "Pure Design Hub"
      }
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
      "@type": "ItemList",
      "name": "Portfolio Projects",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Web Development Projects"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SEO Projects"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mobile App Development Projects"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Branding and Logo Design Projects"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Content Writing Projects"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Social Media Marketing Campaigns"
        }
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
          "name": "Portfolio",
          "item": `${SITE_URL}/portfolio`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      {children}
    </>
  );
}

