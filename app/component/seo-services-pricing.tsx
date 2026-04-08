"use client";

import Image from "next/image";
import CheckIcon from "@/public/assets/images/check.png"; // Replace with actual icon
import { useGeo } from "../context/GeoContext";
import { useRouter } from "next/navigation";

export default function SEOPricingSection() {
  const { currencySymbol } = useGeo();
  const router = useRouter();

  const handleOrder = (plan: any) => {
    sessionStorage.setItem(
      "checkoutData",
      JSON.stringify({
        title: plan.title,
        price: plan.price,
        description: plan.description,
        currency: currencySymbol,
      })
    );
    router.push("/checkout");
  };
  const plans = [
    {
      title: "Silver SEO",
      price: "249",
      oldPrice: "0", // No old price for this package
      description: "For local businesses just getting started online.",
      features: [
        "Keyword research for up to 10 keywords",
        "On-page optimization (meta tags, headings, URLs)",
        "Google Business Profile setup/optimization",
        "Basic content recommendations",
        "Monthly performance report",
        "Delivered in 2 weeks",
      ],
      popular: false,
    },
    {
      title: "Gold SEO",
      price: "499",
      oldPrice: "0", // No old price for this package
      description: "For growing businesses that need steady traffic & leads.",
      features: [
        "Everything in Silver plus:",
        "Keyword targeting for 25+ keywords",
        "Blog/content strategy (2 posts/month guidance or upload)",
        "Local citations & directory submissions",
        "Google Analytics & Search Console setup",
        "Competitor analysis with actionable insights",
        "Bi-weekly progress calls with project manager",
        "Delivered in 2 weeks, updated monthly",
      ],
      popular: false,
    },
    {
      title: "Platinum SEO",
      price: "799",
      oldPrice: "0", // No old price for this package
      description: "For established businesses targeting multiple regions or services.",
      features: [
        "Everything in Gold plus:",
        "Keyword targeting for 50+ keywords",
        "Advanced on-page SEO (schema markup, internal linking)",
        "Link-building outreach (quality backlinks)",
        "Landing page creation for service areas",
        "Full technical audit + speed optimization",
        "Dedicated SEO strategist + weekly update meetings",
      ],
      popular: false,
    },
    {
      title: "Diamond SEO",
      price: "Custom Pricing",
      oldPrice: "0", // No old price for this package
      description: "For businesses with national or global reach.",
      features: [
        "Everything in Platinum plus:",
        "Multi-language or multi-location SEO",
        "Advanced content marketing campaigns",
        "PR + authority link-building",
        "Conversion rate optimization support",
        "Bespoke dashboards + priority support",
        "Tailored strategy & dedicated team",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section w-full py-20 flex flex-col items-center">
      <h2 className="title2 text-center mb-16">
        Our SEO Packages to Fit <span>Your Needs</span>
      </h2>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 w-full max-w-[1400px]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card relative bg-white rounded-[25px] shadow-md p-10 pt-16 text-center {
              plan.popular ? "popular-card" : ""
            }`}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h3 className="plan-title">{plan.title}</h3>

            <div className="price mb-4">
              <span className="old-price line-through text-black-400 mr-2">{currencySymbol}{plan.oldPrice && plan.oldPrice !== '0' ? plan.oldPrice : ''}</span>
              <span className="current-price text-2xl font-bold">{currencySymbol}{plan.price}</span>
              {plan.oldPrice && plan.oldPrice !== '0' && <span className="discount">/Month</span>}
            </div>

            <p className="body_content mb-6">{plan.description}</p>

            <ul className="features-list text-left mt-4 space-y-2 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-black-300 scrollbar-track-black-100 p-2">
              {plan.features.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text">
                  {/* If you want to display check icon */}
                  {/* <Image src={CheckIcon} alt="check" className="w-5 h-5" /> */}
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={() => handleOrder(plan)} className="pricing-btn mt-6">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
