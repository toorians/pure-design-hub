"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutImg1 from "@/public/assets/images/about_img1.png";
import AboutImg2 from "@/public/assets/images/about_img2.png";

gsap.registerPlugin(ScrollTrigger);

// Custom Counter Hook for Stats
function Counter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const target = parseInt(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: "power3.out",
            onUpdate: function () {
              setCount(Math.floor(this.targets()[0].val));
            },
          });
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function AboutUsComp({ isWhite = false }: { isWhite?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef1 = useRef<HTMLDivElement>(null);
  const imgRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Title with Skew and Blur
      gsap.from(".about-title", {
        opacity: 0,
        y: 100,
        skewY: 7,
        filter: "blur(10px)",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 90%",
        },
      });

      // 2. Parallax for Background Text (Smoother)
      gsap.to(".bg-parallax-text", {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // 3. Staggered Text Reveal
      gsap.from(".reveal-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 85%",
        },
      });

      // 4. Advanced Image Reveal (Clip Path + Scale)
      gsap.from(imgRef1.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.2,
        duration: 1.8,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: imgRef1.current,
          start: "top 80%",
        },
      });

      gsap.from(imgRef2.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        scale: 1.2,
        duration: 1.8,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: imgRef2.current,
          start: "top 80%",
        },
      });

      // 5. Magnetic Button Effect (Simulated via hover logic in JS if needed, but here simple GSAP for reveal)
      gsap.from(".philosophy-btn", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".philosophy-btn",
          start: "top 90%",
        },
      });

      // 6. Stats Grid Reveal
      gsap.from(".stat-item", {
        opacity: 0,
        scale: 0.5,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 90%",
        },
      });

      // 7. Subtle Float for images
      gsap.to([imgRef1.current, imgRef2.current], {
        y: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 1
      });

    }, containerRef);

    return () => ctx.revert();
  }, [isWhite]);

  return (
    <section ref={containerRef} className={`relative py-24 lg:py-40 overflow-hidden transition-colors duration-700 ${isWhite ? 'bg-white' : 'bg-[#050505]'}`}>
      {/* Huge Background Decorative Text */}
      <div className={`absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none z-0 ${isWhite ? 'opacity-[0.1]' : 'opacity-[0.02]'}`}>
        <span className={`bg-parallax-text text-[28vw] font-black uppercase block leading-none tracking-tighter ${isWhite ? 'text-gray-500' : 'text-white'}`}>
          CRAFTING FUTURE &nbsp; CRAFTING FUTURE
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-[150px] relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[3px] bg-[#39b54a] rounded-full"></div>
            <span className="text-[#39b54a] font-black uppercase tracking-[0.5em] text-xs">Innovation Hub</span>
          </div>
          <h2 className={`about-title text-5xl md:text-7xl lg:text-8xl font-black leading-[1] max-w-5xl tracking-tight ${isWhite ? 'text-[#1a1a1a]' : 'text-white'}`}>
            Merging <span className="text-[#39b54a] relative inline-block">Creativity <div className="absolute bottom-2 left-0 w-full h-2 bg-[#39b54a]/20 -z-1" /></span> <br/> with Tech Excellence.
          </h2>
        </div>

        {/* Top Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-40">
          <div ref={imgRef1} className="relative group order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={AboutImg1}
                alt="Vision"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className={`reveal-text text-3xl md:text-5xl font-black leading-tight ${isWhite ? 'text-[#1a1a1a]' : 'text-white'}`}>
              Driven by passion, <br/> defined by results.
            </h3>
            <p className={`reveal-text text-xl leading-relaxed font-medium ${isWhite ? 'text-gray-600' : 'text-gray-400'}`}>
              At Pure Design Hub, we don't just build websites; we engineer digital ecosystems. Every line of code and every pixel is placed with strategic intent to ensure your brand doesn't just exist online—it dominates.
            </p>
            <Link href="/about-us" className={`philosophy-btn inline-flex items-center gap-6 font-black group ${isWhite ? 'text-[#1a1a1a]' : 'text-white'}`}>
              <span className={`w-16 h-16 rounded-full border-2 flex items-center justify-center group-hover:bg-[#39b54a] group-hover:border-[#39b54a] group-hover:text-white group-hover:scale-110 transition-all duration-500 ${isWhite ? 'border-gray-200 shadow-lg' : 'border-white/20'}`}>
                <svg className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
              <span className="tracking-[0.2em] uppercase text-sm font-black border-b-2 border-transparent group-hover:border-[#39b54a] transition-all">Our Philosophy</span>
            </Link>
          </div>
        </div>

        {/* Stats Grid - Cleaner Look */}
        <div className={`stats-grid grid grid-cols-2 lg:grid-cols-4 gap-12 py-24 border-y-2 mb-40 ${isWhite ? 'border-gray-100' : 'border-white/10'}`}>
          {[
            { label: "Projects Delivered", val: "250", suffix: "+" },
            { label: "Global Clients", val: "120", suffix: "+" },
            { label: "Years Experience", val: "10", suffix: "+" },
            { label: "Awards Won", val: "15", suffix: "" },
          ].map((s, i) => (
            <div key={i} className="stat-item flex flex-col items-center lg:items-start space-y-2">
              <div className={`text-5xl lg:text-7xl font-black tracking-tighter ${isWhite ? 'text-[#1a1a1a]' : 'text-white'}`}>
                <Counter value={s.val} suffix={s.suffix} />
              </div>
              <div className="text-[#39b54a] text-xs font-black uppercase tracking-[0.3em]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h3 className={`reveal-text text-3xl md:text-5xl font-black leading-tight ${isWhite ? 'text-[#1a1a1a]' : 'text-white'}`}>
              From concept to creation, <br/> we make it real.
            </h3>
            <p className={`reveal-text text-xl leading-relaxed font-medium ${isWhite ? 'text-gray-600' : 'text-gray-400'}`}>
              We turn complex ideas into practical, high-performance digital solutions. Our team listens, plans, and builds with surgical precision, delivering results that businesses can trust for sustainable growth.
            </p>
            <div className="flex flex-col gap-6 pt-4">
              {["Custom Architecture", "High-Performance UX", "Scalable Tech Stacks"].map((t, i) => (
                <div key={i} className="reveal-text flex items-center gap-5 group cursor-default">
                  <div className="w-4 h-4 rounded-full border-2 border-[#39b54a] flex items-center justify-center group-hover:bg-[#39b54a] transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#39b54a] group-hover:bg-white" />
                  </div>
                  <span className={`font-black text-lg tracking-wide group-hover:text-[#39b54a] transition-colors ${isWhite ? 'text-[#1a1a1a]' : 'text-white'}`}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div ref={imgRef2} className="relative group order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src={AboutImg2}
                alt="Innovation"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

