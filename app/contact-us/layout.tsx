import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/siteUrl";

export const metadata: Metadata = {
  title: "Contact PureDesignHub | Get a Free Digital Strategy Consultation",
  description: "Ready to grow your business? Contact PureDesignHub today for expert web development, SEO, and branding services. Let's build something great together.",
  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact-us`,
      "url": `${SITE_URL}/contact-us`,
      "name": "Contact Us - Pure Design Hub",
      "description": "Get in touch with Pure Design Hub for SEO, web development, mobile app development, branding, logo design, content writing, and social media marketing services for businesses in the United States.",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Pure Design Hub",
        "url": `${SITE_URL}/`
      }
    },
    {
      "@type": "Organization",
      "name": "Pure Design Hub",
      "url": `${SITE_URL}/`,
      "logo": `${SITE_URL}/_next/static/media/Png_2.03f48aca.png`,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "areaServed": "US"
        }
      ],
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
      "@type": "WebSite",
      "name": "Pure Design Hub",
      "url": `${SITE_URL}/`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${SITE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
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
          "name": "Contact Us",
          "item": `${SITE_URL}/contact-us`
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}

