"use client";
import Circle from "@/public/assets/images/circle.png";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import ContactUs from "@/app/component/contactUs";
import PricingSection from "@/app/component/web-development-pricing";
import { useState } from "react";
import TechStack from "@/app/component/tech-stack";
import IndustriesSection from "@/app/component/IndustriesSection";
/* ── Image paths (replace placeholders with real assets) ── */
const WEB_HERO_IMG = "/assets/images/web-dev-hero.png";   /* hero right side image  */
const WEB_WHY_IMG = "/assets/images/web-dev-why.png";    /* why web dev matters     */
const WEB_BG_VECTOR = "/assets/images/AI-02.png";          /* bg decorative vector   */

/* ── FAQs ── */
const faqs = [
  { q: "What do web development services include?", a: "Our services usually include website planning, design, coding, responsive development, speed optimization, functionality setup, and ongoing support." },
  { q: "Why is web development important for businesses in the USA?", a: "Web development is important because businesses in the USA need professional, fast, and user-friendly websites to compete online, build trust, and attract more leads." },
  { q: "Can web development help generate more leads?", a: "Yes, a professionally developed website can improve user experience, build credibility, and guide visitors toward taking action, which helps generate more leads." },
  { q: "How much do web development services cost?", a: "The cost depends on the size, complexity, and features of the website. Custom websites usually vary based on business requirements and business goals." },
  { q: "How long does it take to build a website?", a: "The timeline depends on the project scope, but most business websites can take a few weeks to a few months depending on the number of pages and required functionality." },
];

/* ── Inline SVG Icons — Services ── */
const IcCustom = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
const IcBusiness = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>;
const IcResponsive = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>;
const IcLanding = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
const IcRedesign = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;
const IcSpeed = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
const IcUX = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>;
const IcMaintain = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>;

/* ── SVG Icons — Why Choose Us ── */
const IcCustomize = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>;
const IcDesign = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
const IcMobile = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" /><path d="M9 6h6" /></svg>;
const IcUserFocus = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
const IcTech = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>;
const IcGrowth = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>;

/* ── Industry icons ── */
const IcHome = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" /><path d="M9 21V12h6v9" /></svg>;
const IcRocket = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
const IcBriefcase = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>;
const IcShield = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const IcUsers = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>;
const IcUser = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const IcTrending = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>;
const IcRefresh = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" /></svg>;

const industries = [
  { label: "Local Businesses", Icon: IcHome },
  { label: "Startups", Icon: IcRocket },
  { label: "Agencies", Icon: IcBriefcase },
  { label: "Service Providers", Icon: IcShield },
  { label: "Consultants", Icon: IcUsers },
  { label: "Personal Brands", Icon: IcUser },
  { label: "Growing Companies", Icon: IcTrending },
  { label: "Website Upgrade Seekers", Icon: IcRefresh },
];

/* ── SVG Underline ── */
const SvgUnderline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
    <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
      fill="none" stroke="#f75126" strokeWidth="6" strokeLinecap="round" className="animated-path" />
  </svg>
);

/* ── Animated Counter ── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.unobserve(el); let start = 0; const duration = 1800;
        const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / duration, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── FAQ Item ── */
const FaqItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden reveal-up" style={{ animationDelay: `${index * 80}ms` }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-semibold text-[#1a1a2e] pr-4 text-base">{faq.q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[#F75126] rotate-180" : "bg-gray-100"}`}>
          <svg className={`w-4 h-4 ${open ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 leading-relaxed text-sm border-t border-gray-100 pt-4 animate-faq-open">{faq.a}</div>}
    </div>
  );
};

/* ── Scroll Reveal ── */
function ScrollRevealInit() {
  useEffect(() => {
    const classes = ["reveal-up", "reveal-left", "reveal-right", "reveal-fade", "reveal-scale"];
    const allEls: Element[] = [];
    classes.forEach(cls => allEls.push(...Array.from(document.querySelectorAll(`.${cls}`))));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    allEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

/* ════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════ */
export default function WebDevelopmentServices() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service: "WebDevelopment",
      message: String(formData.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      setErrorMsg("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://puredesignhub.com/api/get-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || `Server error: ${res.status}`);
      }

      setSuccessMsg(data?.message || "Thank you! Your request has been submitted successfully.");
      formEl.reset();
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const webServices = [
    { title: "Custom Website Development", desc: "Every business needs a website that reflects its unique brand, goals, and audience. Our custom website development service is built around your business needs rather than forcing your brand into a generic template. This gives you more flexibility, stronger functionality, and a better long-term solution.", Icon: IcCustom },
    { title: "Business Website Design & Dev", desc: "We build professional websites for service providers, agencies, startups, and growing businesses that need a clean and trustworthy online presence. Our service focuses on modern layouts, clear structure, user-friendly navigation, and strong call-to-action placement.", Icon: IcBusiness },
    { title: "Responsive Web Development", desc: "People visit websites from desktops, mobile phones, and tablets. If your website does not work properly across all screen sizes, you risk losing visitors and leads. We develop websites with responsive structure so your users get a consistent experience no matter how they access your site.", Icon: IcResponsive },
    { title: "Landing Page Development", desc: "Landing pages are important for marketing campaigns, service promotions, and lead generation. A strong landing page needs clear messaging, focused design, and a direct path to conversion. We develop landing pages built for performance — increasing inquiries and supporting paid campaigns.", Icon: IcLanding },
    { title: "Website Redesign Services", desc: "An outdated website can affect how people see your business. If your current site no longer reflects your brand, feels difficult to use, or is not helping you get results, our redesign services help modernize your presence, improve usability, and create a more effective digital platform.", Icon: IcRedesign },
    { title: "Speed & Performance Optimization", desc: "Website speed plays a major role in user experience. Visitors expect websites to load quickly, and slow performance can increase bounce rates and reduce conversions. We focus on performance optimization by improving website structure and supporting faster page delivery.", Icon: IcSpeed },
    { title: "UI and UX Focused Development", desc: "A website should not only look good — it should also be easy to use. Good UI and UX help visitors move through your website naturally, understand your services clearly, and take action with confidence. Our process considers layout clarity, content flow, and usability throughout.", Icon: IcUX },
    { title: "Website Maintenance & Support", desc: "A website needs regular updates and support to remain secure, functional, and relevant. After launch, businesses often need improvements, fixes, content updates, and technical maintenance. Our maintenance services help ensure your site continues to perform well over time.", Icon: IcMaintain },
  ];

  const processSteps = [
    { number: "01", title: "Discovery & Project Understanding", desc: "We begin by understanding your business, your goals, your target audience, and what kind of website you actually need. This helps us identify the right direction before development begins and ensures the final website is aligned with your objectives." },
    { number: "02", title: "Planning & Structure Mapping", desc: "Once we understand the project, we plan the website structure, page layout, content flow, and user journey. This stage is important because every page needs a clear role and every section should support the overall business purpose." },
    { number: "03", title: "Design & Development", desc: "After planning, we move into web design and development. This includes building the website layout, implementing responsive structure, setting up key functionality, and making sure the site reflects your brand in a professional way." },
    { number: "04", title: "Testing & Launch", desc: "Before launch, we carefully review the website across devices and screen sizes. We check layout behavior, usability, structure, and overall functionality to make sure everything works smoothly and delivers a polished final product." },
    { number: "05", title: "Growth & Refinement", desc: "A website is not just a one-time project. As your business grows, your website may need updates, improvements, and new features. Our approach supports long-term refinement so your digital presence can continue to perform well." },
  ];

  const whyChooseUs = [
    { title: "Custom Web Solutions", text: "Every plan is tailored to your niche, your audience, and your specific business goals in the USA.", Icon: IcCustomize },
    { title: "Clean & Modern Design", text: "We create visually strong, modern websites that build trust and reflect your brand with precision.", Icon: IcDesign },
    { title: "Responsive Development", desc: "All websites we build are fully responsive — looking and working perfectly across all devices and screen sizes.", Icon: IcMobile, text: "All websites we build are fully responsive — looking and working perfectly across all devices and screen sizes." },
    { title: "User-Friendly Experiences", text: "Intuitive navigation and clear structure keep visitors engaged and guide them toward action.", Icon: IcUserFocus },
    { title: "Strong Technical Structure", text: "Precision development to ensure your site is fast, secure, and built on a solid technical foundation.", Icon: IcTech },
    { title: "Long-Term Business Growth", text: "We focus on building websites that continue to support your growth and generate results for years to come.", Icon: IcGrowth },
  ];

  return (
    <main className="min-h-screen bg-white">
      <style jsx global>{`
        /* ── Reveal animations (Premium Minimal) ── */
        .reveal-up    { opacity:0; transform:translateY(30px);  transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); will-change: opacity, transform; }
        .reveal-up.in-view    { opacity:1; transform:translateY(0); }
        .reveal-left  { opacity:0; transform:translateX(-30px); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); will-change: opacity, transform; }
        .reveal-left.in-view  { opacity:1; transform:translateX(0); }
        .reveal-right { opacity:0; transform:translateX(30px);  transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); will-change: opacity, transform; }
        .reveal-right.in-view { opacity:1; transform:translateX(0); }
        .reveal-fade  { opacity:0; transition:opacity .8s ease; will-change: opacity; }
        .reveal-fade.in-view  { opacity:1; }
        .reveal-scale { opacity:0; transform:scale(.95); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); will-change: opacity, transform; }
        .reveal-scale.in-view { opacity:1; transform:scale(1); }

        /* ── Stagger ── */
        .stagger-child>*:nth-child(1){transition-delay:0ms}
        .stagger-child>*:nth-child(2){transition-delay:100ms}
        .stagger-child>*:nth-child(3){transition-delay:200ms}
        .stagger-child>*:nth-child(4){transition-delay:300ms}
        .stagger-child>*:nth-child(5){transition-delay:400ms}
        .stagger-child>*:nth-child(6){transition-delay:500ms}
        .stagger-child>*:nth-child(7){transition-delay:600ms}
        .stagger-child>*:nth-child(8){transition-delay:700ms}

        /* ── Misc ── */
        @keyframes faqOpen{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
        .animate-faq-open{animation:faqOpen .4s cubic-bezier(.16,1,.3,1) forwards}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        .float-anim{animation:floatY 6s ease-in-out infinite}
        .float-anim-slow{animation:floatY 8s ease-in-out infinite}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .shimmer-badge{background:linear-gradient(90deg,rgba(247,81,38,.1) 0%,rgba(247,81,38,.3) 40%,rgba(247,81,38,.1) 100%);background-size:200% auto;animation:shimmer 4s linear infinite}
        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(247,81,38,.3)}70%{box-shadow:0 0 0 12px rgba(247,81,38,0)}100%{box-shadow:0 0 0 0 rgba(247,81,38,0)}}
        .pulse-btn{animation:pulseRing 2.5s ease infinite}
        .animated-path{stroke-dasharray:1500;stroke-dashoffset:1500;animation:drawPath 1.6s cubic-bezier(.16,1,.3,1) forwards .3s}
        @keyframes drawPath{to{stroke-dashoffset:0}}
        @keyframes heroSlideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .hero-line-1{animation:heroSlideUp .8s cubic-bezier(.16,1,.3,1) forwards .1s;opacity:0}
        .hero-line-2{animation:heroSlideUp .8s cubic-bezier(.16,1,.3,1) forwards .2s;opacity:0}
        .hero-line-3{animation:heroSlideUp .8s cubic-bezier(.16,1,.3,1) forwards .3s;opacity:0}
        .hero-line-4{animation:heroSlideUp .8s cubic-bezier(.16,1,.3,1) forwards .4s;opacity:0}
        .hero-form{animation:heroSlideUp .9s cubic-bezier(.16,1,.3,1) forwards .4s;opacity:0}

        /* ── Icon boxes ── */
        .svc-icon-box{width:52px;height:52px;border-radius:14px;background:rgba(247,81,38,.05);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:all .4s cubic-bezier(.16,1,.3,1)}
        .svc-icon-box svg{width:24px;height:24px;color:#F75126;transition:color .4s ease}
        .group:hover .svc-icon-box{background:#F75126;transform:scale(1.05) rotate(-2deg)}
        .group:hover .svc-icon-box svg{color:#fff}

        .why-icon-box{width:46px;height:46px;border-radius:12px;background:rgba(247,81,38,.05);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:all .4s cubic-bezier(.16,1,.3,1)}
        .why-icon-box svg{width:20px;height:20px;color:#F75126;transition:color .4s ease}
        .group:hover .why-icon-box{background:#F75126;transform:scale(1.05)}
        .group:hover .why-icon-box svg{color:#fff}

        .ind-icon-box{width:50px;height:50px;border-radius:50%;background:rgba(247,81,38,.05);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;transition:all .4s cubic-bezier(.16,1,.3,1)}
        .ind-icon-box svg{width:22px;height:22px;color:#F75126;transition:color .4s ease}
        .group:hover .ind-icon-box{background:#F75126;transform:scale(1.1) rotate(-4deg)}
        .group:hover .ind-icon-box svg{color:#fff}

        /* ── placeholder image ── */
        .img-placeholder{background:linear-gradient(135deg,#1a2040 0%,#2d3568 50%,#1e3060 100%);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(255,255,255,.3);font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
        .img-placeholder svg{opacity:.25;width:48px;height:48px}
        @keyframes scrollLeft {
}

/* Optional: Animation pauses on hover */
.group:hover .animate-scroll-left,
.group:hover .animate-scroll-right {
  animation-play-state: paused;
}
      `}</style>

      <ScrollRevealInit />
      <Header />

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="pt-24 bg-gradient-to-br from-[#1E2B3A] via-[#2D3E50] to-[#1E2B3A] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 lg:pt-24 lg:pb-40 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] md:w-[40%] h-[60%] bg-[#F75126] opacity-[0.08] blur-[120px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] md:w-[50%] h-[70%] bg-[#2470ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="space-y-6 md:space-y-8">
              <div className="hero-line-1 inline-block px-4 py-1.5 shimmer-badge border border-[#F75126]/20 rounded-full">
                <span className="text-[#F75126] text-xs sm:text-sm font-bold tracking-wider uppercase">Professional Web Solutions 2026</span>
              </div>
              <h1 className="hero-line-2 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Web Development <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Services in USA</span>
              </h1>
              <p className="hero-line-3 text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-xl leading-relaxed font-light">
                Build a powerful online presence with professional <span className="text-white font-semibold">web development services</span> designed for real business growth.
              </p>
              <div className="hero-line-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pt-2 md:pt-4">
                <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-base sm:text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all flex items-center gap-3 group will-change-transform">
                  Get Free Proposal
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <Link href="tel:+1234567890" className="flex items-center gap-3 font-bold text-lg sm:text-xl hover:text-[#F75126] transition-all group">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-full group-hover:bg-[#F75126]/20 group-hover:border-[#F75126]/30 transition-all">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F75126" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  Schedule a Call
                </Link>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="hero-form bg-white/95 backdrop-blur-md rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-14 text-[#2D3E50] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 relative mt-8 lg:mt-0">
              <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 bg-[#F75126] text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">FREE CONSULTATION</div>
              <h3 className="text-3xl md:text-4xl font-black mb-1 md:mb-2 mt-4 sm:mt-0">Book a Free</h3>
              <h3 className="text-3xl md:text-4xl font-black text-[#F75126] mb-8 md:mb-12">Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="relative group">
                    <input type="text" id="name" name="name" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-base sm:text-lg placeholder-transparent" placeholder="Full Name" required />
                    <label htmlFor="name" className="absolute left-0 -top-5 text-xs sm:text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:sm:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[#F75126]">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" name="email" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-base sm:text-lg placeholder-transparent" placeholder="Email" required />
                    <label htmlFor="email" className="absolute left-0 -top-5 text-xs sm:text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:sm:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[#F75126]">Email</label>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  <div className="relative group">
                    <input type="tel" id="number" name="phone" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-base sm:text-lg placeholder-transparent" placeholder="Number" required />
                    <label htmlFor="number" className="absolute left-0 -top-5 text-xs sm:text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:sm:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[#F75126]">Number</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="project" name="message" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-base sm:text-lg placeholder-transparent" placeholder="Project Need" required />
                    <label htmlFor="project" className="absolute left-0 -top-5 text-xs sm:text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:sm:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[#F75126]">Describe Your Project Need</label>
                  </div>
                </div>
                {successMsg && <p className="text-green-700 bg-green-100 border border-green-200 rounded-xl px-4 py-3 text-sm">{successMsg}</p>}
                {errorMsg && <p className="text-red-700 bg-red-100 border border-red-200 rounded-xl px-4 py-3 text-sm">{errorMsg}</p>}
                <button type="submit" disabled={loading} className="w-full bg-[#F75126] text-white font-bold py-4 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl hover:bg-[#E0441D] hover:shadow-[0_20px_40px_rgba(247,81,38,0.3)] transition-all mt-6 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed will-change-transform">{loading ? "Sending..." : "Schedule A Call"}</button>
                <p className="text-center text-xs text-gray-400 mt-8 font-medium">By submitting this form, you agree to our <Link href="/privacypolicy" className="text-[#F75126] hover:underline">Privacy Policy</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          INTRO — Grow Your Business
      ══════════════════════════════════ */}
      <section className="relative py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto overflow-hidden bg-white">
        {/* bg vector */}
        <div className="absolute -bottom-10 md:-bottom-20 -right-20 md:-right-40 z-0 opacity-20 pointer-events-none w-[100%] md:w-[80%] lg:w-[70%] aspect-square rotate-[-12deg]">
          <div className="relative w-full h-full scale-125 origin-bottom-right">
            <Image src={WEB_BG_VECTOR} alt="Design Element" fill className="object-contain object-right-bottom" priority />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6">
            <span className="w-8 sm:w-12 h-[2px] bg-[#F75126]" />
            <h3 className="text-[#F75126] font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-xs sm:text-sm">Professional Web Development</h3>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] uppercase relative z-20">
            Grow Your Business with
            <span className="text-[#F75126] block mt-1 md:mt-2">Professional Web Development Services</span>
          </h2>
          <div className="space-y-6 md:space-y-8 text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl relative z-20">
            <p className="max-w-3xl">Pure Design Hub provides professional <strong>web development services in USA</strong> for businesses that want a strong online presence, better user experience, and websites that turn visitors into real leads.</p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 py-4 md:py-6">
              <div className="border-l-4 border-[#F75126] pl-5 sm:pl-6 bg-white/60 backdrop-blur-sm p-4 rounded-r-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tight text-sm sm:text-base">Custom Solutions</h4>
                <p className="text-sm sm:text-base text-gray-600">Tailored to your brand, your audience, and your business objectives in the USA.</p>
              </div>
              <div className="border-l-4 border-[#F75126] pl-5 sm:pl-6 bg-white/60 backdrop-blur-sm p-4 rounded-r-2xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tight text-sm sm:text-base">Results Focused</h4>
                <p className="text-sm sm:text-base text-gray-600">Websites that support trust, engagement, and conversions — not just visual design.</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/get-quote" className="relative z-30 inline-block bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-[#F75126] transition-all duration-300 shadow-xl">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY WEB DEV MATTERS
      ══════════════════════════════════ */}
      <section className="bg-[#f9f9f9] py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal-left">
            <h2 className="title2 text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">Why Web Development Matters for <span className="text-[#F75126]">Businesses in the USA</span></h2>
            <p className="text text-gray-600 mb-4 md:mb-6 text-base sm:text-lg">The online market in the USA is highly competitive. Customers often judge a business within seconds of visiting its website. If your site feels outdated, loads slowly, or does not work well on mobile devices, people are less likely to trust your brand or contact you.</p>
            <p className="text text-gray-600 mb-4 md:mb-6 font-semibold text-base sm:text-lg">With an effective strategy in place, we can drive your business to new heights:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {["Improve online credibility", "Create a better user experience", "Increase engagement", "Generate more leads", "Support mobile users", "Strengthen long-term digital growth"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm sm:text-base text-gray-700 reveal-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="w-5 h-5 rounded-full bg-[#F75126]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#F75126]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <p className="text text-gray-600 mt-6 text-base sm:text-lg">At Pure Design Hub, our services are designed to help businesses compete effectively in the USA market while building a strong foundation for long-term growth.</p>
          </div>

          {/* Image / Placeholder */}
          <div className="reveal-right rounded-3xl md:rounded-[40px] overflow-hidden relative h-[250px] sm:h-[350px] md:h-[450px] shadow-[0_20px_50px_-10px_rgba(247,81,38,0.2)]">
            <Image
              src={WEB_WHY_IMG}
              alt="Why Web Development Matters"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center mb-10 md:mb-16 reveal-up">
          <h2 className="title2 text-3xl md:text-5xl font-black mb-3 md:mb-4 uppercase text-[#272D4E]">Our Web Development <span className="text-[#F75126] block sm:inline">Services Include</span></h2>
          <p className="text max-w-2xl mx-auto text-gray-500 text-base sm:text-lg">We provide specialized web development solutions aligned with your business needs rather than using generic templates.</p>
        </div>
        <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger-child">
          {webServices.map((s, i) => (
            <div key={i} className="reveal-up bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#F75126]/5 transition-all duration-500 border border-gray-100 group hover:-translate-y-1 hover:border-[#F75126]/20">
              <div className="svc-icon-box"><s.Icon /></div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#272D4E] group-hover:text-[#F75126] transition-colors duration-300">{s.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#0B0D17] text-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="reveal-up text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">Over <span className="text-[#F75126]">1.8 Billion Websites</span> Exist Today!</h2>
          <p className="reveal-up text-gray-400 mb-10 md:mb-12 text-sm sm:text-base md:text-lg">Is your website built to stand out, convert visitors, and grow your business?</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-child">
            {[
              { val: 98, suffix: "%", label: "Client Satisfaction" },
              { val: 500, suffix: "+", label: "Projects Delivered" },
              { val: 8, suffix: "+", label: "Years Experience" },
              { val: 100, suffix: "%", label: "Responsive Design" },
            ].map((stat, i) => (
              <div key={i} className="reveal-up">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F75126] mb-1 sm:mb-2"><AnimatedCounter target={stat.val} suffix={stat.suffix} /></div>
                <div className="text-gray-400 font-semibold uppercase text-[10px] sm:text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="reveal-up title2 text-3xl md:text-5xl font-black text-center mb-3 md:mb-4 uppercase">Why Choose <span className="text-[#F75126] block sm:inline">Pure Design Hub</span></h2>
          <p className="reveal-up text max-w-6xl mx-auto text-gray-500 text-center mb-10 text-base sm:text-lg">Pure Design Hub understands that businesses do not just need a website. They need a website that supports real business growth. That is why our web development services are built around strategy, usability, branding, and performance.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-child">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="reveal-up p-6 sm:p-8 bg-[#f9f9f9] rounded-3xl border border-transparent hover:border-[#F75126]/30 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F75126]/5 transition-all duration-500 group">
                <div className="why-icon-box"><item.Icon /></div>
                <h4 className="font-bold text-lg sm:text-xl text-[#272D4E] mb-2 sm:mb-3 group-hover:text-[#F75126] transition-colors duration-300">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 md:mt-12 text-gray-600 max-w-3xl mx-auto reveal-up text-sm sm:text-base">We combine planning, design, and development into one clear process. This helps businesses in the USA create a professional website that supports trust, engagement, and stronger digital visibility.</p>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROCESS
      ══════════════════════════════════ */}
      <section className="relative py-16 md:py-20 bg-[#F9F9F9] px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-0 xl:-left-33 -left-4 -z-1 circle_img pointer-events-none" />
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim-slow xl:w-66 xl:h-66 w-24 h-24 object-cover absolute bottom-0 xl:-right-10 -right-6 -z-1 circle_img pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="reveal-up title2 text-3xl md:text-5xl font-black text-center mb-3 md:mb-6">
            Our Web Development{" "}<span className="relative inline-block mt-2 sm:mt-0">Process<SvgUnderline /></span>
          </h2>
          <p className="reveal-up text text-center mb-10 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg">Our proven 5-step web development framework delivers modern, high-performing websites. Every project follows a structured process refined through years of experience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 stagger-child">
            {processSteps.map((s, i) => (
              <div key={i} className="reveal-up relative rounded-2xl p-5 sm:p-6 border-2 transition-all duration-500 group hover:-translate-y-1 border-gray-100 bg-white shadow-sm hover:border-[#F75126]/50 hover:bg-[#F75126]/5 hover:shadow-lg">
                <div className="text-5xl md:text-6xl font-black text-[#F75126]/10 absolute top-3 right-4 leading-none select-none transition-all duration-500 group-hover:text-[#F75126]/15 group-hover:scale-105">{s.number}</div>
                <div className="text-[#F75126] font-bold text-[10px] sm:text-xs mb-1 sm:mb-2 tracking-widest uppercase">Step {s.number}</div>
                <h3 className="font-bold text-lg sm:text-xl text-[#272D4E] mb-2 group-hover:text-[#F75126] transition-colors duration-300">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TechStack type="web" />
      {/* ══════════════════════════════════
          WHO BENEFITS
      ══════════════════════════════════ */}
      {/* <section className="services_sec px-4 sm:px-8 md:px-12 lg:px-20 mb-10 lg:mb-20 xl:mb-40 py-16 md:py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="reveal-up title2 text-3xl md:text-5xl font-black text-center mb-3 md:mb-6">
            Who Can Benefit from Our{" "}<span className="relative inline-block mt-2 sm:mt-0">Web Development Services<SvgUnderline /></span>
          </h2>
          <p className="reveal-up text text-center mb-10 md:mb-16 max-w-4xl mx-auto text-base sm:text-lg">Whether your business is new or already established, the right website can help you create stronger trust, better visibility, and improved lead generation.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 stagger-child">
            {industries.map((ind, i) => (
              <div key={i} className="reveal-up bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-2 hover:border-[#F75126]/30 transition-all duration-300 group cursor-default">
                <div className="ind-icon-box"><ind.Icon /></div>
                <div className="text-xs sm:text-sm font-bold text-[#1a1a2e] group-hover:text-[#F75126] transition-colors">{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <IndustriesSection />
      {/* ══════════════════════════════════
          REAL BUSINESS GROWTH CTA
      ══════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#272D4E] text-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">Web Development Focused on <span className="text-[#F75126] block sm:inline mt-2 sm:mt-0">Real Business Growth</span></h2>
          <p className="reveal-up text-gray-300 max-w-4xl mx-auto mb-10 md:mb-12 text-base sm:text-lg leading-relaxed">
            The goal of development should never be just to create a website. It should be to build a digital asset that supports real business outcomes.
            <br className="hidden sm:block" />When your website is built correctly, it becomes easier for visitors to find information, move through your pages, and take the next step.
          </p>
          <div className="reveal-scale bg-white/5 p-6 sm:p-10 md:p-12 rounded-3xl md:rounded-[50px] border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white uppercase tracking-wider">Let Pure Design Hub Build Your Website</h4>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">If you are looking for professional <strong className="text-white">website development services in USA</strong>, we are ready to help you build a website that supports growth, trust, and performance.</p>
            <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-white hover:text-[#F75126] transition-all inline-block shadow-2xl will-change-transform">Contact Us Today</Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute -top-20 -left-20 sm:top-10 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#F75126] rounded-full blur-[80px] sm:blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 sm:bottom-10 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#F75126] rounded-full blur-[100px] sm:blur-[120px]" />
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQs
      ══════════════════════════════════ */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 mb-16 lg:mb-20 xl:mb-40 mt-16 lg:mt-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="reveal-up title2 text-3xl md:text-5xl font-black text-center mb-3 md:mb-6">
            Web Development Services{" "}<span className="relative inline-block mt-2 sm:mt-0">FAQs<SvgUnderline /></span>
          </h2>
          <p className="reveal-up text text-center mb-8 md:mb-16 text-base sm:text-lg">Everything you need to know about our web development services.</p>
          <div className="w-full space-y-3 md:space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
