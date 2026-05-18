import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Website Development Services | Custom Web Solutions – PureDesignHub",
  description: "Get professional website development services in the USA. PureDesignHub builds fast, responsive, and SEO-friendly websites designed to grow your business online.",
  alternates: {
    canonical: `${SITE_URL}/services/web-development`,
  },
};

const webDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/services/web-development`,
      "url": `${SITE_URL}/services/web-development`,
      "name": "Web Development Services - Pure Design Hub",
      "description": "Professional web development services by Pure Design Hub, building fast, responsive, and SEO-friendly websites for businesses in the United States.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "about": {
        "@type": "Service",
        "name": "Web Development Services"
      }
    },
    {
      "@type": "Service",
      "name": "Web Development Services",
      "serviceType": "Website Design and Development",
      "provider": {
        "@type": "Organization",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": "Custom web development services including business websites, landing pages, eCommerce websites, and scalable web applications built with modern technologies."
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
          "name": "Web Development",
          "item": `${SITE_URL}/services/web-development`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDevSchema) }}
      />
      {children}
    </>
  );
}

