"use client";

import Image from "next/image";
import CheckIcon from "@/public/assets/images/check.png"; // Replace with actual icon
import { useGeo } from "../context/GeoContext";
import { useRouter } from "next/navigation";

export default function WebDevelopmentPricingSection() {
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
      title: "Silver",
      price: "249",
      oldPrice: "399",
      description: "For small businesses or clinics who need a simple online presence.",
      features: [
        "3 custom pages (Home, About, Contact)",
        "Mobile-optimized responsive design",
        "Google search submission & social media links",
        "Smooth appointment booking",
        "Dedicated project manager (human support!)",
        "Unlimited revisions during build",
        "Delivered in 10 business days",
      ],
      popular: false,
    },
    {
      title: "Gold",
      price: "499",
      oldPrice: "699",
      description:
        "Our most popular plan — ideal for growing businesses who need visibility and trust.",
      features: [
        "5 custom pages (Home, About, Services, Contact + Blog)",
        "SEO-ready blog to improve Google rankings",
        "Integrated appointment booking and lead forms",
        "Dedicated project manager",
        "Unlimited revisions during build",
        "Delivered in 10 business days",
      ],
      popular: false,
    },
    {
      title: "Platinum",
      price: "799",
      oldPrice: "1099",
      description: "For established businesses needing advanced features and flexibility.",
      features: [
        "7+ custom pages with premium layouts",
        "Admin panel for easy updates (WordPress or WooCommerce)",
        "Advanced SEO setup (title tags, schema)",
        "Custom branding support (logos, design tweaks)",
        "Priority development timeline",
        "Dedicated project manager + 1 month post-launch support",
      ],
      popular: false,
    },
    {
      title: "Diamond",
      price: "1499",
      oldPrice: "1999",
      description:
        "For businesses selling products or services online with full customization.",
      features: [
        "Unlimited pages + full e-commerce integration",
        "Product listing, product detail pages, shopping cart",
        "Payment gateway integration (Stripe, PayPal, etc.)",
        "W3C compliant, search-engine-friendly design",
        "Admin panel for managing products and orders",
        "Dedicated project manager + 1 month post-launch support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section w-full py-20 flex flex-col items-center">
      <h2 className="title2 text-center mb-16">
        Our Packages to Fit <span>Your Needs</span>
      </h2>

      <div className="grid xl:grid-cols-4 md:grid-cols- grid-cols-1 gap-10 w-full max-w-[1400px]">
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
              <span className="old-price line-through text-black-400 mr-2">{currencySymbol}{plan.oldPrice}</span>
              <span className="current-price text-2xl font-bold">{currencySymbol}{plan.price}</span>
            </div>

            <p className="body_content mb-6">{plan.description}</p>

            <ul className="features-list text-left mt-4 space-y-2 max-h-44 overflow-y-auto scrollbar-thin scrollbar-thumb-black-300 scrollbar-track-black-100 p-2">
              {plan.features.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text">
                  {/* Optionally, you can include a checkmark icon */}
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
