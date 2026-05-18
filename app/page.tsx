import React from 'react'
import Home from './home/page'
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO, Web & App Development Services for US Businesses",
  description: "Grow your business with expert SEO, web, app development, and Digital branding. Pure Design Hub helps US businesses boost traffic, leads, and conversions.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pure Design Hub",
  "url": "https://puredesignhub.com/",
  "logo": "https://puredesignhub.com/_next/static/media/Png_2.03f48aca.png",
  "description": "Pure Design Hub is a full-service digital agency offering SEO, web development, mobile app development, branding, logo design, content writing, and social media marketing services for businesses in the United States.",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "sameAs": [
    "https://www.facebook.com/people/Pure-Design-Hub/61577469429417/",
    "https://www.instagram.com/puredesignhubofficial/",
    "https://www.linkedin.com/"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pure Design Hub",
  "url": "https://puredesignhub.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://puredesignhub.com/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Marketing and Development Services",
  "serviceType": "Digital Agency Services",
  "provider": {
    "@type": "Organization",
    "name": "Pure Design Hub",
    "url": "https://puredesignhub.com/"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services Offered",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Logo Design Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Writing Services"
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://puredesignhub.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://puredesignhub.com/services/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SEO Services",
      "item": "https://puredesignhub.com/seo-services/"
    }
  ]
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Home />
    </>
  )
}

export default page

