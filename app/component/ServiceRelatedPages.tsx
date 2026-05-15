"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SERVICE_ROUTES: { href: string; label: string }[] = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/app-development", label: "App Development" },
  { href: "/services/branding-design", label: "Branding Design" },
  { href: "/services/content-writing", label: "Content Writing" },
  { href: "/services/seo-services", label: "SEO Services" },
  { href: "/services/social-media-marketing", label: "Social Media Marketing" },
];

const QUICK_LINKS: { href: string; label: string; desc: string }[] = [
  {
    href: "/pricing",
    label: "Pricing & plans",
    desc: "Browse flexible packages—pick the tab that matches your service.",
  },
  {
    href: "/get-quote",
    label: "Get a quote",
    desc: "Share your brief and we will follow up within 24 hours.",
  },
  {
    href: "/contact-us",
    label: "Contact us",
    desc: "Questions, timelines, or custom scope—we are here to help.",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    desc: "Explore live projects across web, app, brand, and marketing.",
  },
  {
    href: "/faqs",
    label: "FAQs",
    desc: "How we work, revisions, delivery, and more.",
  },
  {
    href: "/about-us",
    label: "About us",
    desc: "Our team, values, and how we partner with clients.",
  },
];

const chevron = (
  <svg
    className="h-4 w-4 shrink-0 text-[color:var(--muted)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[color:var(--brand-primary)]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function ServiceRelatedPages() {
  const pathname = usePathname() || "";
  const otherServices = SERVICE_ROUTES.filter((s) => s.href !== pathname);

  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-14 md:px-10 md:py-20 lg:px-[150px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 max-w-2xl md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--brand-primary)_22%,var(--border))] bg-[color:color-mix(in_srgb,var(--brand-primary)_8%,var(--surface))] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-primary)]"
              aria-hidden
            />
            Explore more
          </div>
          <h2 className="text-2xl font-black leading-tight text-[color:var(--brand-ink)] sm:text-3xl md:text-[2rem]">
            Related pages{" "}
            <span className="text-[color:var(--brand-primary)]">like pricing</span>
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base">
            Jump to plans, request a quote, or discover how we have helped similar
            businesses—without leaving your workflow.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm transition-[border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-[color:color-mix(in_srgb,var(--brand-primary)_25%,var(--border))] hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="text-base font-black text-[color:var(--brand-ink)] sm:text-lg">
                  {item.label}
                </span>
                {chevron}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                {item.desc}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-14">
          <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">
            Other services
          </h3>
          <ul className="flex flex-wrap gap-2.5 md:gap-3">
            {otherServices.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-bold text-[color:var(--brand-ink)] transition-[border-color,background-color,color] duration-200 hover:border-[color:color-mix(in_srgb,var(--brand-primary)_35%,var(--border))] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_6%,var(--surface))] hover:text-[color:var(--brand-primary)]"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
