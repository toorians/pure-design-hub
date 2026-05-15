export type PricingPlan = {
  title: string;
  tier: string;
  price: string;
  oldPrice: string;
  icon: string;
  popular: boolean;
  features: string[];
  description?: string;
};

/** Keys must match pricing tab labels / checkout `category` field. */
export const PRICING_PLANS: Record<string, PricingPlan[]> = {
  "Web Development": [
    {
      title: "Silver",
      tier: "Dev",
      price: "249",
      oldPrice: "399",
      icon: "🥈",
      popular: false,
      features: [
        "3 custom pages",
        "Mobile-optimized",
        "Appointment booking",
        "10 days delivery",
      ],
    },
    {
      title: "Gold",
      tier: "Dev",
      price: "499",
      oldPrice: "699",
      icon: "🥇",
      popular: true,
      features: [
        "5 custom pages",
        "SEO-ready blog",
        "Everything in Silver",
        "Unlimited revisions",
      ],
    },
    {
      title: "Platinum",
      tier: "Dev",
      price: "799",
      oldPrice: "1099",
      icon: "💎",
      popular: false,
      features: [
        "7+ custom pages",
        "Admin panel",
        "Advanced SEO",
        "1 month support",
      ],
    },
    {
      title: "Diamond",
      tier: "E-Com",
      price: "1499",
      oldPrice: "1999",
      icon: "🚀",
      popular: false,
      features: [
        "Unlimited pages",
        "Shopping cart",
        "Payment gateway",
        "Admin panel",
      ],
    },
  ],
  "App Development": [
    {
      title: "Basic",
      tier: "App",
      price: "2,560",
      oldPrice: "4,160",
      icon: "📱",
      popular: false,
      features: [
        "Up to 7 Features",
        "Wireframing",
        "UI/UX Design",
        "App Store Publishing",
        "Native iOS or Android",
      ],
    },
    {
      title: "Standard",
      tier: "App",
      price: "4,160",
      oldPrice: "6,450",
      icon: "⚙️",
      popular: true,
      features: [
        "Up to 10 Features",
        "Firebase Integration",
        "In-App Purchase",
        "Push Notifications",
        "Live Chat API",
      ],
    },
    {
      title: "Professional",
      tier: "App",
      price: "10,000",
      oldPrice: "18,000",
      icon: "🏢",
      popular: false,
      features: [
        "Up to 25 Features",
        "Admin Panel",
        "Payment Gateways",
        "Audio/Video Streaming",
        "3 Month Support",
      ],
    },
  ],
  "Branding": [
    {
      title: "Startup",
      tier: "Brand",
      price: "99",
      oldPrice: "117",
      icon: "🎨",
      popular: false,
      features: [
        "Business Card",
        "Letterhead",
        "Email Signature",
        "Social Banners",
        "Logo Watermark",
      ],
    },
    {
      title: "Classic",
      tier: "Brand",
      price: "139",
      oldPrice: "247",
      icon: "🌟",
      popular: false,
      features: [
        "Everything in Startup",
        "Favicon Design",
        "T-Shirt Design",
        "Cap/Hat Design",
        "Invoice Design",
      ],
    },
    {
      title: "Premium",
      tier: "Brand",
      price: "249",
      oldPrice: "498",
      icon: "🏆",
      popular: true,
      features: [
        "Everything in Classic",
        "Bag Design",
        "Signage Design",
        "Flyer Design",
        "Premium Concepts",
      ],
    },
    {
      title: "Unlimited",
      tier: "Brand",
      price: "299",
      oldPrice: "598",
      icon: "♾️",
      popular: false,
      features: [
        "Car Wrap Design",
        "PPT Design",
        "Menu Design",
        "Mug Design",
        "Unlimited Assets",
      ],
    },
  ],
  "Social Media": [
    {
      title: "Small Business",
      tier: "SMM",
      price: "349",
      oldPrice: "0",
      icon: "📱",
      popular: false,
      features: [
        "12 Posts Per Month",
        "FB & Instagram",
        "Cosmetics Setup",
        "Monthly Report",
      ],
    },
    {
      title: "Medium Business",
      tier: "SMM",
      price: "699",
      oldPrice: "0",
      icon: "📈",
      popular: true,
      features: [
        "24 Posts Per Month",
        "Ads Management",
        "Community Mgmt",
        "Reputation Mgmt",
      ],
    },
    {
      title: "Large Business",
      tier: "SMM",
      price: "1499",
      oldPrice: "0",
      icon: "🚀",
      popular: false,
      features: [
        "36 Posts Per Month",
        "All Platforms",
        "Chatbot Integration",
        "SEO Blog Posts",
      ],
    },
  ],
  "SEO": [
    {
      title: "Silver",
      tier: "SEO",
      price: "249",
      oldPrice: "0",
      icon: "🔍",
      popular: false,
      features: [
        "10 Keywords",
        "On-page SEO",
        "GBP Optimization",
        "Monthly Report",
      ],
    },
    {
      title: "Gold",
      tier: "SEO",
      price: "499",
      oldPrice: "0",
      icon: "🥇",
      popular: true,
      features: [
        "25+ Keywords",
        "Blog Strategy",
        "Competitor Analysis",
        "Bi-weekly Calls",
      ],
    },
    {
      title: "Platinum",
      tier: "SEO",
      price: "799",
      oldPrice: "0",
      icon: "💎",
      popular: false,
      features: [
        "50+ Keywords",
        "Schema Markup",
        "Link Building",
        "Technical Audit",
      ],
    },
  ],
  "Content Writing": [
    {
      title: "Starter",
      tier: "Writing",
      price: "499",
      oldPrice: "1,119",
      icon: "✍️",
      popular: false,
      features: [
        "5 Pages Copy",
        "300 Words/Page",
        "SEO Friendly",
        "100% Original Content",
      ],
    },
    {
      title: "Professional",
      tier: "Writing",
      price: "849",
      oldPrice: "2,119",
      icon: "📝",
      popular: true,
      features: [
        "10 Pages Copy",
        "Unlimited Revisions",
        "Meta Details",
        "Approval Assurance",
      ],
    },
    {
      title: "Article/Blog",
      tier: "Writing",
      price: "129",
      oldPrice: "319",
      icon: "📄",
      popular: false,
      features: [
        "1 Fresh Article",
        "400 Words",
        "Keyword Optimized",
        "30 Days Warranty",
      ],
    },
  ],
};

export const PRICING_CATEGORIES = Object.keys(PRICING_PLANS);

/** Service detail routes → pricing tab label */
export const SERVICE_PATH_TO_PRICING_TAB: Record<string, string> = {
  "/services/web-development": "Web Development",
  "/services/app-development": "App Development",
  "/services/branding-design": "Branding",
  "/services/content-writing": "Content Writing",
  "/services/social-media-marketing": "Social Media",
  "/services/seo-services": "SEO",
};
