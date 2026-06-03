"use client";
import Image from "next/image";
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Circle from "@/public/assets/images/circle.png";
import TestimonialImg1 from "@/public/assets/images/testimonial_img1.png";
import TestimonialImg2 from "@/public/assets/images/testimonial_img2.png";
import TestimonialImg3 from "@/public/assets/images/testimonial_img3.png";
import TestimonialImg4 from "@/public/assets/images/testimonial_img4.png";
import TestimonialImg5 from "@/public/assets/images/testimonial_img5.png";
import TestimonialImg6 from "@/public/assets/images/testimonial_img6.png";
import FaqImg from "@/public/assets/images/futuristic_faq_illustration_1778270430605.png";
import Header from "../component/header";
import HomeBanner from "../component/homeBanner";
import Footer from "../component/footer";
import ContactUs from "../component/contactUs";
import AboutUsComp from "../component/AboutUsComp";
import PricingSection from "../component/web-development-pricing";
import TechStack from "../component/tech-stack";
import Portfolio from "../component/portfolioGallery";





import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Deterministic [0,1) — same on server and client (unlike Math.random() during SSR). */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

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
      fill="none" stroke="var(--brand-primary)" strokeWidth="6" strokeLinecap="round" className="animated-path" />
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
  { id: 1, name: "Sharon D. Cramer", role: "CEO", company: "FreshCart Global", rating: 5, text: "Pure Design Hub completely transformed our online presence. Our revenue increased by 340% within three months of the redesign. Absolutely exceptional work from start to finish!", avatarImg: TestimonialImg1, initials: "MT", avatarBg: "bg-[color:var(--brand-primary)]", showPlayIcon: true },
  { id: 2, name: "Katherine A. Clark", role: "Founder", company: "WellnessFirst", rating: 5, text: "The mobile app they built for us was delivered ahead of schedule and exceeded all expectations. The UI is gorgeous and our users absolutely love using it every single day.", avatarImg: TestimonialImg2, initials: "AK", avatarBg: "bg-[#272D4E]", showPlayIcon: false },
  { id: 3, name: "Mia Wu", role: "Marketing Director", company: "NexusLabs", rating: 5, text: "Their SEO strategy brought us from page 5 to position 1 for our main keywords in under 4 months. Pure Design Hub is the real deal — worth every single penny we invested.", avatarImg: TestimonialImg3, initials: "JW", avatarBg: "bg-[color:var(--brand-primary)]", showPlayIcon: true },
  { id: 4, name: "Michael Thompson", role: "COO", company: "BuildFlow Inc.", rating: 5, text: "From branding to social media management, they handled everything flawlessly. Our brand recognition has skyrocketed and our engagement metrics are through the roof. Incredible team!", avatarImg: TestimonialImg4, initials: "SM", avatarBg: "bg-[#272D4E]", showPlayIcon: false },
  { id: 5, name: "David Chen", role: "Product Lead", company: "CloudPath Systems", rating: 5, text: "Tight deadline, complex product. Pure Design Hub delivered a world-class app on time, under budget, and with zero compromises on quality. I would not work with anyone else.", avatarImg: TestimonialImg5, initials: "DC", avatarBg: "bg-[color:var(--brand-primary)]", showPlayIcon: true },
  { id: 6, name: "James Smith", role: "Growth Director", company: "VantaGroup", rating: 5, text: "The content strategy and SEO work was truly transformational. Organic traffic up 280% in 6 months. These people genuinely understand digital growth like no one else.", avatarImg: TestimonialImg6, initials: "ZS", avatarBg: "bg-[#272D4E]", showPlayIcon: false },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < count ? "text-[color:var(--brand-primary)]" : "text-gray-200"}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* LEFT content  |  RIGHT portrait video */
