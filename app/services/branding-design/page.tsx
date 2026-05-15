"use client";
import Circle from "@/public/assets/images/circle.png";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import ContactUs from "@/app/component/contactUs";
import TechStack from "@/app/component/tech-stack";
import IndustriesSection from "@/app/component/IndustriesSection";
import Portfolio from "@/app/component/portfolioGallery";
import PricingPlansBlock from "@/app/component/PricingPlansBlock";

const WEB_WHY_IMG = "/assets/images/web-dev-why.png";
const WEB_BG_VECTOR = "/assets/images/AI-02.png";

const faqs = [
  { q: "What does a digital branding service include?", a: "It usually covers brand strategy, logo design, visual identity, website style, social media branding, and guidelines that keep your brand consistent across all platforms." },
  { q: "How is digital branding different from traditional branding?", a: "Digital branding focuses on how your brand looks and feels online. That includes websites, social media, ads, and digital content, while traditional branding also includes print, packaging, and offline materials. " },
  { q: "How long does it take to build a brand identity?", a: "It depends on the scope, but most projects take anywhere from 2 to 6 weeks. Larger brands or more detailed strategies can take longer." },
  { q: "Do I need a full brand identity or just a logo?", a: "A logo alone is a start, but a full brand identity gives you consistency. It helps with colors, fonts, tone of voice, and overall recognition across platforms." },
  { q: "Can you update or improve my existing brand instead of starting from scratch?", a: "Yes. Many businesses already have a brand but need a refresh. This can include redesigning visuals, improving messaging, or aligning everything with current market trends." },
];

const IcCustom = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
const IcBusiness = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /><line x1="12" y1="12" x2="12" y2="16" /><line x1="10" y1="14" x2="14" y2="14" /></svg>;
const IcResponsive = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /><rect x="2" y="6" width="20" height="12" rx="2" /></svg>;
const IcLanding = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>;
const IcRedesign = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>;

const IcCustomize = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>;
const IcDesign = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
const IcMobile = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" /><path d="M9 6h6" /></svg>;
const IcUserFocus = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;

const SvgUnderline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
    <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
      fill="none" stroke="var(--brand-primary)" strokeWidth="6" strokeLinecap="round" className="animated-path" />
  </svg>
);

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

