"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGeo } from "@/app/context/GeoContext";
import {
  PRICING_CATEGORIES,
  PRICING_PLANS,
  SERVICE_PATH_TO_PRICING_TAB,
  type PricingPlan,
} from "@/app/lib/pricingPlanData";

const sharedAccent = {
  accent: "var(--brand-primary)",
  accentLight: "color-mix(in srgb, var(--brand-primary) 8%, transparent)",
  accentGlow: "color-mix(in srgb, var(--brand-primary) 30%, transparent)",
};

export default function PricingPlansBlock() {
  const pathname = usePathname() ?? "";
  const tabFromPath = SERVICE_PATH_TO_PRICING_TAB[pathname];
  const [activeTab, setActiveTab] = useState(
    () => tabFromPath ?? "Web Development"
  );

  useEffect(() => {
    const t = SERVICE_PATH_TO_PRICING_TAB[pathname];
    if (t) setActiveTab(t);
  }, [pathname]);

  const { currencySymbol } = useGeo();
  const router = useRouter();

  const handleOrder = (plan: PricingPlan) => {
    sessionStorage.setItem(
      "checkoutData",
      JSON.stringify({
        category: activeTab,
        title: plan.title,
        price: plan.price,
        description: plan.description || plan.features[0],
        currency: currencySymbol,
      })
    );
    router.push("/checkout");
  };

  const plans = PRICING_PLANS[activeTab] ?? PRICING_PLANS["Web Development"];
  const onPricingPage = pathname === "/pricing";
  const showCategoryTabs = onPricingPage;

  return (
    <>
      <style jsx>{`
        .pricing-wrap {
          width: 100%;
          padding: 80px 16px;
          background: #fafafa;
          position: relative;
          overflow: hidden;
        }
        .pricing-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              color-mix(in srgb, var(--brand-primary) 3%, transparent) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              color-mix(in srgb, var(--brand-primary) 3%, transparent) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
          pointer-events: none;
        }

        .header-section {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
          z-index: 10;
        }

        .pricing-eyebrow {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--brand-primary);
          background: color-mix(in srgb, var(--brand-primary) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--brand-primary) 18%, transparent);
          padding: 6px 16px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
          position: relative;
          z-index: 10;
        }
        .tab-btn {
          padding: 12px 24px;
          border-radius: 50px;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          color: #6b7280;
          font-weight: 700;
          cursor: pointer;
          transition: 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          font-size: 14px;
        }
        .tab-btn.active {
          background: var(--brand-primary);
          color: #fff;
          border-color: var(--brand-primary);
          box-shadow: 0 10px 20px -5px color-mix(in srgb, var(--brand-primary) 40%, transparent);
          transform: translateY(-2px);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .p-card {
          position: relative;
          background: #fff;
          border-radius: 24px;
          border: 1.5px solid #e5e7eb;
          padding: 40px 28px;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease;
          overflow: hidden;
        }
        .p-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--card-accent-light);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: inherit;
          pointer-events: none;
        }
        .p-card:hover {
          transform: translateY(-12px);
          border-color: var(--card-accent);
          box-shadow: 0 30px 60px -10px var(--card-glow), 0 0 0 1.5px var(--card-accent);
        }
        .p-card:hover::before {
          opacity: 1;
        }

        .card-blob {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: var(--card-accent);
          opacity: 0.07;
          transition: 0.4s ease;
          pointer-events: none;
        }
        .p-card:hover .card-blob {
          opacity: 0.14;
          transform: scale(1.4);
        }

        .popular-tag {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--card-accent);
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 100px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          z-index: 2;
        }
        .card-icon {
          font-size: 36px;
          margin-bottom: 16px;
          display: block;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .p-card:hover .card-icon {
          transform: scale(1.2) rotate(-5deg);
        }

        .card-tier {
          font-size: 10px;
          font-weight: 700;
          color: var(--card-accent);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 4px;
        }
        .card-title {
          font-size: 26px;
          font-weight: 900;
          color: #1a1a2e;
          margin: 0 0 20px;
          line-height: 1.1;
        }

        .price-block {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          margin-bottom: 12px;
        }
        .price-currency {
          font-size: 18px;
          font-weight: 700;
          color: var(--card-accent);
          margin-bottom: 6px;
        }
        .price-amount {
          font-size: 42px;
          font-weight: 900;
          color: #1a1a2e;
          letter-spacing: -1px;
          line-height: 1;
        }
        .old-price {
          font-size: 15px;
          color: #9ca3af;
          text-decoration: line-through;
          margin-left: 8px;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .card-divider {
          height: 1.5px;
          background: linear-gradient(90deg, var(--card-accent) 0%, transparent 100%);
          margin: 20px 0;
          opacity: 0.2;
        }

        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 30px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #4b5563;
          line-height: 1.5;
        }
        .feature-dot {
          flex-shrink: 0;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--card-accent-light);
          border: 1.5px solid var(--card-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }
        .feature-dot::after {
          content: "";
          width: 5px;
          height: 5px;
          background: var(--card-accent);
          border-radius: 50%;
        }

        .card-btn {
          position: relative;
          width: 100%;
          padding: 15px;
          border-radius: 14px;
          font-weight: 700;
          cursor: pointer;
          border: 2px solid var(--card-accent);
          background: transparent;
          color: var(--card-accent);
          transition: 0.3s;
          z-index: 1;
          overflow: hidden;
        }
        .card-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--card-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: -1;
        }
        .card-btn:hover {
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px var(--card-glow);
        }
        .card-btn:hover::before {
          transform: scaleX(1);
        }
        .is-popular .card-btn {
          background: var(--card-accent);
          color: #fff;
        }

        .card-number {
          position: absolute;
          bottom: -10px;
          left: 16px;
          font-size: 90px;
          font-weight: 900;
          color: var(--card-accent);
          opacity: 0.04;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
      `}</style>

      <section className="pricing-wrap">
        <div className="header-section">
          <span className="pricing-eyebrow">Flexible Plans</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 900,
              color: "#1a1a2e",
            }}
          >
            Solutions for{" "}
            <span style={{ color: "var(--brand-primary)" }}>Every Stage</span>
          </h2>
          <p style={{ color: "#6b7280", marginTop: "10px", fontSize: "16px" }}>
            Pick a plan that aligns with your business goals.
          </p>
        </div>

        {showCategoryTabs && (
          <div className="tabs-container">
            {PRICING_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tab-btn ${activeTab === cat ? "active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="cards-grid">
          {plans.map((plan, index) => (
            <div
              key={`${activeTab}-${plan.title}-${index}`}
              className={`p-card ${plan.popular ? "is-popular" : ""}`}
              style={
                {
                  "--card-accent": sharedAccent.accent,
                  "--card-accent-light": sharedAccent.accentLight,
                  "--card-glow": sharedAccent.accentGlow,
                } as CSSProperties
              }
            >
              <div className="card-blob" />
              <span className="card-number">0{index + 1}</span>
              {plan.popular && <span className="popular-tag">Most Popular</span>}

              <span className="card-icon">{plan.icon}</span>
              <p className="card-tier">{plan.tier}</p>
              <h3 className="card-title">{plan.title}</h3>

              <div className="price-block">
                <span className="price-currency">{currencySymbol}</span>
                <span className="price-amount">{plan.price}</span>
                {plan.oldPrice !== "0" && (
                  <span className="old-price">
                    {currencySymbol}
                    {plan.oldPrice}
                  </span>
                )}
              </div>

              <div className="card-divider" />

              <ul className="features">
                {plan.features.map((feat, i) => (
                  <li key={i}>
                    <div className="feature-dot" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="card-btn"
                onClick={() => handleOrder(plan)}
              >
                Order Now →
              </button>
            </div>
          ))}
        </div>

        {!onPricingPage && (
          <div className="relative z-10 mx-auto mt-12 max-w-[1400px] text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-base font-bold text-[color:var(--brand-primary)] underline-offset-4 transition-colors hover:underline"
            >
              View full pricing page
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
