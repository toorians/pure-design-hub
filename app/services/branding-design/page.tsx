"use client";
import Circle from "@/public/assets/images/circle.png";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import ContactUs from "@/app/component/contactUs";
import { useState } from "react";
import TechStack from "@/app/component/tech-stack";
import IndustriesSection from "@/app/component/IndustriesSection";
/* ── Image paths (replace placeholders with real assets) ── */
const WEB_HERO_IMG = "/assets/images/web-dev-hero.png";   /* hero right side image  */
const WEB_WHY_IMG = "/assets/images/web-dev-why.png";    /* why web dev matters     */
const WEB_BG_VECTOR = "/assets/images/AI-02.png";          /* bg decorative vector   */

/* ── FAQs ── */
const faqs = [
  { q: "What does a digital branding service include?", a: "It usually covers brand strategy, logo design, visual identity, website style, social media branding, and guidelines that keep your brand consistent across all platforms." },
  { q: "How is digital branding different from traditional branding?", a: "Digital branding focuses on how your brand looks and feels online. That includes websites, social media, ads, and digital content, while traditional branding also includes print, packaging, and offline materials. " },
  { q: "How long does it take to build a brand identity?", a: "It depends on the scope, but most projects take anywhere from 2 to 6 weeks. Larger brands or more detailed strategies can take longer." },
  { q: "Do I need a full brand identity or just a logo?", a: "A logo alone is a start, but a full brand identity gives you consistency. It helps with colors, fonts, tone of voice, and overall recognition across platforms." },
  { q: "Can you update or improve my existing brand instead of starting from scratch?", a: "Yes. Many businesses already have a brand but need a refresh. This can include redesigning visuals, improving messaging, or aligning everything with current market trends." },
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
  { label: "Startups ", Icon: IcHome },
  { label: "Small & Medium Businesses ", Icon: IcRocket },
  { label: "Enterprises", Icon: IcBriefcase },
  { label: "Agencies", Icon: IcShield },
  { label: "E-commerce Brands", Icon: IcUsers },
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
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-500 ${open ? "bg-[#F75126] rotate-180" : "bg-gray-100"}`}>
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
export default function BrandingDesignServices() {
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
      service: "BrandingDesign",
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
    {
      title: "Brand Strategy Development",
      desc: {
        text: "Our team works closely with you to develop a solid brand strategy by analyzing your market, audience, and competitors.",
        points: [
          "Defining your brand’s unique value proposition",
          "Establishing brand voice, tone, and messaging",
          "Crafting a brand story that resonates with your audience"
        ]
      },
      Icon: IcCustom
    },
    {
      title: "Logo and Visual Identity Design",
      desc: {
        text: "We design logos and visual elements that align perfectly with your brand values and identity.",
        points: [
          "Custom logos that reflect your business ethos",
          "Color palettes and typography systems",
          "Brand guidelines for consistency"
        ]
      },
      Icon: IcBusiness
    },
    {
      title: "Website and UX/UI Design",
      desc: {
        text: "We create websites that are visually engaging, user-friendly, and optimized for conversions.",
        points: [
          "Custom website design and development",
          "Mobile-responsive layouts",
          "Seamless UX and intuitive UI",
          "Content strategy and SEO optimization"
        ]
      },
      Icon: IcResponsive
    },
    {
      title: "Social Media Branding",
      desc: {
        text: "We help you build a consistent and engaging brand presence across all major platforms.",
        points: [
          "Profile and page optimization",
          "Custom banners and creatives",
          "Content creation aligned with brand identity",
          "Engagement-focused campaigns"
        ]
      },
      Icon: IcLanding
    },
    {
      title: "Brand Voice and Messaging",
      desc: {
        text: "We define a clear and authentic voice that connects with your audience effectively.",
        points: [
          "Crafting compelling taglines",
          "Developing brand-focused content",
          "Tone and communication strategies"
        ]
      },
      Icon: IcRedesign
    }
  ];
  const processSteps = [
    { number: "01", title: "Discovery & Strategy", desc: "We begin by understanding your business vision, target audience, and market position in the USA. Our team conducts brand audits and researches industry trends to uncover unique positioning opportunities. This ensures a clear roadmap for your brand identity that resonates with your core values." },
    { number: "02", title: "Visual Concept & Design", desc: "Our designers create mood boards and initial concepts that align with your brand personality. We develop custom logos, color palettes, and typography that make your brand stand out. This phase ensures the visual direction is perfectly tuned to attract your ideal customers." },
    { number: "03", title: "Brand Identity Development", desc: "We build out the full visual system, including secondary logos, patterns, and iconography. Our team ensures all elements work harmoniously across different digital and physical applications. This comprehensive approach guarantees a professional and cohesive look for your business." },
    { number: "04", title: "Guidelines & Documentation", desc: "We create detailed brand guidelines to ensure consistent application of your new identity. This includes rules for logo usage, color codes, and messaging across all platforms. These standards empower your team to maintain brand integrity as your business grows." },
    { number: "05", title: "Digital Brand Integration", desc: "We help you roll out your new brand across your website, social media, and digital marketing assets. Our team ensures a smooth transition and consistent impact across all touchpoints. This maximizes the reach and recognition of your refreshed or new brand identity." },
    { number: "06", title: "Growth & Evolution", desc: "Branding is an ongoing journey. We provide continuous support for brand extensions, marketing creative, and identity refinements as your business evolves. Our goal is to ensure your brand remains relevant, competitive, and deeply connected to your audience." },

  ];

  const whyChooseUs = [
    { title: "Expertise and Experience", text: "With years of experience in branding and digital marketing, our team understands the intricacies of building a brand that speaks to your audience.", Icon: IcCustomize },
    { title: "Tailored Solutions", text: "We take a personalized approach to digital branding, ensuring that every strategy is aligned with your business goals.", Icon: IcDesign },
    { title: "Proven Track Record", text: "Our work has helped businesses across the USA enhance their digital presence, gain trust, and increase sales.", Icon: IcMobile },
    { title: "Comprehensive Approach", text: "From brand strategy to design and digital marketing, we offer end-to-end solutions that cover all aspects of your online identity. ", Icon: IcUserFocus },
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
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .tech-scroll-left { animation: scrollLeft linear infinite; }
        .tech-scroll-right { animation: scrollLeft linear infinite reverse; }
        .group:hover .tech-scroll-left,
        .group:hover .tech-scroll-right { animation-play-state: paused; }
      `}</style>

      <ScrollRevealInit />
      <Header />

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="pt-24 bg-gradient-to-br from-[#1E2B3A] via-[#2D3E50] to-[#1E2B3A] text-white py-12 px-4 sm:px-8 md:px-12 lg:px-20 lg:pt-32 lg:pb-48 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] md:w-[40%] h-[60%] bg-[#F75126] opacity-[0.08] blur-[120px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] md:w-[50%] h-[70%] bg-[#2470ff] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left */}
            <div className="space-y-6 md:space-y-8">
              <div className="hero-line-1 inline-block px-4 py-1.5 shimmer-badge border border-[#F75126]/20 rounded-full">
                <span className="text-[#F75126] text-xs sm:text-sm font-bold tracking-wider uppercase">Professional Branding 2026</span>
              </div>
              <h1 className="hero-line-2 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Elevate Your Brand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Identity</span>
              </h1>
              <p className="hero-line-3 text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-xl leading-relaxed font-light">
                At PureDesignHub, we specialize in creating impactful and memorable digital brand identities that resonate with your target audience. With our Digital Branding Services, we help businesses in the USA craft a compelling online presence that drives engagement, builds trust, and boosts conversions.
              </p>
              <div className="hero-line-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pt-2 md:pt-4">
                <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-base sm:text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all flex items-center gap-3 group">
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
            <div className="hero-form bg-white/95 backdrop-blur-md rounded-[40px] p-6 sm:p-8 md:p-14 text-[#2D3E50] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 relative">
              <div className="absolute -top-6 -left-6 bg-[#F75126] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">FREE CONSULTATION</div>
              <h3 className="text-4xl font-black mb-2">Book a Free</h3>
              <h3 className="text-3xl md:text-4xl font-black text-[#F75126] mb-8 md:mb-12">Branding Audit</h3>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="text" id="name" name="name" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Full Name" required />
                    <label htmlFor="name" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" name="email" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Email" required />
                    <label htmlFor="email" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Email</label>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="tel" id="number" name="phone" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Number" required />
                    <label htmlFor="number" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Number</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="project" name="message" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Project Need" required />
                    <label htmlFor="project" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Describe Your Project Need</label>
                  </div>
                </div>
                {successMsg && <p className="text-green-700 bg-green-100 border border-green-200 rounded-xl px-4 py-3 text-sm">{successMsg}</p>}
                {errorMsg && <p className="text-red-700 bg-red-100 border border-red-200 rounded-xl px-4 py-3 text-sm">{errorMsg}</p>}
                <button type="submit" disabled={loading} className="w-full bg-[#F75126] text-white font-bold py-6 rounded-2xl text-xl hover:bg-[#E0441D] hover:shadow-[0_20px_40px_rgba(247,81,38,0.3)] transition-all mt-6 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">{loading ? "Sending..." : "Schedule A Call"}</button>
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
        <div className="absolute -bottom-20 -right-40 z-0 opacity-20 pointer-events-none w-[80%] md:w-[80%] lg:w-[70%] aspect-square rotate-[-12deg]">
          <div className="relative w-full h-full scale-125 origin-bottom-right">
            <Image src={WEB_BG_VECTOR} alt="Design Element" fill className="object-contain object-right-bottom" priority />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6">
            <span className="w-8 sm:w-12 h-[2px] bg-[#F75126]" />
            <h3 className="text-[#F75126] font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-xs sm:text-sm">Professional Digital Branding</h3>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1] uppercase relative z-20">
            Why Digital Branding
            <span className="text-[#F75126] block mt-2">Matters</span>
          </h2>
          <div className="space-y-8 text-gray-800 leading-relaxed text-lg md:text-xl relative z-20">
            <p className="max-w-3xl">In today's digital world, branding is more than just a logo or color scheme. It’s how your business is perceived by your audience across various online platforms. Your digital brand identity shapes how customers see your values, vision, and personality.</p>
          </div>
          <div className="mt-12">
            <Link href="/get-quote" className="relative z-30 inline-block bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-[#F75126] transition-all duration-500 shadow-xl">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY DIGITAL BRANDING MATTERS
      ══════════════════════════════════ */}
      <section className="bg-[#f9f9f9] py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left Content */}
          <div className="reveal-left">
            <h2 className="title2 text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight uppercase">
              Why invest in <span className="text-[#F75126]">digital branding</span>?
            </h2>

            <div className="space-y-4 md:space-y-6 text-gray-600">
              {[
                { t: "Enhanced Visibility", d: "A strong digital brand helps you stand out in the competitive digital landscape." },
                { t: "Trust and Credibility", d: "Effective branding builds trust and positions your business as a reputable entity in your industry." },
                { t: "Consistency Across Channels", d: "A unified digital branding strategy ensures consistent messaging across all platforms." },
                { t: "Customer Loyalty", d: "When customers connect with your brand, they’re more likely to become loyal advocates." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 reveal-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="w-5 h-5 rounded-full bg-[#F75126]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-[#F75126]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p className="text-sm sm:text-base md:text-lg"><strong>{item.t}:</strong> {item.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="reveal-right rounded-3xl md:rounded-[40px] overflow-hidden relative h-[250px] sm:h-[350px] md:h-[450px] shadow-[0_20px_50px_-10px_rgba(247,81,38,0.2)]">
            <Image
              src={WEB_WHY_IMG}
              alt="Why Digital Branding Matters"
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
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto text-center mb-16 reveal-up">
          <h2 className="title2 mb-4 uppercase text-[#272D4E]">
            Our Digital Branding <span className="text-[#F75126]">Services</span>
          </h2>
          <p className="text max-w-2xl mx-auto text-gray-500">
            We offer a comprehensive range of branding services designed to give your business a strong and cohesive online presence:
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-4 sm:gap-6 stagger-child">
          {webServices.map((s, i) => (
            <div
              key={i}
              className="reveal-up bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-1 hover:border-[#F75126]/30/20"
            >
              <div className="svc-icon-box"><s.Icon /></div>

              <h3 className="font-bold text-xl mb-3 text-[#272D4E] group-hover:text-[#F75126] transition-colors">
                {s.title}
              </h3>

              {/* Paragraph */}
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                {s.desc.text}
              </p>

              {/* UL Points */}
              <ul className="space-y-2 text-sm text-gray-500">
                {s.desc.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-1 rounded-full bg-[#F75126]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-[#F75126]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#0B0D17] text-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="reveal-up text-3xl md:text-5xl font-bold mb-6">Digital Branding That Delivers <span className="text-[#F75126]">Results</span></h2>
          <p className="reveal-up text-gray-400 mb-12">We don’t just create designs — we build powerful brand identities that leave a lasting impression.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stagger-child">
            {[
              { val: 98, suffix: "%", label: "Client Satisfaction" },
              { val: 300, suffix: "+", label: "Brands Transformed" },
              { val: 8, suffix: "+", label: "Industry Experience" },
              { val: 100, suffix: "%", label: "Commitment to Quality" },
            ].map((stat, i) => (
              <div key={i} className="reveal-up">
                <div className="text-4xl md:text-5xl font-bold text-[#F75126] mb-2"><AnimatedCounter target={stat.val} suffix={stat.suffix} /></div>
                <div className="text-gray-400 font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section className="py-20 bg-white px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="reveal-up title2 text-center mb-4 uppercase">Why Choose  <span className="text-[#F75126]">Pure Design Hub</span> for Your Digital Branding Needs?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 stagger-child">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="reveal-up p-8 bg-[#f9f9f9] rounded-3xl border border-gray-100 hover:border-[#F75126]/30 hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-500 group">
                <div className="why-icon-box"><item.Icon /></div>
                <h4 className="font-bold text-xl text-[#272D4E] mb-3 group-hover:text-[#F75126] transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
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
            Our Strategic{" "}<span className="relative inline-block mt-2 sm:mt-0">Branding Process<SvgUnderline /></span>
          </h2>
          <p className="reveal-up text text-center mb-10 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg">We follow a structured, results-driven approach to ensure your brand identity is built for long-term success and market dominance.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 stagger-child">
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


      <TechStack type="branding" />
      {/* ══════════════════════════════════
          WHO BENEFITS
      ══════════════════════════════════ */}
      {/* <section className="services_sec px-4 sm:px-8 md:px-12 lg:px-20   py-20">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
            Who Can Benefit from Our {" "}<span className="relative inline-block">Digital Branding Services</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 stagger-child">
            {industries.map((ind, i) => (
              <div key={i} className="reveal-up bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[#F75126]/30/30 transition-all duration-500 group cursor-default">
                <div className="ind-icon-box"><ind.Icon /></div>
                <div className="text-sm font-bold text-[#1a1a2e] group-hover:text-[#F75126] transition-colors">{ind.label}</div>
              </div>
            ))}

          </div>

        </div>
      </section> */}

      <IndustriesSection />
      {/* ══════════════════════════════════
          REAL BUSINESS GROWTH CTA
      ══════════════════════════════════ */}
      <section className="py-20 bg-[#272D4E] text-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="reveal-up text-3xl md:text-5xl font-bold mb-6">Start Building Your <span className="text-[#F75126]">Digital Brand Today</span></h2>
          <p className="reveal-up text-gray-300 max-w-8xl mx-auto mb-12 text-lg">
            Ready to take your brand to the next level? At PureDesignHub, we believe in the power of digital branding to create lasting impressions and meaningful connections with your audience. Whether you're rebranding or launching a new business, our team is here to help.</p>
          <div className="reveal-scale bg-white/5 p-12 rounded-[50px] border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">Contact us today</h4>
            <p className="text-gray-400 mb-8 text-lg">to discuss how we can elevate your digital brand and drive your business forward.</p>
            <Link href="/get-quote" className="pulse-btn bg-[#F75126] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#F75126] transition-all inline-block shadow-2xl">Contact Us Today</Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#F75126] rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F75126] rounded-full blur-[120px]" />
        </div>
      </section>

      {/* ══════════════════════════════════
          PRICING
      ══════════════════════════════════ */}
      {/* ══════════════════════════════════
          FAQs
      ══════════════════════════════════ */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-20 mb-16 lg:mb-20 xl:mb-40 mt-16 lg:mt-20">
        <div className="max-w-[1400px] mx-auto">

          <h2 className="reveal-up title2 text-center lg:mb-6 mb-4">
            Digital Branding Services{" "}<span className="relative inline-block">FAQs<SvgUnderline /></span>
          </h2>
          <p className="reveal-up text text-center lg:mb-16 mb-8">Everything you need to know about our Digital Branding services.</p>
          <div className="w-full space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
          </div>

        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
