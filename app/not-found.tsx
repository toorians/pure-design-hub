"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Header from "./component/header";
import Footer from "./component/footer";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text404Ref = useRef<HTMLHeadingElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (text404Ref.current) {
        const chars = text404Ref.current.querySelectorAll("span");
        tl.fromTo(
          chars,
          { y: 120, opacity: 0, rotate: -15 },
          { y: 0, opacity: 1, rotate: 0, duration: 1, stagger: 0.15 }
        );
      }

      if (messageRef.current) {
        tl.fromTo(
          messageRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3"
        );
      }

      if (btnRef.current) {
        tl.fromTo(
          btnRef.current,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6 },
          "-=0.2"
        );
      }

      if (shapesRef.current) {
        const shapes = shapesRef.current.querySelectorAll(".float-shape");
        shapes.forEach((shape, i) => {
          gsap.to(shape, {
            y: i % 2 === 0 ? -25 : 25,
            x: i % 3 === 0 ? -15 : 15,
            rotation: i % 2 === 0 ? -10 : 10,
            duration: 3 + (i * 0.5),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Header />
      <main className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        <div
          ref={shapesRef}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="float-shape absolute top-[18%] left-[12%] w-20 h-20 rounded-full border-2 border-[var(--brand-primary)] opacity-20" />
          <div className="float-shape absolute top-[28%] right-[18%] w-32 h-32 rounded-full bg-[var(--brand-primary)] opacity-[0.06]" />
          <div className="float-shape absolute bottom-[22%] left-[22%] w-16 h-16 rounded-lg border-2 border-[var(--brand-accent)] opacity-20 rotate-45" />
          <div className="float-shape absolute bottom-[32%] right-[12%] w-24 h-24 rounded-full border-2 border-[var(--brand-primary)] opacity-[0.08]" />
          <div className="float-shape absolute top-[55%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-[30vmax] h-[30vmax] rounded-full bg-[var(--brand-primary)] opacity-[0.03]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1
            ref={text404Ref}
            className="overflow-hidden text-[clamp(6rem,20vw,14rem)] font-bold leading-none tracking-tighter mb-6"
          >
            <span className="inline-block text-[var(--brand-primary)]">4</span>
            <span className="inline-block text-[var(--brand-accent)]">0</span>
            <span className="inline-block text-[var(--brand-primary)]">4</span>
          </h1>

          <div ref={messageRef}>
            <p className="text-[clamp(1.25rem,3vw,2rem)] font-bold text-[var(--foreground)] mb-2">
              Oops! Page not found
            </p>
            <p className="text-[var(--muted)] max-w-md mx-auto text-lg">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          <div ref={btnRef} className="mt-10">
            <Link
              href="/"
              className="globalBtn inline-flex items-center gap-3 bg-[var(--brand-primary)] text-white hover:brightness-110 transition-all duration-300 shadow-lg shadow-[var(--brand-primary)]/25 group"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
