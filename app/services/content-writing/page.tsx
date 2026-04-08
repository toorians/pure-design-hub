"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentHero from "@/public/assets/images/service3.png";
import ContentHero2 from "@/public/assets/images/content_hero.png";
import Circle from "@/public/assets/images/circle.png";
import Header from "@/app/component/header";
import GlobalBanner from "@/app/component/globalBanner";
import ContactUs from "@/app/component/contactUs";
import Footer from "@/app/component/footer";
import ContentWrititngPricingSection from "@/app/component/content-writing-pricing";

export default function ContentWriting() {
  return (
    <>
      {/* Banner Section */}
      <section className="globalBanner_sec relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 bg-linear-to-b from-[#E5EFFF] from-40% to-[#FB591E] to-100% ">
        <Header />
        <GlobalBanner
          title={
            <>
              Content <span>writing</span>
            </>
          }
          text=""
          imagePath="/assets/images/content_banner.png"
        />
      </section>

      {/* Pure Design Hub Section */}
      <section
        className="purSee the Magic
We’ve Created
for Our ClientseDesignHub_hub relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 2xl:px-55 xl:px-30 px-4"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-5 gap-4">
          {/* Image */}
          <div className="relative w-full xl:h-[500px] md:h-[400px] sm:h-[300px] h-[200px] rounded-[20px] overflow-hidden">
            <Image
              src={ContentHero}
              alt="Content Writing Hero"
              title="Content Writing Hero"
              width={0}
              height={0}
              fill
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-fill object-center"
            />
          </div>

          {/* Text Content */}
          <div className="title3 mb-3">
            <h3>Unleashing the Power of Your Brand Through Words</h3>
            <p className="text mb-4">
              We believe content should do more than just fill a page—it should tell your story, engage your audience, and inspire action. At PureDesignHub, our mission is to craft clear, compelling, and impactful content that helps businesses stand out in today’s fast-moving digital world.
            </p>
            <p className="text lg:mb-10 mb-5">
              Our team is passionate about combining creativity with strategy. Every piece of content we create is tailored to your brand voice, target audience, and business objectives. From blog posts and articles to website copy and marketing materials, we ensure all content is engaging, informative, and optimized for success.
            </p>
            <Link
              href="/get-quote"
              className="globalBtn bg-[#F75126] text-white inline-flex"
            >
              Let’s Talk
            </Link>
          </div>
        </div>{" "}
      </section>

      {/* Experience Section */}
      <section className="services_sec relative 2xl:px-55 xl:px-20 px-4 xl:mb-40 lg:mb-20 mb-10 overflow-hidden">
        <h2 className="title2 text-center">
          Get Exceptional Website
          <span>Content Writing <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            >
              <path
                d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6
               c1.4,32.4,52.2,54,142.6,63.7
               c66.2,7.1,212.2,7.5,273.5-8.3
               c64.4-16.6,104.3-57.6,33.8-98.2
               C386.7-4.9,179.4-1.4,126.3,20.7"
                fill="none"
                stroke="#f75126"
                strokeWidth="6"
                strokeLinecap="round"
                className="animated-path"
              />
            </svg></span>Services
        </h2>
        <p className="text lg:my-12.5 md:my-8 my-4 text-center">
          Content writer's objective is to provide professional and affordable
          website content writing services worldwide.<br className="xl:block hide"></br> We are presenting an innovative and eye-catching website content from highly qualified
          and expert writers. Web<br className="xl:block hide"></br> content writing is available through
          a CLICK!!
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  items-center 2xl:gap-8 lg:gap-5 gap-4">
          <div
            className="group md:border-[4px] border-[2px] md:rounded-[44px] rounded-xl border-[#F75126] 
                bg-[#F75126] hover:bg-[#FFFFFF] 2xl:p-[4.5rem] xl:p-8 lg:p-6 sm:py-4 sm:px-6 py-3 px-5 
                transition-colors duration-300 ease-in-out"
          >
            <h3
              className="text-[#FFFFFF] group-hover:text-[#F75126] 
                 lg:text-[2rem] sm:text-[1.5rem] text-base leading-[30px] font-bold 
                 transition-colors duration-300 ease-in-out"
            >
              Unique Content
            </h3>
            <hr
              className="w-full sm:h-[2px] h-px bg-[#FF9174] group-hover:bg-[#D5D5D5] md:my-6 sm:my-4 my-2 transition-colors duration-300 ease-in-out"
            />
            <p
              className="text-[#FFFFFF] group-hover:text-[#050505] 
                transition-colors duration-300 ease-in-out "
            >
             We create original, research-based content that reflects your brand voice and supports stronger engagement online.

            </p>
          </div>

          <div
            className="group md:border-[4px] border-[2px] md:rounded-[44px] rounded-xl border-[#F75126] 
                bg-[#F75126] hover:bg-[#FFFFFF] 2xl:p-[4.5rem] xl:p-8 lg:p-6 sm:p-4 p-3 
                transition-colors duration-300 ease-in-out"
          >
            <h3
              className="text-[#FFFFFF] group-hover:text-[#F75126] 
                 lg:text-[2rem] sm:text-[1.5rem] text-base leading-[30px] font-bold 
                 transition-colors duration-300 ease-in-out"
            >
             Speedy Deliverance
            </h3>
            <hr
              className="w-full sm:h-[2px] h-px bg-[#FF9174] group-hover:bg-[#D5D5D5] md:my-6 sm:my-4 my-2 transition-colors duration-300 ease-in-out"
            />
            <p
              className="text-[#FFFFFF] group-hover:text-[#050505] 
                transition-colors duration-300 ease-in-out "
            >
             We deliver polished content quickly without compromising quality, helping your business maintain momentum and presence.

            </p>
          </div>

          <div
            className="group md:border-[4px] border-[2px] md:rounded-[44px] rounded-xl border-[#F75126] 
                bg-[#F75126] hover:bg-[#FFFFFF] 2xl:p-[4.5rem] xl:p-8 lg:p-6 sm:p-4 p-3 
                transition-colors duration-300 ease-in-out"
          >
            <h3
              className="text-[#FFFFFF] group-hover:text-[#F75126] 
                 lg:text-[2rem] sm:text-[1.5rem] text-base leading-[30px] font-bold 
                 transition-colors duration-300 ease-in-out"
            >
              24/7 Customer Service
            </h3>
            <hr
              className="w-full sm:h-[2px] h-px bg-[#FF9174] group-hover:bg-[#D5D5D5] md:my-6 sm:my-4 my-2 transition-colors duration-300 ease-in-out"
            />
            <p
              className="text-[#FFFFFF] group-hover:text-[#050505] 
                transition-colors duration-300 ease-in-out "
            >
             We offer round-the-clock support to answer questions, manage revisions, and ensure smooth, reliable content delivery.
            </p>
          </div>
        </div>
      </section>


       {/* Content Service Section */}
      <section className="services_sec relative 2xl:px-55 xl:px-20 px-4 md:py-10 my-6 mb-10 overflow-hidden bg-[#F8F8F8]">
        <h2 className="title2 text-center ">
          Get High-Quality  <span>Content Writing <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            >
              <path
                d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6
               c1.4,32.4,52.2,54,142.6,63.7
               c66.2,7.1,212.2,7.5,273.5-8.3
               c64.4-16.6,104.3-57.6,33.8-98.2
               C386.7-4.9,179.4-1.4,126.3,20.7"
                fill="none"
                stroke="#f75126"
                strokeWidth="6"
                strokeLinecap="round"
                className="animated-path"
              />
            </svg></span>Services
        </h2>
        <Image
          src={Circle}
          title="circle"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-66 xl:h-66 w-24 h-24 object-cover object-center absolute top-0 xl:-left-33 -left-4 -z-1 circle_img"
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
          className="xl:w-66 xl:h-66 w-24 h-24 object-cover object-center absolute top-50 xl:-right-10 -right-6 -z-1 circle_img"
        />

         <div className="grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-5 gap-4">
          {/* Image */}
          <div className="relative w-full xl:h-[690px] md:h-[500px] sm:h-[400px] h-[300px] rounded-[20px] overflow-hidden">
            <Image
              src={ContentHero2}
              alt="High Quality Content"
              title="High Quality Content"
              width={0}
              height={0}
              fill
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-fill object-center"
            />
          </div>

          {/* Text Content */}
          <div className="title3 mb-3">
            <p className="text mb-4">
              We believe content should do more than just fill space—it should tell your story, engage your audience, and drive results. At PureDesignHub, our mission is to create clear, compelling, and impactful content that helps businesses stand out in today’s fast-paced digital world.
            </p>
            <p className="text lg:mb-10 mb-5">
             Our team combines creativity with strategic insight. Every project we take on is crafted around your brand voice, target audience, and business goals. From engaging blog posts to persuasive website copy, we ensure every piece of content is well-researched, reader-friendly, and optimized for success.
            </p>
            <Link
              href="/get-quote"
              className="globalBtn bg-[#F75126] text-white inline-flex"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
       
      </section>

      {/* Pricing */}
      <ContentWrititngPricingSection />

      {/* Contact Section */}
      <ContactUs />

      {/* Footer Sectio */}
      <Footer />
    </>
  );
}
