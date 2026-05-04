"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Circle from "@/public/assets/images/circle.png";
import TestimonialImg1 from "@/public/assets/images/testimonial_img1.png";
import TestimonialImg2 from "@/public/assets/images/testimonial_img2.png";
import TestimonialImg3 from "@/public/assets/images/testimonial_img3.png";
import TestimonialImg4 from "@/public/assets/images/testimonial_img4.png";
import TestimonialImg5 from "@/public/assets/images/testimonial_img5.png";
import TestimonialImg6 from "@/public/assets/images/testimonial_img6.png";
import Header from "../component/header";
import HomeBanner from "../component/homeBanner";
import Footer from "../component/footer";
import ContactUs from "../component/contactUs";
import AboutUsComp from "../component/AboutUsComp";
import PricingSection from "../component/web-development-pricing";
import TechStack from "../component/tech-stack";
import Portfolio from "../component/portfolioGallery";





const categories = ["Web Design", "Mobile Apps", "Branding", "Logo"];
/* ─── SVG Icons ─── */
const IcWeb = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="M6 8h.01M9 8h.01M12 8h6" /></svg>;
const IcApp = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" /><path d="M9 6h6" /></svg>;
const IcBranding = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
const IcContent = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
const IcSocial = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>;
const IcSEO = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>;