function TestimonialSlider(): React.ReactElement {

  const [current, setCurrent] = useState(6); // Start in the middle set of clones
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(2); // 2 on lg+, 1 on mobile

  const originalItems = testimonialData;
  const clonedItems = [...originalItems, ...originalItems, ...originalItems];
  const totalItems = clonedItems.length;

  // Keep transform math deterministic (no render-time window access)
  useEffect(() => {
    const update = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-play
  useEffect(() => {
    if (isDragging) return;
    const interval = window.setInterval(() => {
      setTransitionEnabled((t) => t); // no-op to keep logic consistent
      setCurrent((c) => c + 1);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [isDragging]);

  // Infinite loop reset (rAF-based, but cancelable to avoid runtime Node mismatch crashes)
  const pendingJumpRafRef = useRef<number | null>(null);

  useEffect(() => {
    const per = originalItems.length;
    const isResetZone = current <= 2 || current >= totalItems - 4;

    // If dragging, never teleport.
    if (isDragging) return undefined;
    if (!isResetZone) return undefined;

    const nextCurrent = current <= 2 ? current + per : current - per;

    // Cancel any scheduled jump.
    if (pendingJumpRafRef.current != null) {
      cancelAnimationFrame(pendingJumpRafRef.current);
      pendingJumpRafRef.current = null;
    }

    setTransitionEnabled(false);

    // Jump on next frame.
    pendingJumpRafRef.current = requestAnimationFrame(() => {
      pendingJumpRafRef.current = null;
      setCurrent(nextCurrent);
      // Re-enable transition right after.
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    });

    return () => {
      if (pendingJumpRafRef.current != null) {
        cancelAnimationFrame(pendingJumpRafRef.current);
        pendingJumpRafRef.current = null;
      }
    };
  }, [current, totalItems, originalItems.length, isDragging]);




  const stepPct = 100 / cardsPerView;

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
    const walk = x - startX;
    setDragOffset(walk);
  };

  const onDragEnd = () => {
    const threshold = 100;
    const shouldNext = dragOffset < -threshold;
    const shouldPrev = dragOffset > threshold;

    setIsDragging(false);
    setDragOffset(0);

    // Decide navigation first, then re-enable transition.
    if (shouldNext) handleNext();
    else if (shouldPrev) handlePrev();

    requestAnimationFrame(() => setTransitionEnabled(true));
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
            transform: `translateX(calc(-${current * stepPct}% + ${dragOffset}px))`,
            willChange: transitionEnabled ? "transform" : "auto",
          }}
        >
          {clonedItems.map((item, idx) => (
              <div key={idx} className="w-full md:w-1/2 flex-shrink-0 px-3">
              <div
                className="flex flex-col lg:flex-row rounded-[24px] overflow-hidden border-2 border-gray-100 bg-white transition-all duration-500 group min-h-[400px] lg:min-h-[480px]"
              >
                {/* ── LEFT CONTENT ── */}
                <div className="flex-1 flex flex-col justify-between p-8 md:p-10 lg:p-12 relative">
                  <span className="absolute top-6 right-8 text-[8rem] font-black text-[color:color-mix(in_srgb,var(--brand-primary)_5%,transparent)] select-none italic">
                    "
                  </span>

                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[color:var(--brand-primary)] bg-[color:color-mix(in_srgb,var(--brand-primary)_8%,transparent)] border border-[color:color-mix(in_srgb,var(--brand-primary)_20%,transparent)] px-4 py-2 rounded-full mb-8">
                      Client Success Story
                    </span>

                    <div className="mb-6">
                      <StarRating count={item.rating} />
                    </div>

                    <blockquote className="text-[#272D4E] mb-10 text-xl font-medium leading-relaxed italic">
                      "{item.text}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${item.avatarBg} flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}
                      >
                        <span className="text-sm font-black text-white uppercase tracking-tighter">
                          {item.initials}
                        </span>
                      </div>

                      <div>
                        <div className="font-bold text-[#272D4E] text-lg tracking-tight">{item.name}</div>
                        <div className="text-sm font-bold text-[color:var(--brand-primary)]">
                          {item.role} @ {item.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── RIGHT VIDEO ── */}
                <div className="w-full lg:w-[320px] h-[300px] lg:h-auto relative bg-[#0B0D17] flex items-center justify-center p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[color:color-mix(in_srgb,var(--brand-primary)_20%,transparent)] to-transparent opacity-30" />

                  <div className="relative w-full max-w-[150px] lg:max-w-[180px] group/vid" style={{ aspectRatio: "9/16" }}>
                    <div className="absolute inset-0 rounded-[22px] lg:rounded-[24px] overflow-hidden shadow-2xl border-2 border-white/10 group-hover/vid:border-[color:color-mix(in_srgb,var(--brand-primary)_50%,transparent)] transition-colors duration-500">
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
                          <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[color:var(--brand-primary)] rounded-full flex items-center justify-center shadow-[0_0_30px_color-mix(in_srgb,var(--brand-primary)_50%,transparent)] group-hover/vid:scale-110 transition-transform duration-500 relative">
                            <div className="absolute inset-0 rounded-full bg-[color:var(--brand-primary)] animate-ping opacity-20" />
                            <svg
                              className="w-6 h-6 lg:w-7 lg:h-7 text-white ml-1 relative z-10"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute -bottom-6 lg:-bottom-4 left-1/2 -translate-x-1/2 w-full text-center">
                          <span className="text-[9px] lg:text-[10px] font-black text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">
                            Client Story
                          </span>
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
              className={`h-2 rounded-full transition-all duration-500 ${
                current % originalItems.length === i
                  ? "w-10 bg-[color:var(--brand-primary)]"
                  : "w-2 bg-[color:color-mix(in_srgb,var(--brand-primary)_20%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_40%,transparent)]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* PREV */}
          <button
            onClick={handlePrev}
            className="w-14 h-14 rounded-full border-2 border-[color:color-mix(in_srgb,var(--brand-primary)_10%,transparent)] flex items-center justify-center hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white text-[color:var(--brand-primary)] transition-all duration-500 group"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* NEXT */}
          <button
            onClick={handleNext}
            className="w-14 h-14 rounded-full border-2 border-[color:color-mix(in_srgb,var(--brand-primary)_10%,transparent)] flex items-center justify-center hover:border-[color:var(--brand-primary)] hover:bg-[color:var(--brand-primary)] hover:text-white text-[color:var(--brand-primary)] transition-all duration-500 group"
          >
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
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



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-parallax-svc", {
        xPercent: -30,
        scrollTrigger: {
          trigger: ".services_sec",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const services = [
    { title: "Premium Web Development", text: "Crafting high-performance, scalable websites using modern frameworks like Next.js and React. We focus on speed, security, and seamless user experiences.", imagePath: "/assets/images/service1.png", slug: "/services/web-development", Icon: IcWeb },
    { title: "Custom App Solutions", text: "Developing native and cross-platform mobile applications that offer fluid performance and intuitive interfaces to keep your users engaged.", imagePath: "/assets/images/service2.png", slug: "/services/app-development", Icon: IcApp },
    { title: "Strategic Brand Identity", text: "Beyond just logos — we build comprehensive brand ecosystems including typography, color theory, and visual guidelines that define your market presence.", imagePath: "/assets/images/branding_body.png", slug: "/services/branding-design", Icon: IcBranding },
    { title: "SEO & Organic Growth", text: "Mastering search engine algorithms to drive high-quality organic traffic. Our data-driven approach ensures long-term visibility and ROI.", imagePath: "/assets/images/service5.png", slug: "/services/seo-services", Icon: IcSEO },
    { title: "Social Media Strategy", text: "Elevating your brand's voice across social platforms with data-backed content strategies that build community and drive conversions.", imagePath: "/assets/images/service4.png", slug: "/services/social-media-marketing", Icon: IcSocial },
    { title: "Content Architecture", text: "Strategic storytelling and technical copy that resonates with your audience while being fully optimized for search engine performance.", imagePath: "/assets/images/service3.png", slug: "/services/content-writing", Icon: IcContent },
  ];

  useLayoutEffect(() => {
    const ctaEl = document.querySelector(".cta-sec");
    const ctaSec = ctaEl instanceof HTMLElement ? ctaEl : null;
    let handleMouseMove: ((e: MouseEvent) => void) | undefined;
    let handleMouseLeave: (() => void) | undefined;

    const ctx = gsap.context(() => {
      const ctaHeader = document.querySelector(".cta-magnetic-text");
      if (ctaHeader) {
        gsap.fromTo(
          ctaHeader,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".cta-sec",
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      gsap.to(".cta-particle", {
        x: "random(-60, 60)",
        y: "random(-60, 60)",
        duration: "random(6, 12)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });

      if (ctaSec) {
        handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const rect = ctaSec.getBoundingClientRect();
          const x = clientX - rect.left;
          const y = clientY - rect.top;

          gsap.to(".cta-particle", {
            x: (i) => (i % 2 === 0 ? (x - rect.width / 2) * 0.05 : (x - rect.width / 2) * -0.05),
            y: (i) => (i % 2 === 0 ? (y - rect.height / 2) * 0.05 : (y - rect.height / 2) * -0.05),
            duration: 0.8,
            ease: "power1.out",
            overwrite: true,
          });
        };

        handleMouseLeave = () => {
          gsap.to(".cta-particle", {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
            overwrite: true,
          });
        };

        ctaSec.addEventListener("mousemove", handleMouseMove);
        ctaSec.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      if (ctaSec && handleMouseMove && handleMouseLeave) {
        ctaSec.removeEventListener("mousemove", handleMouseMove);
        ctaSec.removeEventListener("mouseleave", handleMouseLeave);
      }
      ctx.revert();
    };
  }, []);

  // --- HORIZONTAL PROCESS SCROLL (pinned; cards use containerAnimation so they track horizontal motion — avoids jerk) ---
  useLayoutEffect(() => {
    const root = document.querySelector(".process-trigger");
    if (!root) return;

    const ctx = gsap.context(() => {
      const wrap = root.querySelector(".process-wrapper");
      if (!(wrap instanceof HTMLElement)) return;

      const cards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".process-card"));
      if (cards.length === 0) return;

      /* Target: last card's left edge at 15% viewport so ~87%+ of the card is visible
         when the section unpins — no more half-cut card. */
      const LAST_CARD_TARGET = 0.15;

      const totalTravel = () => {
        const wrapRect = wrap.getBoundingClientRect();
        const cardRect = cards[cards.length - 1].getBoundingClientRect();
        const leftOffset = cardRect.left - wrapRect.left;
        return Math.max(30, leftOffset - window.innerWidth * LAST_CARD_TARGET);
      };

      const scrollEnd = () => "+=" + totalTravel();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: scrollEnd,
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          id: "home-process-hscroll",
        },
      });

      tl.to(
        wrap,
        {
          x: () => -totalTravel(),
          ease: "none",
          duration: 1,
        },
        0
      );

      /* Line fill: sync end to same LAST_CARD_TARGET so progress bar reaches 100%
         exactly when the section unpins — no empty bar after last step. */
      gsap.to(".process-line-fill", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: cards[0],
          containerAnimation: tl,
          start: "left 95%",
          endTrigger: cards[cards.length - 1],
          end: `left ${LAST_CARD_TARGET * 100}%`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      /* Individual card animations (lift + bg number + card line) */
      cards.forEach((card) => {
        const cardBody = card.querySelector(".process-card-body");
        const bgNumber = card.querySelector(".process-bg-number");
        const line = card.querySelector(".process-card-line");
        if (!cardBody || !bgNumber || !line) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 88%",
              end: "left 42%",
              scrub: true,
            },
          })
          .to(cardBody, {
            y: -28,
            boxShadow: "0 48px 120px -28px rgba(57,181,74,0.28)",
            duration: 1,
          })
          .to(bgNumber, { opacity: 0.08, color: "#39b54a", duration: 1 }, 0)
          .to(line, { width: "100%", backgroundColor: "#39b54a", duration: 1 }, 0);
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, root);

    /* Dynamically size the line track to the card content area (not the spacer).
       Run once on mount and again on resize so it stays accurate. */
    const updateLineTrack = () => {
      const wrap = root.querySelector<HTMLElement>(".process-wrapper");
      const lineTrack = root.querySelector(".process-line-track");
      const allCards = root.querySelectorAll<HTMLElement>(".process-card");
      if (!wrap || !lineTrack || allCards.length < 2) return;
      const wrapRect = wrap.getBoundingClientRect();
      const firstRect = allCards[0].getBoundingClientRect();
      const lastRect = allCards[allCards.length - 1].getBoundingClientRect();
      gsap.set(lineTrack, {
        left: firstRect.left - wrapRect.left,
        width: lastRect.right - firstRect.left,
      });
    };
    updateLineTrack();

    const onResize = () => {
      updateLineTrack();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

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
        .shimmer-badge{background:linear-gradient(90deg,color-mix(in srgb,var(--brand-primary) 15%,transparent) 0%,color-mix(in srgb,var(--brand-primary) 35%,transparent) 40%,color-mix(in srgb,var(--brand-primary) 15%,transparent) 100%);background-size:200% auto;animation:shimmer 3s linear infinite}

        @keyframes pulseRing{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--brand-primary) 45%,transparent)}70%{box-shadow:0 0 0 14px transparent}100%{box-shadow:0 0 0 0 transparent}}
        .pulse-btn{animation:pulseRing 2.2s ease infinite}

        .svc-icon-box{width:52px;height:52px;border-radius:14px;background:color-mix(in srgb,var(--brand-primary) 7%,transparent);display:flex;align-items:center;justify-content:center;margin-bottom:18px;transition:background .3s ease,transform .35s cubic-bezier(.34,1.56,.64,1)}
        .svc-icon-box svg{width:24px;height:24px;color:var(--brand-primary);transition:color .3s ease}
        .svc-card:hover .svc-icon-box{background:var(--brand-primary);transform:scale(1.08) rotate(-4deg)}
        .svc-card:hover .svc-icon-box svg{color:#fff}

        .grid-bg::before{content:'';position:absolute;inset:0;background-image:linear-gradient(color-mix(in srgb,var(--brand-primary) 3%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--brand-primary) 3%,transparent) 1px,transparent 1px);background-size:60px 60px;pointer-events:none}

        @keyframes faqOpen{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
        .faq-body{animation:faqOpen .25s ease forwards}

        /* ══ GLOBAL TRANSITIONS & ANIMATIONS ══ */
        .reveal-up { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal-up.in-view { opacity: 1; transform: translateY(0); }

        .stagger-child > * { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
        .stagger-child.in-view > * { opacity: 1; transform: translateY(0); }
        .stagger-child.in-view > *:nth-child(1) { transition-delay: 0.1s; }
        .stagger-child.in-view > *:nth-child(2) { transition-delay: 0.2s; }
        .stagger-child.in-view > *:nth-child(3) { transition-delay: 0.3s; }
        .stagger-child.in-view > *:nth-child(4) { transition-delay: 0.4s; }
        .stagger-child.in-view > *:nth-child(5) { transition-delay: 0.5s; }
        .stagger-child.in-view > *:nth-child(6) { transition-delay: 0.6s; }

        /* ══ CARD & HOVER EFFECTS ══ */
        .svc-card, .port-card {
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .svc-card:hover, .port-card:hover {
          transform: translateY(-12px) scale(1.01);
          box-shadow: 0 30px 60px -15px color-mix(in srgb,var(--brand-primary) 25%,transparent);
        }

        .svc-icon-box {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .group:hover .svc-icon-box {
          transform: scale(1.15) rotate(10deg);
          background-color: var(--brand-primary);
          color: white;
        }

        /* ══ BUTTONS & LINKS ══ */
        .pulse-btn { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; overflow: hidden; }
        .pulse-btn:hover { transform: scale(1.05) translateY(-3px); box-shadow: 0 15px 35px color-mix(in srgb,var(--brand-primary) 40%,transparent); }
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
        .banner-parallax:hover { transform: scale(1.08) translateY(-15px) rotate(3deg); filter: drop-shadow(0 25px 50px color-mix(in srgb,var(--brand-primary) 35%,transparent)); }

        .banner_sec:hover .banner-glow { opacity: 0.8; transform: scale(1.3); filter: blur(70px); }

        .headline-reveal { animation: text-reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .text-gradient-shimmer {
          background: linear-gradient(90deg, var(--brand-primary), color-mix(in srgb,var(--brand-accent) 55%, #fff), var(--brand-primary));
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
          text-shadow: 0 10px 30px color-mix(in srgb,var(--brand-primary) 20%,transparent);
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
        @keyframes pulse-line {
          0% { left: -10%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 110%; opacity: 0; }
        }
        .process-line-pulse {
          position: absolute;
          top: 0;
          height: 100%;
          width: 150px;
          background: linear-gradient(90deg, transparent, #39b54a, transparent);
          filter: blur(4px);
          animation: pulse-line 2s infinite linear;
        }
        .process-card-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle at center, rgba(57,181,74,0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }
        .process-card:hover .process-card-glow { opacity: 1; }
      `}</style>

      <ScrollRevealInit />

      {/* BANNER */}
      <section className="banner_sec relative overflow-hidden min-h-[700px] lg:min-h-[800px] w-full bg-[#0a0a0a] z-1 flex flex-col">
        <Header />
        <div className="flex-1 flex items-start lg:items-center pt-8 lg:pt-0">
          <HomeBanner />
        </div>
      </section>

      {/* ABOUT - NOW SECOND (WHITE THEME) */}
      <AboutUsComp isWhite={true} />

      {/* SERVICES - NOW THIRD (BLACK THEME) */}
      <section className="services_sec py-16 md:py-32 px-4 md:px-12 lg:px-[150px] bg-[#0a0a0a] relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-20 right-0 pointer-events-none opacity-[0.02] select-none z-0">
          <span className="bg-parallax-svc text-[20vw] font-black uppercase text-white block leading-none">SERVICES</span>
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="reveal-up text-center mb-12 md:mb-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#39b54a] bg-[#39b54a]/10 border border-[#39b54a]/20 px-4 py-1.5 rounded-full mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">Our Premium <span className="text-[#39b54a]">Services</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 stagger-child reveal-up">
  {services.map((svc, i) => (
    <Link key={i} href={svc.slug}>
      <div className="svc-card group relative bg-[#111111] rounded-[24px] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#39b54a]/30 cursor-pointer h-full">
        <div className="relative h-52 md:h-60 w-full overflow-hidden bg-white/5">
          <Image
            src={svc.imagePath}
            alt={svc.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="p-8 md:p-10">
          <div className="w-12 h-12 rounded-xl bg-[#39b54a]/10 flex items-center justify-center mb-6 text-[#39b54a] group-hover:bg-[#39b54a] group-hover:text-white transition-all duration-500">
            <svc.Icon />
          </div>

          <h3 className="font-black text-2xl text-white mb-4 group-hover:text-[#39b54a] transition-colors">
            {svc.title}
          </h3>

          <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3 text-base">
            {svc.text}
          </p>

          <span className="inline-flex items-center gap-2 font-bold text-[#39b54a] group-hover:gap-4 transition-all">
            Learn More
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>

      {/* HOW WE WORK (HORIZONTAL GSAP PINNED SECTION) */}
      <section className="process-trigger relative bg-white overflow-hidden pb-20 md:pb-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#39b54a 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="min-h-screen flex flex-col justify-center py-20 relative">
          <div className="px-6 md:px-12 lg:px-[150px] mb-24 relative z-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.4em] uppercase text-[#39b54a] bg-[#39b54a]/10 border border-[#39b54a]/20 px-6 py-2 rounded-full mb-8">Our Workflow</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1a1a1a] tracking-tighter leading-none">
              A Proven <br className="md:hidden" /> <span className="text-[#39b54a]">Process</span>
            </h2>
          </div>

          <div className="process-wrapper flex items-start px-6 md:px-12 lg:px-[150px] relative z-10 will-change-transform">
            {/* The Connecting Line */}
            <div className="process-line-track absolute top-[120px] h-[6px] bg-gray-100/40 z-0 rounded-full overflow-hidden">
              <div className="process-line-fill absolute inset-0 bg-[#39b54a] scale-x-0 origin-left shadow-[0_0_20px_#39b54a]" />
              <div className="process-line-pulse" />
            </div>

            {process.map((p, i) => (
              <div key={i} className="process-card flex-shrink-0 w-[350px] md:w-[550px] mr-24 lg:mr-48 relative h-[470px] md:h-[500px]">
                <div className="process-card-glow" />

                {/* Modern Unified Card Design - Now triggered by scroll */}
                <div className="process-card-body relative z-10 bg-white rounded-[28px] p-10 md:p-14 transition-all duration-700 overflow-hidden h-full">
                  {/* Large Background Step Number */}
                  <div className="process-bg-number absolute top-6 right-6 text-[7.5rem] md:text-[9.5rem] font-black text-gray-300 opacity-20 italic select-none transition-all duration-700 z-0 pointer-events-none">
                    {p.step}
                  </div>

                  {/* Content Area */}
                  <div className="relative z-20">
                    <h3 className="font-black text-3xl md:text-5xl text-[#1a1a1a] mb-6 transition-all duration-700 leading-tight">
                      {p.title}
                    </h3>
                    <div className="process-card-line w-20 h-2 bg-gray-100 mb-10 transition-all duration-700 rounded-full" />
                    <p className="text-gray-500 leading-relaxed text-xl md:text-2xl font-medium opacity-80 transition-all duration-700">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* End of Line Cap */}
            <div className="process-end-spacer flex-shrink-0 w-[min(500px,20vw)] md:w-[800px]" />
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US (BLACK THEME) */}
      <section className="relative z-[5] isolate bg-[#0a0a0a] overflow-visible py-20 md:py-32 pb-28 md:pb-40 px-4 md:px-12 lg:px-[150px]">
        <div className="max-w-[1400px] mx-auto relative z-[5]">
          <div className="reveal-up text-center mb-16 md:mb-20">
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#39b54a] bg-[#39b54a]/10 border border-[#39b54a]/20 px-4 py-1.5 rounded-full mb-4">Our Edge</span>
            <h2 className="text-3xl md:text-5xl font-black text-white">Why Choose <span className="text-[#39b54a]">Pure Design Hub?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">We combine creativity with technical excellence to deliver results that exceed expectations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-x-10 lg:gap-y-12 items-start">
            {[
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>, label: "100% White Hat SEO", desc: "We strictly follow search engine guidelines to ensure long-term safety and sustainable organic rankings." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>, label: "On-Time Delivery", desc: "Time is money. We manage projects efficiently to ensure every milestone is met exactly when promised." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, label: "Expert Digital Team", desc: "A curated team of designers, developers, and strategists working together to build your digital future." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>, label: "Affordable Pricing", desc: "Premium digital solutions shouldn't break the bank. We offer competitive rates for startups and enterprises." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>, label: "Dedicated Support", desc: "We're here for you 24/7. Your project is our priority, and we provide ongoing support even after launch." },
              { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>, label: "Result Oriented", desc: "We focus on the metrics that matter most to your business—traffic, leads, and conversion growth." },
            ].map((item, i) => (
              <div key={i} className="group flex flex-col p-10 bg-[#111111] rounded-[24px] border border-white/5 hover:border-[#39b54a]/30 hover:-translate-y-2 transition-all duration-700">
                <div className="w-16 h-16 rounded-2xl bg-[#39b54a]/10 flex items-center justify-center mb-8 group-hover:bg-[#39b54a] transition-all duration-500">
                  <span className="w-8 h-8 text-[#39b54a] group-hover:text-white transition-colors [&>svg]:w-full [&>svg]:h-full">{item.icon}</span>
                </div>
                <h4 className="text-2xl font-black text-white mb-4 group-hover:text-[#39b54a] transition-colors">{item.label}</h4>
                <p className="text-gray-400 leading-relaxed text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <div className="relative z-[1]">
        <Portfolio isWhite={true} />
      </div>


      {/* CTA BANNER (BLACK THEME) */}
      <section className="cta-sec py-24 md:py-44 px-6 md:px-20 bg-[#050505] relative overflow-hidden">
        {/* Optimized Particles Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(500)].map((_, i) => {
            const rand = mulberry32(i * 7919 + 1337);
            return (
              <div
                key={i}
                className="cta-particle absolute w-1 h-1 bg-[#39b54a]/30 rounded-full will-change-transform"
                style={{
                  top: `${rand() * 100}%`,
                  left: `${rand() * 100}%`,
                }}
              />
            );
          })}
          {/* Large Ambient Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#39b54a]/10 rounded-full blur-[180px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#39b54a]/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <div>
            <span className="inline-block text-[11px] font-black tracking-[0.4em] uppercase text-[#39b54a] bg-[#39b54a]/10 border border-[#39b54a]/20 px-8 py-2.5 rounded-full mb-10">
              Future-Proof Your Brand
            </span>
            <h2 className="cta-magnetic-text text-4xl md:text-6xl lg:text-8xl font-black text-white mb-10 leading-[1] tracking-tighter">
              Ready to Build Your <br className="hidden md:block" />
              <span className="text-[#39b54a] italic text-3xl md:text-5xl lg:text-7xl">Digital Empire?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto mb-20 leading-relaxed font-medium">
              We don't just build projects; we engineer market leaders. Partner with Pure Design Hub to dominate your industry with high-end tech and strategic design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 reveal-up">
            <Link href="/get-quote" className="group relative w-full sm:w-auto">
              <div className="absolute -inset-1 bg-[#39b54a] rounded-full blur-[15px] opacity-40 group-hover:opacity-80 transition duration-700"></div>
              <div className="relative bg-[#39b54a] text-white px-10 py-5 rounded-full font-black text-xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-xl">
                Start the Mission
                <svg className="w-7 h-7 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </Link>

            <Link href="/portfolio" className="w-full sm:w-auto group border-2 border-white/10 text-white px-10 py-5 rounded-full font-black text-xl hover:border-[#39b54a] hover:text-[#39b54a] transition-all flex items-center justify-center gap-4 backdrop-blur-sm">
              View Portfolios
              <div className="w-2.5 h-2.5 rounded-full bg-[#39b54a] scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (WHITE THEME) */}
      <section className="testimonial_sec relative overflow-hidden w-full bg-white z-1 xl:px-[150px] lg:px-10 md:px-8 px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[color:var(--brand-primary)] bg-[color:color-mix(in_srgb,var(--brand-primary)_10%,transparent)] border border-[color:color-mix(in_srgb,var(--brand-primary)_20%,transparent)] px-4 py-1.5 rounded-full mb-4">Client Reviews</span>
          <h3 className="text-3xl md:text-5xl font-black text-center text-[#272D4E]">What people say about <span className="text-[#39b54a]">Pure Design Hub</span></h3>
          <p className="text-gray-500 max-w-lg mx-auto mt-4 text-lg">Real stories from real clients who transformed their business with us.</p>
        </div>
        <main className="relative z-10 p-2">
          <TestimonialSlider />
        </main>
      </section>

      {/* FAQ (BLACK THEME) */}
      <section className="py-20 md:py-32 px-4 md:px-[150px] bg-[#0a0a0a] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#39b54a]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-14">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#39b54a] bg-[#39b54a]/10 border border-[#39b54a]/20 px-4 py-1.5 rounded-full mb-4">Common Inquiries</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white">Got <span className="text-[#39b54a]">Questions?</span></h2>
                <p className="text-gray-400 max-w-md mt-6 text-lg">Everything you need to know about working with Pure Design Hub and our digital processes.</p>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-[#111111] rounded-2xl border border-white/5 overflow-hidden transition-all hover:border-[#39b54a]/20">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-6 text-left hover:bg-white/5 transition-colors">
                      <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-[#39b54a] rotate-180" : "bg-white/5"}`}>
                        <svg className={`w-4 h-4 ${openFaq === i ? "text-white" : "text-gray-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </button>
                    {openFaq === i && <div className="px-6 pb-6 text-gray-400 text-base leading-relaxed border-t border-white/5 pt-4">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className="absolute inset-0 bg-[#39b54a]/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative aspect-square overflow-hidden rounded-[24px] bg-white/5">
                <Image
                  src={FaqImg}
                  alt="FAQ Illustration"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUs />


      <Footer />


    </>
  );
};

export default Home;