const FaqItem = ({ faq, index, dark = false }: { faq: { q: string; a: string }; index: number; dark?: boolean }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-xl overflow-hidden reveal-up ${dark ? "border border-white/10 bg-white/[0.04]" : "border border-gray-200"}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-5 text-left transition-colors ${dark ? "hover:bg-white/5" : "hover:bg-gray-50"}`}
      >
        <span className={`font-semibold pr-4 text-base ${dark ? "text-white" : "text-[#1a1a2e]"}`}>{faq.q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[color:var(--brand-primary)] rotate-180" : dark ? "bg-white/10" : "bg-gray-100"}`}
        >
          <svg className={`w-4 h-4 ${open ? "text-white" : dark ? "text-neutral-400" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div
          className={`px-6 pb-5 leading-relaxed text-sm pt-4 animate-faq-open border-t ${dark ? "text-neutral-300 border-white/10" : "text-gray-500 border-gray-100"}`}
        >
          {faq.a}
        </div>
      )}
    </div>
  );
};

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
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "BrandingDesign",
    message: "",
  });
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [loading, setLoading] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.message.trim()) newErrors.message = "Project details are required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: "BrandingDesign" as const,
      message: form.message.trim(),
    };

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
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "BrandingDesign",
        message: "",
      });
      setErrors({});
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
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

  const whyInvestItems = [
    { t: "Enhanced Visibility", d: "A strong digital brand helps you stand out in the competitive digital landscape." },
    { t: "Trust and Credibility", d: "Effective branding builds trust and positions your business as a reputable entity in your industry." },
    { t: "Consistency Across Channels", d: "A unified digital branding strategy ensures consistent messaging across all platforms." },
    { t: "Customer Loyalty", d: "When customers connect with your brand, they’re more likely to become loyal advocates." }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
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
        .shimmer-badge{background:linear-gradient(90deg,color-mix(in srgb,var(--brand-primary) 12%,transparent) 0%,color-mix(in srgb,var(--brand-primary) 32%,transparent) 40%,color-mix(in srgb,var(--brand-primary) 12%,transparent) 100%);background-size:200% auto;animation:shimmer 4s linear infinite}
        @keyframes pulseRing{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--brand-primary) 35%,transparent)}70%{box-shadow:0 0 0 12px transparent}100%{box-shadow:0 0 0 0 transparent}}
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
        .svc-icon-box{width:52px;height:52px;border-radius:14px;background:color-mix(in srgb,var(--brand-primary) 8%,transparent);display:flex;align-items:center;justify-content:center;margin-bottom:20px;transition:all .4s cubic-bezier(.16,1,.3,1)}
        .svc-icon-box svg{width:24px;height:24px;color:var(--brand-primary);transition:color .4s ease}
        .group:hover .svc-icon-box{background:var(--brand-primary);transform:scale(1.05) rotate(-2deg)}
        .group:hover .svc-icon-box svg{color:#fff}

        .why-icon-box{width:46px;height:46px;border-radius:12px;background:color-mix(in srgb,var(--brand-primary) 8%,transparent);display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:all .4s cubic-bezier(.16,1,.3,1)}
        .why-icon-box svg{width:20px;height:20px;color:var(--brand-primary);transition:color .4s ease}
        .group:hover .why-icon-box{background:var(--brand-primary);transform:scale(1.05)}
        .group:hover .why-icon-box svg{color:#fff}

        .ind-icon-box{width:50px;height:50px;border-radius:50%;background:color-mix(in srgb,var(--brand-primary) 8%,transparent);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;transition:all .4s cubic-bezier(.16,1,.3,1)}
        .ind-icon-box svg{width:22px;height:22px;color:var(--brand-primary);transition:color .4s ease}
        .group:hover .ind-icon-box{background:var(--brand-primary);transform:scale(1.1) rotate(-4deg)}
        .group:hover .ind-icon-box svg{color:#fff}

        /* ── placeholder image ── */
        .img-placeholder{background:linear-gradient(135deg,#1a2040 0%,#2d3568 50%,#1e3060 100%);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:rgba(255,255,255,.3);font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
        .img-placeholder svg{opacity:.25;width:48px;height:48px}

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
      <section className="pt-24 bg-[#0a0a0a] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 lg:pt-24 lg:pb-40 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] md:w-[40%] h-[60%] bg-[color-mix(in_srgb,var(--brand-primary)_35%,transparent)] opacity-[0.12] blur-[120px] rounded-full animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] md:w-[50%] h-[70%] bg-[color-mix(in_srgb,var(--brand-primary)_18%,#0a3d0c)] opacity-[0.15] blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-[1400px] mx-auto z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="hero-line-1 inline-block px-4 py-1.5 shimmer-badge border border-[color-mix(in_srgb,var(--brand-primary)_25%,transparent)] rounded-full">
                <span className="text-[color:var(--brand-primary)] text-xs sm:text-sm font-bold tracking-wider uppercase">Professional Digital Branding 2026</span>
              </div>
              <h1 className="hero-line-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-[1.1] tracking-tight">
                Elevate Your Brand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Identity</span>
              </h1>
              <p className="hero-line-3 text-gray-300 text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-xl leading-relaxed font-light">
                At PureDesignHub, we specialize in creating impactful and memorable digital brand identities that resonate with your target audience. With our Digital Branding Services, we help businesses in the USA craft a compelling online presence that drives engagement, builds trust, and boosts conversions.
              </p>
              <div className="hero-line-4 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 pt-2 md:pt-4">
                <Link href="/get-quote" className="pulse-btn bg-[color:var(--brand-primary)] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-lg font-bold text-base sm:text-lg hover:shadow-[0_20px_50px_rgba(44,159,0,0.35)] hover:-translate-y-1 transition-all flex items-center gap-3 group will-change-transform">
                  Get Free Proposal
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <Link href="tel:+1234567890" className="flex items-center gap-3 font-bold text-lg sm:text-xl hover:text-[color:var(--brand-primary)] transition-all group">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-full group-hover:bg-[color-mix(in_srgb,var(--brand-primary)_18%,transparent)] group-hover:border-[color-mix(in_srgb,var(--brand-primary)_35%,transparent)] transition-all">
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="var(--brand-primary)" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  Schedule a Call
                </Link>
              </div>
            </div>

            <div className="hero-form w-full max-w-lg lg:ml-auto">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#2a8b3a]/40 blur-[60px] opacity-100 animate-pulse -z-10 rounded-3xl" />
                <div className="absolute -inset-10 bg-[#2a8b3a]/25 blur-[120px] opacity-80 -z-20 rounded-full" />

                <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-[2px] bg-[#39b54a]"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#39b54a]">Direct Inquiry</span>
                    </div>
                    <h2 className="text-3xl font-black text-white">Book a Free <span className="text-[#39b54a]">Branding Audit</span></h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="relative group">
                        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[color:var(--brand-primary)] transition-all py-3 text-base sm:text-lg placeholder-transparent text-white" placeholder="Full Name" required />
                        <label htmlFor="name" className="absolute left-0 -top-5 text-xs sm:text-sm font-bold text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:sm:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[color:var(--brand-primary)]">Full Name</label>
                        {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
                      </div>
                      <div className="relative group">
                        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[color:var(--brand-primary)] transition-all py-3 text-base sm:text-lg placeholder-transparent text-white" placeholder="Email" required />
                        <label htmlFor="email" className="absolute left-0 -top-5 text-xs sm:text-sm font-bold text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:sm:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[color:var(--brand-primary)]">Email</label>
                        {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="relative group">
                        <input type="tel" id="number" name="phone" value={form.phone} onChange={handleChange} className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[color:var(--brand-primary)] transition-all py-3 text-base sm:text-lg placeholder-transparent text-white" placeholder="Number" required />
                        <label htmlFor="number" className="absolute left-0 -top-5 text-xs sm:text-sm font-bold text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:sm:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[color:var(--brand-primary)]">Number</label>
                        {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone}</p>}
                      </div>
                      <div className="relative group min-w-0">
                        <input type="text" id="project" name="message" value={form.message} onChange={handleChange} className="peer w-full min-w-0 border-b-2 border-gray-200 bg-transparent outline-none focus:border-[color:var(--brand-primary)] transition-all py-3 text-base sm:text-lg placeholder-transparent text-white" placeholder="Project Need" required />
                        <label htmlFor="project" className="absolute left-0 right-0 max-w-full -top-5 text-xs sm:text-sm font-bold text-gray-400 transition-all leading-snug peer-placeholder-shown:text-sm peer-placeholder-shown:sm:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:sm:text-sm peer-focus:text-[color:var(--brand-primary)]">Describe your project</label>
                        {errors.message && <p className="text-red-400 text-xs mt-2">{errors.message}</p>}
                      </div>
                    </div>
                    <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#39b54a] via-[#2f9234] to-[#1f7f2b] text-white font-bold py-4 sm:py-6 rounded-lg text-lg sm:text-xl shadow-[0_20px_40px_rgba(57,181,74,0.25)] hover:shadow-[0_24px_50px_rgba(57,181,74,0.35)] transition-all mt-6 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">{loading ? "Sending..." : "Schedule A Call"}</button>
                    <p className="text-center text-xs text-gray-400 mt-8 font-medium">By submitting this form, you agree to our <Link href="/privacypolicy" className="text-[color:var(--brand-primary)] hover:underline">Privacy Policy</Link></p>
                  </form>

                  {successMsg && (
                    <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-[#39b54a] text-xs font-bold text-center animate-fade-in">
                      {successMsg}
                    </div>
                  )}
                  {errorMsg && (
                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-bold text-center animate-fade-in">
                      {errorMsg}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          INTRO — Why Digital Branding Matters
      ══════════════════════════════════ */}
      <section className="relative isolate py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto overflow-hidden bg-[#0a0a0a] text-neutral-200">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Image
            src={WEB_BG_VECTOR}
            alt=""
            fill
            className="object-contain object-right-bottom opacity-[0.14] sm:opacity-[0.16] md:opacity-[0.18]"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 md:mb-6">
            <span className="w-8 sm:w-12 h-[2px] bg-[color:var(--brand-primary)]" />
            <h3 className="text-[color:var(--brand-primary)] font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-xs sm:text-sm">Professional Digital Branding</h3>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] uppercase relative z-20">
            Why Digital Branding
            <span className="text-[color:var(--brand-primary)] block mt-1 md:mt-2">Matters</span>
          </h2>
          <div className="space-y-6 md:space-y-8 leading-relaxed text-base sm:text-lg md:text-xl relative z-20">
            <p className="max-w-3xl text-neutral-300">In today&apos;s digital world, branding is more than just a logo or color scheme. It&apos;s how your business is perceived by your audience across various online platforms. Your digital brand identity shapes how customers see your values, vision, and personality.</p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 py-4 md:py-6">
              <div className="border-l-4 border-[color:var(--brand-primary)] pl-5 sm:pl-6 bg-white/[0.04] backdrop-blur-sm p-4 rounded-r-2xl shadow-sm border-white/10">
                <h4 className="font-bold text-white mb-2 uppercase tracking-tight text-sm sm:text-base">Perception</h4>
                <p className="text-sm sm:text-base text-neutral-400">It&apos;s how your business is perceived by your audience across various online platforms.</p>
              </div>
              <div className="border-l-4 border-[color:var(--brand-primary)] pl-5 sm:pl-6 bg-white/[0.04] backdrop-blur-sm p-4 rounded-r-2xl shadow-sm border-white/10">
                <h4 className="font-bold text-white mb-2 uppercase tracking-tight text-sm sm:text-base">Identity</h4>
                <p className="text-sm sm:text-base text-neutral-400">Your digital brand identity shapes how customers see your values, vision, and personality.</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Link href="/get-quote" className="relative z-30 inline-block bg-[color:var(--brand-primary)] text-black px-10 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 shadow-xl">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY DIGITAL BRANDING
      ══════════════════════════════════ */}
      <section className="bg-[#0a0a0a] py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden text-neutral-200">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal-left">
            <h2 className="title2 !text-white text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight uppercase">
              Why invest in <span className="text-[color:var(--brand-primary)]">digital branding</span>?
            </h2>
            <div className="space-y-3 md:space-y-4">
              {whyInvestItems.map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm sm:text-base text-neutral-300 reveal-up" style={{ transitionDelay: `${i * 80}ms` }}>
                  <span className="w-5 h-5 rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_18%,transparent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[color:var(--brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <p><strong className="text-white">{item.t}:</strong> {item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right rounded-3xl md:rounded-[40px] overflow-hidden relative h-[250px] sm:h-[350px] md:h-[450px] shadow-[0_20px_50px_-10px_rgba(44,159,0,0.18)] ring-1 ring-white/10">
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
      <section className="py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto text-center mb-10 md:mb-16 reveal-up">
          <h2 className="title2 text-3xl md:text-5xl font-black mb-3 md:mb-4 uppercase text-[#272D4E]">
            Our Digital Branding <span className="text-[color:var(--brand-primary)] block sm:inline">Services</span>
          </h2>
          <p className="text max-w-2xl mx-auto text-gray-500 text-base sm:text-lg">
            We offer a comprehensive range of branding services designed to give your business a strong and cohesive online presence:
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger-child">
          {webServices.map((s, i) => (
            <div key={i} className="reveal-up bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[color-mix(in_srgb,var(--brand-primary)_8%,transparent)] transition-all duration-500 border border-gray-100 group hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--brand-primary)_22%,transparent)]">
              <div className="svc-icon-box"><s.Icon /></div>
              <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 text-[#272D4E] group-hover:text-[color:var(--brand-primary)] transition-colors duration-300">{s.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4">{s.desc.text}</p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
                {s.desc.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 mt-0.5 rounded-full bg-[color-mix(in_srgb,var(--brand-primary)_14%,transparent)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-[color:var(--brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
      <section className="py-16 md:py-20 bg-[#0a0a0a] text-white px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="reveal-up text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">Digital Branding That Delivers <span className="text-[color:var(--brand-primary)]">Results</span></h2>
          <p className="reveal-up text-neutral-400 mb-10 md:mb-12 text-sm sm:text-base md:text-lg">We don&apos;t just create designs — we build powerful brand identities that leave a lasting impression.</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-child">
            {[
              { val: 98, suffix: "%", label: "Client Satisfaction" },
              { val: 300, suffix: "+", label: "Brands Transformed" },
              { val: 8, suffix: "+", label: "Industry Experience" },
              { val: 100, suffix: "%", label: "Commitment to Quality" },
            ].map((stat, i) => (
              <div key={i} className="reveal-up">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[color:var(--brand-primary)] mb-1 sm:mb-2"><AnimatedCounter target={stat.val} suffix={stat.suffix} /></div>
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
          <h2 className="reveal-up title2 text-3xl md:text-5xl font-black text-center mb-3 md:mb-4 uppercase">
            Why Choose <span className="text-[color:var(--brand-primary)] block sm:inline">Pure Design Hub</span> for Your Digital Branding Needs?
          </h2>
          <p className="reveal-up text max-w-6xl mx-auto text-gray-500 text-center mb-10 text-base sm:text-lg">
            At PureDesignHub, we specialize in creating impactful and memorable digital brand identities that resonate with your target audience.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-child">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="reveal-up p-6 sm:p-8 bg-[#f9f9f9] rounded-3xl border border-transparent hover:border-[color-mix(in_srgb,var(--brand-primary)_28%,transparent)] hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-[color-mix(in_srgb,var(--brand-primary)_10%,transparent)] transition-all duration-500 group">
                <div className="why-icon-box"><item.Icon /></div>
                <h4 className="font-bold text-lg sm:text-xl text-[#272D4E] mb-2 sm:mb-3 group-hover:text-[color:var(--brand-primary)] transition-colors duration-300">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 md:mt-12 text-gray-600 max-w-3xl mx-auto reveal-up text-sm sm:text-base">
            From brand strategy to design and digital marketing, we offer end-to-end solutions that cover all aspects of your online identity.
          </p>
        </div>
      </section>

      <PricingPlansBlock />

      <Portfolio isWhite={false} singleCategory="Branding" hideTabs />

      {/* ══════════════════════════════════
          PROCESS
      ══════════════════════════════════ */}
      <section className="relative py-16 md:py-20 bg-[#0a0a0a] px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden text-neutral-200">
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim xl:w-66 xl:h-66 w-24 h-24 object-cover absolute top-0 xl:-left-33 -left-4 -z-1 circle_img pointer-events-none opacity-30" />
        <Image src={Circle} alt="circle" width={0} height={0} sizes="100vw" loading="lazy" className="float-anim-slow xl:w-66 xl:h-66 w-24 h-24 object-cover absolute bottom-0 xl:-right-10 -right-6 -z-1 circle_img pointer-events-none opacity-30" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <h2 className="reveal-up title2 !text-white text-3xl md:text-5xl font-black text-center mb-3 md:mb-6">
            Our Strategic{" "}<span className="relative inline-block mt-2 sm:mt-0">Branding Process<SvgUnderline /></span>
          </h2>
          <p className="reveal-up text text-neutral-400 text-center mb-10 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg">We follow a structured, results-driven approach to ensure your brand identity is built for long-term success and market dominance.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger-child">
            {processSteps.map((s, i) => (
              <div key={i} className="reveal-up relative rounded-2xl p-5 sm:p-6 border transition-all duration-500 group hover:-translate-y-1 border-white/10 bg-white/[0.04] shadow-sm hover:border-[color-mix(in_srgb,var(--brand-primary)_40%,transparent)] hover:bg-[color-mix(in_srgb,var(--brand-primary)_8%,transparent)] hover:shadow-lg">
                <div className="text-5xl md:text-6xl font-black text-[color-mix(in_srgb,var(--brand-primary)_14%,transparent)] absolute top-3 right-4 leading-none select-none transition-all duration-500 group-hover:text-[color-mix(in_srgb,var(--brand-primary)_22%,transparent)] group-hover:scale-105">{s.number}</div>
                <div className="text-[color:var(--brand-primary)] font-bold text-[10px] sm:text-xs mb-1 sm:mb-2 tracking-widest uppercase">Step {s.number}</div>
                <h3 className="font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-[color:var(--brand-primary)] transition-colors duration-300">{s.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechStack type="branding" />

      <IndustriesSection variant="dark" />

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white text-[#1a1a1a] px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="reveal-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-[#1a1a1a]">
            Start Building Your <span className="text-[color:var(--brand-primary)] block sm:inline mt-2 sm:mt-0">Digital Brand Today</span>
          </h2>
          <p className="reveal-up text-gray-600 max-w-4xl mx-auto mb-10 md:mb-12 text-base sm:text-lg leading-relaxed">
            Ready to take your brand to the next level? At PureDesignHub, we believe in the power of digital branding to create lasting impressions and meaningful connections with your audience. Whether you&apos;re rebranding or launching a new business, our team is here to help.
          </p>
          <div className="reveal-scale bg-[#f8fafc] p-6 sm:p-10 md:p-12 rounded-3xl md:rounded-[50px] border border-gray-200 max-w-4xl mx-auto">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#1a1a1a] uppercase tracking-wider">Contact us today</h4>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">to discuss how we can elevate your digital brand and drive your business forward.</p>
            <Link href="/get-quote" className="pulse-btn bg-[color:var(--brand-primary)] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-white hover:text-[color:var(--brand-primary)] transition-all inline-block shadow-2xl will-change-transform">Contact Us Today</Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.07] pointer-events-none">
          <div className="absolute -top-20 -left-20 sm:top-10 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[color:var(--brand-primary)] rounded-full blur-[80px] sm:blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 sm:bottom-10 sm:right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[color:var(--brand-primary)] rounded-full blur-[100px] sm:blur-[120px]" />
        </div>
      </section>

      {/* ══════════════════════════════════
          FAQ
      ══════════════════════════════════ */}
      <section className="bg-[#0a0a0a] px-4 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24 mb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="reveal-up title2 !text-white text-3xl md:text-5xl font-black text-center mb-3 md:mb-6">
            Digital Branding Services{" "}<span className="relative inline-block mt-2 sm:mt-0">FAQs<SvgUnderline /></span>
          </h2>
          <p className="reveal-up text text-neutral-400 text-center mb-8 md:mb-16 text-base sm:text-lg">Everything you need to know about our Digital Branding services.</p>
          <div className="w-full space-y-3 md:space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} dark />
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