/* ─── SVG Underline ─── */
const SvgUnderline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
    <path d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7"
      fill="none" stroke="#f75126" strokeWidth="6" strokeLinecap="round" className="animated-path" />
  </svg>
);

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        obs.unobserve(el); let start = 0;
        const step = (ts: number) => { if (!start) start = ts; const p = Math.min((ts - start) / 1800, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    obs.observe(el); return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Scroll Reveal ─── */
function ScrollRevealInit() {
  useEffect(() => {
    const classes = ["reveal-up", "reveal-left", "reveal-right", "reveal-fade", "reveal-scale"];
    const allEls: Element[] = [];
    classes.forEach(cls => allEls.push(...Array.from(document.querySelectorAll(`.${cls}`))));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); }),
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    allEls.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

/* ══════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════ */
interface Testimonial {
  id: number; name: string; role: string; company: string; rating: number;
  text: string; avatarImg: typeof TestimonialImg1; initials: string; avatarBg: string; showPlayIcon?: boolean;
}

const testimonialData: Testimonial[] = [
  { id: 1, name: "Sharon D. Cramer", role: "CEO", company: "FreshCart Global", rating: 5, text: "Pure Design Hub completely transformed our online presence. Our revenue increased by 340% within three months of the redesign. Absolutely exceptional work from start to finish!", avatarImg: TestimonialImg1, initials: "MT", avatarBg: "bg-[#F75126]", showPlayIcon: true },
  { id: 2, name: "Katherine A. Clark", role: "Founder", company: "WellnessFirst", rating: 5, text: "The mobile app they built for us was delivered ahead of schedule and exceeded all expectations. The UI is gorgeous and our users absolutely love using it every single day.", avatarImg: TestimonialImg2, initials: "AK", avatarBg: "bg-[#272D4E]", showPlayIcon: false },
  { id: 3, name: "Mia Wu", role: "Marketing Director", company: "NexusLabs", rating: 5, text: "Their SEO strategy brought us from page 5 to position 1 for our main keywords in under 4 months. Pure Design Hub is the real deal — worth every single penny we invested.", avatarImg: TestimonialImg3, initials: "JW", avatarBg: "bg-[#F75126]", showPlayIcon: true },
  { id: 4, name: "Michael Thompson", role: "COO", company: "BuildFlow Inc.", rating: 5, text: "From branding to social media management, they handled everything flawlessly. Our brand recognition has skyrocketed and our engagement metrics are through the roof. Incredible team!", avatarImg: TestimonialImg4, initials: "SM", avatarBg: "bg-[#272D4E]", showPlayIcon: false },
  { id: 5, name: "David Chen", role: "Product Lead", company: "CloudPath Systems", rating: 5, text: "Tight deadline, complex product. Pure Design Hub delivered a world-class app on time, under budget, and with zero compromises on quality. I would not work with anyone else.", avatarImg: TestimonialImg5, initials: "DC", avatarBg: "bg-[#F75126]", showPlayIcon: true },
  { id: 6, name: "James Smith", role: "Growth Director", company: "VantaGroup", rating: 5, text: "The content strategy and SEO work was truly transformational. Organic traffic up 280% in 6 months. These people genuinely understand digital growth like no one else.", avatarImg: TestimonialImg6, initials: "ZS", avatarBg: "bg-[#272D4E]", showPlayIcon: false },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#F75126]" : "text-gray-200"}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* LEFT content  |  RIGHT portrait video */
function TestimonialSlider() {
  const [current, setCurrent] = useState(6); // Start in the middle set of clones
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const originalItems = testimonialData;
  const clonedItems = [...originalItems, ...originalItems, ...originalItems];
  const totalItems = clonedItems.length;

  // Auto-play
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [current, isDragging]);

  // Infinite loop reset
  useEffect(() => {
    if (current <= 2) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent(current + originalItems.length);
      }, 1000);
    } else if (current >= totalItems - 4) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrent(current - originalItems.length);
      }, 1000);
    } else if (!transitionEnabled) {
      // Small delay to re-enable transition after jump
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  }, [current, transitionEnabled]);

  const handleNext = () => {
    if (!transitionEnabled) return;
    setCurrent((c) => c + 1);
  };

  const handlePrev = () => {
    if (!transitionEnabled) return;
    setCurrent((c) => c - 1);
  };

  // Drag handlers
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setTransitionEnabled(false);
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    setStartX(x);
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = "touches" in e ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX);
    setDragOffset(walk);
  };

  const onDragEnd = () => {
    setIsDragging(false);
    setTransitionEnabled(true);
    const threshold = 100;
    if (dragOffset < -threshold) {
      handleNext();
    } else if (dragOffset > threshold) {
      handlePrev();
    }
    setDragOffset(0);
  };

  return (
    <>
      <div
        className="relative overflow-hidden px-2 py-10 cursor-grab active:cursor-grabbing select-none"
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >
        {/* 🔥 SLIDING TRACK */}
        <div
          className={`flex ${transitionEnabled ? "transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]" : "transition-none"}`}
          style={{
            transform: `translateX(calc(-${current * (100 / (typeof window !== 'undefined' && window.innerWidth < 1024 ? 1 : 2))}% + ${dragOffset}px))`
          }}
        >
          {clonedItems.map((item, idx) => (
            <div
              key={idx}
              className="w-full lg:w-1/2 flex-shrink-0 px-3"
            >
              <div className="flex flex-col lg:flex-row rounded-[32px] overflow-hidden border-2 border-gray-100 bg-white transition-all duration-500 group" style={{ minHeight: "480px" }}>

                {/* ── LEFT CONTENT ── */}
                <div className="flex-1 flex flex-col justify-between p-8 md:p-10 lg:p-12 relative">
                  <span className="absolute top-6 right-8 text-[8rem] font-black text-[#F75126]/5 select-none italic">
                    "
                  </span>

                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[#F75126]/8 border border-[#F75126]/20 px-4 py-2 rounded-full mb-8">
                      Client Success Story
                    </span>

                    <div className="mb-6">
                      <StarRating count={item.rating} />
                    </div>

                    <blockquote className="text-[#272D4E] mb-10 text-xl font-medium leading-relaxed italic">
                      "{item.text}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${item.avatarBg} flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                        <span className="text-sm font-black text-white uppercase tracking-tighter">
                          {item.initials}
                        </span>
                      </div>

                      <div>
                        <div className="font-bold text-[#272D4E] text-lg tracking-tight">
                          {item.name}
                        </div>
                        <div className="text-sm font-bold text-[#F75126]">
                          {item.role} @ {item.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── RIGHT VIDEO ── */}
                <div className="w-full lg:w-[320px] h-[300px] lg:h-auto relative bg-[#0B0D17] flex items-center justify-center p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F75126]/20 to-transparent opacity-30" />

                  <div
                    className="relative w-full max-w-[150px] lg:max-w-[180px] group/vid"
                    style={{ aspectRatio: "9/16" }}
                  >
                    <div className="absolute inset-0 rounded-[28px] lg:rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/10 group-hover/vid:border-[#F75126]/50 transition-colors duration-500">
                      <Image
                        src={item.avatarImg}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/vid:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/vid:bg-black/20 transition-colors duration-500" />
                    </div>

                    {item.showPlayIcon && (
                      <>
                        {/* Icon only, no video playback */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#F75126] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(247,81,38,0.5)] group-hover/vid:scale-110 transition-transform duration-500 relative">
                            <div className="absolute inset-0 rounded-full bg-[#F75126] animate-ping opacity-20" />
                            <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white ml-1 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute -bottom-6 lg:-bottom-4 left-1/2 -translate-x-1/2 w-full text-center">
                          <span className="text-[9px] lg:text-[10px] font-black text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">Client Story</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex flex-col items-center gap-8 mt-12">
        {/* DOTS */}
        <div className="flex gap-3">
          {originalItems.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setTransitionEnabled(true);
                setCurrent(i + originalItems.length);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${current % originalItems.length === i ? "w-10 bg-[#F75126]" : "w-2 bg-[#F75126]/20 hover:bg-[#F75126]/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* PREV */}
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border-2 border-[#F75126]/10 flex items-center justify-center hover:border-[#F75126] hover:bg-[#F75126] hover:text-white text-[#F75126] transition-all duration-500 group"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* NEXT */}
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border-2 border-[#F75126]/10 flex items-center justify-center hover:border-[#F75126] hover:bg-[#F75126] hover:text-white text-[#F75126] transition-all duration-500 group"
          >
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════════════════
   TECH STACK — 3-ROW CAROUSEL
══════════════════════════════════════ */


/* ══════════════════════════════════════
   HOME
══════════════════════════════════════ */
const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Web Design");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const services = [
    { title: "Website Development", text: "Build fast, responsive, and user-friendly websites that drive engagement and convert visitors into customers.", imagePath: "/assets/images/service1.png", slug: "/services/web-development", Icon: IcWeb },
    { title: "App Development", text: "Create intuitive mobile apps that enhance user experience, retention, and long-term growth for your business.", imagePath: "/assets/images/service2.png", slug: "/services/app-development", Icon: IcApp },
    { title: "Branding Design", text: "Craft a strong brand identity that resonates with your audience and stands out in a competitive market.", imagePath: "/assets/images/branding_body.png", slug: "/services/branding-design", Icon: IcBranding },
    { title: "Content Writing", text: "Compelling, SEO-optimized content that tells your story, builds authority, and drives meaningful engagement.", imagePath: "/assets/images/service3.png", slug: "/services/content-writing", Icon: IcContent },
    { title: "Social Media Marketing", text: "Strategic social campaigns that grow your audience, build community, and convert followers into loyal customers.", imagePath: "/assets/images/service4.png", slug: "/services/social-media-marketing", Icon: IcSocial },
    { title: "SEO Services", text: "Dominate search rankings with proven SEO strategies that bring qualified traffic and sustainable organic growth.", imagePath: "/assets/images/service5.png", slug: "/services/seo-services", Icon: IcSEO },
  ];
  const stats = [
    { val: 500, suffix: "+", label: "Projects Delivered" },
    { val: 98, suffix: "%", label: "Client Satisfaction" },
    { val: 8, suffix: "+", label: "Years Experience" },
    { val: 150, suffix: "+", label: "Happy Clients" },
  ];
  const process = [
    { step: "01", title: "Discovery Call", desc: "We start with a free consultation to understand your goals, audience, and vision. No jargon — just clarity." },
    { step: "02", title: "Strategy & Planning", desc: "Our team builds a custom roadmap tailored to your project — timelines, deliverables, and success metrics." },
    { step: "03", title: "Design & Development", desc: "We design, build, and iterate with your feedback at every stage so the final product feels exactly right." },
    { step: "04", title: "Launch & Growth", desc: "We don't just deliver and disappear. Post-launch support, analytics, and ongoing growth is part of the deal." },
  ];
  const faqs = [
    { q: "How long does a website project take?", a: "Most websites are delivered within 2–4 weeks depending on complexity. We always provide a clear timeline upfront." },
    { q: "Do you offer ongoing support after launch?", a: "Yes. We offer monthly maintenance and support packages so your site stays fast, secure, and up to date." },
    { q: "Can you help with both design and marketing?", a: "Absolutely — Pure Design Hub is a full-service agency. We handle everything from branding to SEO under one roof." },
    { q: "What industries do you work with?", a: "We've worked across e-commerce, healthcare, real estate, SaaS, local services, and more. Every niche is welcome." },
    { q: "Is there a minimum project budget?", a: "We have flexible packages for startups and small businesses, all the way up to enterprise solutions. Let's talk." },
  ];

  return (
    <>
      <style jsx global>{`
        .reveal-up    { opacity:0; transform:translateY(40px);  transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
        .reveal-left  { opacity:0; transform:translateX(-50px); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
        .reveal-right { opacity:0; transform:translateX(50px);  transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
        .reveal-fade  { opacity:0; transition:opacity 1s ease; }
        .reveal-scale { opacity:0; transform:scale(.9); transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1); }
        .reveal-up.in-view,.reveal-left.in-view,.reveal-right.in-view,.reveal-fade.in-view { opacity:1; transform:translate(0); }
        .reveal-scale.in-view { opacity:1; transform:scale(1); }

        .stagger-child>*:nth-child(1){transition-delay:0ms}
        .stagger-child>*:nth-child(2){transition-delay:90ms}
        .stagger-child>*:nth-child(3){transition-delay:180ms}
        .stagger-child>*:nth-child(4){transition-delay:270ms}
        .stagger-child>*:nth-child(5){transition-delay:360ms}
        .stagger-child>*:nth-child(6){transition-delay:450ms}

        .animated-path{stroke-dasharray:1500;stroke-dashoffset:1500;animation:drawPath 1.4s ease forwards .3s}
        @keyframes drawPath{to{stroke-dashoffset:0}}

        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        .float-anim{animation:floatY 5s ease-in-out infinite}
        .float-anim-slow{animation:floatY 7s ease-in-out infinite}

        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .shimmer-badge{background:linear-gradient(90deg,rgba(247,81,38,.15) 0%,rgba(247,81,38,.35) 40%,rgba(247,81,38,.15) 100%);background-size:200% auto;animation:shimmer 3s linear infinite}

        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(247,81,38,.45)}70%{box-shadow:0 0 0 14px rgba(247,81,38,0)}100%{box-shadow:0 0 0 0 rgba(247,81,38,0)}}
        .pulse-btn{animation:pulseRing 2.2s ease infinite}

        .svc-icon-box{width:52px;height:52px;border-radius:14px;background:rgba(247,81,38,.07);display:flex;align-items:center;justify-content:center;margin-bottom:18px;transition:background .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
        .svc-icon-box svg{width:24px;height:24px;color:#F75126;transition:color .3s ease}
        .svc-card:hover .svc-icon-box{background:#F75126;transform:scale(1.08) rotate(-4deg)}
        .svc-card:hover .svc-icon-box svg{color:#fff}

        .grid-bg::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(247,81,38,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(247,81,38,.03) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}

        @keyframes faqOpen{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
        .faq-body{animation:faqOpen .25s ease forwards}

        /* ══ GLOBAL TRANSITIONS & ANIMATIONS ══ */
        .reveal-up { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal-up.active { opacity: 1; transform: translateY(0); }

        .stagger-child > * { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
        .stagger-child.active > * { opacity: 1; transform: translateY(0); }
        .stagger-child.active > *:nth-child(1) { transition-delay: 0.1s; }
        .stagger-child.active > *:nth-child(2) { transition-delay: 0.2s; }
        .stagger-child.active > *:nth-child(3) { transition-delay: 0.3s; }
        .stagger-child.active > *:nth-child(4) { transition-delay: 0.4s; }

        /* ══ CARD & HOVER EFFECTS ══ */
        .svc-card, .port-card, .process-card {
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .svc-card:hover, .port-card:hover, .process-card:hover {
          transform: translateY(-12px) scale(1.01);
          box-shadow: 0 30px 60px -15px rgba(247,81,38,0.25);
        }

        .svc-icon-box {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .group:hover .svc-icon-box {
          transform: scale(1.15) rotate(10deg);
          background-color: #F75126;
          color: white;
        }

        /* ══ BUTTONS & LINKS ══ */
        .pulse-btn { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; }
        .pulse-btn:hover { transform: scale(1.05) translateY(-3px); box-shadow: 0 15px 35px rgba(247,81,38,0.4); }
        .pulse-btn::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: rgba(255,255,255,0.1);
          transform: rotate(45deg);
          transition: 0.5s;
          left: -100%;
        }
        .pulse-btn:hover::after { left: 100%; }

        .group-btn svg { transition: transform 0.3s ease; }
        .group-btn:hover svg { transform: translateX(6px); }

        /* ══ BANNER EFFECTS ══ */
        @keyframes float-slow { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(2deg)} }
        @keyframes float-medium { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-15px) rotate(-3deg)} }
        @keyframes float-fast { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-10px) rotate(5deg)} }
        @keyframes pulse-glow { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.1)} }
        @keyframes text-reveal { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .banner-float-1 { animation: float-slow 6s ease-in-out infinite; }
        .banner-float-2 { animation: float-medium 5s ease-in-out infinite; }
        .banner-float-3 { animation: float-fast 4s ease-in-out infinite; }
        .banner-glow { animation: pulse-glow 8s ease-in-out infinite; transition: all 0.6s ease; }

        .banner-parallax { transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .banner-parallax:hover { transform: scale(1.08) translateY(-15px) rotate(3deg); filter: drop-shadow(0 25px 50px rgba(247,81,38,0.35)); }

        .banner_sec:hover .banner-glow { opacity: 0.8; transform: scale(1.3); filter: blur(70px); }

        .headline-reveal { animation: text-reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .text-gradient-shimmer {
          background: linear-gradient(90deg, #F75126, #FF8C69, #F75126);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
          text-shadow: 0 10px 30px rgba(247,81,38,0.2);
        }

        /* ══ PORTFOLIO HOVER-SCROLL ══ */
        .port-img {
          width:100%;
          height:300%;
          object-fit:cover;
          object-position:top center;
          display:block;
          transition:object-position 1.5s cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
        .port-card:hover .port-img { object-position:bottom center; }
      `}</style>

      <ScrollRevealInit />

      {/* BANNER */}
      <section className="banner_sec relative overflow-hidden min-h-[700px] lg:min-h-[800px] w-full bg-[linear-gradient(90deg,_rgba(251,89,30,0.08)_0%,_rgba(229,239,255,0.26)_84%,_rgba(229,239,255,0)_100%)] z-1 flex flex-col">
        <Header />
        <div className="flex-1 flex items-start lg:items-center pt-8 lg:pt-0">
          <HomeBanner />
        </div>
      </section>


      {/* SERVICES */}
      <section className="services_sec py-16 md:py-32 px-4 md:px-12 lg:px-20 xl:px-40 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal-up text-center mb-12 md:mb-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[#F75126]/10 border border-[#F75126]/20 px-4 py-1.5 rounded-full mb-4">What We Offer</span>
            <h2 className="title2 text-3xl md:text-5xl">Our Premium <span className="relative inline-block">Services<SvgUnderline /></span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 stagger-child">
            {services.map((svc, i) => (
              <div key={i} className="svc-card reveal-up group relative bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(247,81,38,0.2)] hover:-translate-y-3 transition-all duration-500">
                <div className="relative h-52 md:h-60 w-full overflow-hidden bg-gray-50">
                  <Image src={svc.imagePath} alt={svc.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8 md:p-10">
                  <div className="svc-icon-box shadow-sm group-hover:shadow-[#F75126]/30 group-hover:shadow-lg transition-all duration-500"><svc.Icon /></div>
                  <h3 className="font-bold text-2xl text-[#272D4E] mb-4 group-hover:text-[#F75126] transition-colors leading-tight">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3 text-base">{svc.text}</p>
                  <Link href={svc.slug} className="group-btn inline-flex items-center gap-2 font-bold text-[#F75126] transition-all duration-300">
                    Explore Details <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-16 md:mt-24 reveal-up">
            <Link href="/services" className="pulse-btn inline-flex items-center gap-3 bg-[#F75126] text-white px-10 md:px-14 py-5 rounded-full font-bold text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all">
              View All Services <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div> */}
        </div>
      </section>

      {/* ABOUT */}
      <AboutUsComp />

      {/* HOW WE WORK */}
      <section className="py-20 md:py-32 px-4 md:px-12 lg:px-20 bg-gray-50/50 grid-bg relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal-up text-center mb-16 md:mb-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[#F75126]/10 border border-[#F75126]/20 px-4 py-1.5 rounded-full mb-4">Our Workflow</span>
            <h2 className="title2">A Proven <span className="relative inline-block">Process<SvgUnderline /></span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">We've refined our approach to ensure every project is delivered on time, within budget, and with exceptional quality.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 stagger-child relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

            {process.map((p, i) => (
              <div key={i} className="reveal-up group relative bg-white rounded-[32px] p-8 md:p-10 border-2 border-transparent hover:border-[#F75126]/20 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#F75126] flex items-center justify-center mb-8 shadow-[0_10px_25px_rgba(247,81,38,0.3)] group-hover:rotate-12 transition-transform duration-500">
                  <span className="text-2xl font-black text-white leading-none">{p.step}</span>
                </div>
                <h3 className="font-bold text-2xl text-[#272D4E] mb-4 group-hover:text-[#F75126] transition-colors leading-tight">{p.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-20 md:py-32 px-4 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="reveal-up text-center mb-16 md:mb-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[#F75126]/10 border border-[#F75126]/20 px-4 py-1.5 rounded-full mb-4">Our Edge</span>
            <h2 className="title2">Why Choose <span className="text-[#F75126]">Pure Design Hub?</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg">We combine creativity with technical excellence to deliver results that exceed expectations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 stagger-child">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>, label: "100% White Hat SEO", desc: "We strictly follow search engine guidelines to ensure long-term safety and sustainable organic rankings." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: "On-Time Delivery", desc: "Time is money. We manage projects efficiently to ensure every milestone is met exactly when promised." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, label: "Expert Digital Team", desc: "A curated team of designers, developers, and strategists working together to build your digital future." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>, label: "Affordable Pricing", desc: "Premium digital solutions shouldn't break the bank. We offer competitive rates for startups and enterprises." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>, label: "Dedicated Support", desc: "We're here for you 24/7. Your project is our priority, and we provide ongoing support even after launch." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>, label: "Result Oriented", desc: "We focus on the metrics that matter most to your business—traffic, leads, and conversion growth." },
            ].map((item, i) => (
              <div key={i} className="reveal-up group flex flex-col p-10 bg-white rounded-[40px] border-2 border-gray-100 hover:border-[#F75126]/30 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(247,81,38,0.18)] transition-all duration-700">
                <div className="w-16 h-16 rounded-2xl bg-[#F75126]/5 flex items-center justify-center mb-8 group-hover:bg-[#F75126] group-hover:rotate-6 transition-all duration-500">
                  <span className="w-8 h-8 text-[#F75126] group-hover:text-white transition-colors [&>svg]:w-full [&>svg]:h-full">{item.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-[#272D4E] mb-4 group-hover:text-[#F75126] transition-colors">{item.label}</h4>
                <p className="text-gray-500 leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <Portfolio />


      {/* CTA BANNER */}
      <section className="py-20 md:py-32 px-6 md:px-20 bg-[#272D4E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#F75126] rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F75126] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <span className="reveal-up inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.12)] border border-[rgba(247,81,38,.25)] px-4 py-1.5 rounded-full mb-6">Ready to Grow?</span>
          <h2 className="reveal-up text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">Let's Build Something <br className="hidden md:block" /> <span className="text-[#F75126]">Extraordinary</span> Together</h2>
          <p className="reveal-up text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">From websites to full digital marketing strategies — Pure Design Hub is your one-stop partner for online growth.</p>
          <div className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/get-quote" className="w-full sm:w-auto pulse-btn bg-[#F75126] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-3">
              Get a Free Quote <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-[#F75126] hover:text-[#F75126] transition-all inline-flex items-center justify-center gap-2">View Our Work</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial_sec relative overflow-hidden h-full w-full bg-[#fcfcfc] z-1 xl:px-20 lg:px-10 md:px-8 px-4 py-20">
        <div className="reveal-up text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[#F75126]/10 border border-[#F75126]/20 px-4 py-1.5 rounded-full mb-4">Client Reviews</span>
          <h3 className="title2 text-center">What people say about <span className="text-[#F75126]">Pure Design Hub</span></h3>
          <p className="text-gray-500 max-w-lg mx-auto mt-4 text-lg">Real stories from real clients who transformed their business with us.</p>
        </div>
        <main className="relative z-10 p-2">
          <TestimonialSlider />
        </main>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-20 bg-[#F9F9F9] grid-bg relative overflow-hidden">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal-up text-center mb-14">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#F75126] bg-[rgba(247,81,38,.08)] border border-[rgba(247,81,38,.18)] px-4 py-1.5 rounded-full mb-4">FAQ</span>
            <h2 className="title2">Got <span className="relative inline-block">Questions?<SvgUnderline /></span></h2>
            <p className="text text-gray-500 max-w-md mx-auto mt-3">Everything you need to know about working with Pure Design Hub.</p>
          </div>
          <div className="space-y-3 stagger-child">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal-up bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#1a1a2e] pr-4">{faq.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-[#F75126] rotate-180" : "bg-gray-100"}`}>
                    <svg className={`w-4 h-4 ${openFaq === i ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                {openFaq === i && <div className="faq-body px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal-up">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F75126] text-white px-8 py-4 rounded-full font-bold hover:shadow-[0_12px_30px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all">
              Talk to Us <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <ContactUs />


      <Footer />


    </>
  );
};

export default Home;
