"use client";

import React from "react";
import Image from "next/image";
import Header from "../component/header";
import Accordion from "../component/Accordion";
import ContactUs from "../component/contactUs";
import Footer from "../component/footer";
import Circle from "@/public/assets/images/circle.png";

const faqItems = [
  {
    id: 1,
    question: "What services does PureDesignHub offer?",
    answer:
      "We provide SEO, web development, app development, branding, logo design, content writing, and social media marketing.",
  },
  {
    id: 2,
    question: "How can SEO help my business?",
    answer:
      "SEO improves your website’s visibility on search engines, drives targeted traffic, and increases leads or sales."
  },
  {
    id: 3,
    question: "Do you build custom websites?",
    answer:
      "Yes, we design responsive, user-friendly websites tailored to your business needs and audience.",
  },
  {
    id: 4,
    question: "Can you develop mobile apps for my business?",
    answer:
      "Absolutely. We create apps for iOS and Android that enhance user experience and engagement.",
  },
  {
    id: 5,
    question: "How do you handle branding and logo design?",
    answer:
      "We analyze your business, target audience, and market to create a consistent and memorable brand identity.",
  },
  {
    id: 6,
    question: "What types of content writing do you offer?",
    answer:
      "We create website content, blogs, articles, product descriptions, and other materials that engage your audience.",
  },
  {
    id: 7,
    question: "Can you manage my social media accounts?",
    answer:
      "Yes, we offer social media marketing, including strategy, posting, and engagement to grow your online presence.",
  },
  {
    id: 8,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope, but we provide clear deadlines and regular updates throughout.",
  },
  {
    id: 9,
    question: "Do you offer ongoing SEO and digital marketing services?",
    answer:
      "Yes, we provide continuous SEO, content, and social media services to maintain and grow your online presence.",
  },
  {
    id: 10,
    question: "How do I get started with PureDesignHub?",
    answer:
      "Simply contact us via our website, and we’ll discuss your needs and create a custom plan.",
  },
  {
    id: 11,
    question: "Do you work with businesses outside the U.S.?",
    answer:
      "While our main focus is the U.S., we can work with international clients depending on project requirements.",
  },
  {
    id: 12,
    question: "Will I own the designs and content you create?",
    answer:
      "Yes, all content, websites, logos, and designs are fully owned by the client once delivered.",
  },
    {
    id: 13,
    question: "How do you ensure my website ranks higher in search engines?",
    answer:
      "We use proven SEO strategies, including keyword research, on-page optimization, technical SEO, and quality content creation.",
  },
    {
    id: 14,
    question: "Can you redesign my existing website or brand?",
    answer:
      "Yes, we offer complete redesigns and rebranding services to modernize and improve your online presence.",
  },
    {
    id: 15,
    question: "What makes PureDesignHub different from other agencies?",
    answer:
      "We combine creativity, technical expertise, and a results-driven approach to deliver digital solutions tailored to your goals.",
  },
];

export default function FAQS() {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-[color:color-mix(in_srgb,var(--surface-2)_95%,#e8f4e8)] from-35% to-[color:var(--brand-primary)] to-100%">
        <Header />
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:py-20 lg:py-24">
          <h1 className="text-4xl font-black leading-[1.12] text-[color:var(--brand-ink)] sm:text-5xl md:text-6xl lg:text-7xl">
            Frequently Asked{" "}
            <span className="text-[color:var(--brand-accent)]">Questions</span>
          </h1>
        </div>
      </section>

      {/* Accordion Section */}
      <main className="faqs_accordion relative 2xl:px-70 xl:px-40 lg:px-10 px-4 xl:pt-32 lg:pt-20 pt-10 xl:mb-40 lg:mb-20 mb-10 h-full w-full">
        <Accordion items={faqItems} />
         <Image
          src={Circle}
          title="circle"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="w-66 h-66 object-cover object-center absolute -bottom-50 -left-40 z-2 circle_img"
        />
         <Image
          src={Circle}
          title="circle"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="w-66 h-66 object-cover object-center absolute -bottom-70 -right-10 z-2 circle_img"
        />
      </main>
      {/* Contact Section */}
      <ContactUs />

      {/* Footer Sectio */}
      <Footer />
    </>
  );
}
