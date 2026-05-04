"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Trustpilot from "@/public/assets/images/trustpilot.svg";
import BannerImage1 from "@/public/assets/images/banner_img1.png";
import BannerImage2 from "@/public/assets/images/banner_img2.png";
import BannerBtn1 from "@/public/assets/images/banner_btn1.png";
import BannerBtn2 from "@/public/assets/images/banner_btn2.png";
import BannerBtn3 from "@/public/assets/images/banner_btn3.png";


const HomeBanner = () => {
  return (
    <>
      <div className="relative grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-12 overflow-hidden 2xl:px-55 xl:px-40 lg:px-20 md:px-12 px-6 lg:py-12 py-6 items-center w-full">
        <div className="bannerLeft flex flex-col lg:order-0 order-1 items-center text-center lg:items-start lg:text-left z-10">
          <h1 className="title1 xl:mb-10 sm:mb-6 mb-4 max-w-2xl headline-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            Transforming Ideas Into <span className="text-gradient-shimmer">Impactful Digital</span> Experiences.
          </h1>

          <p className="text xl:mb-10 sm:mb-6 mb-6 max-w-xl text-gray-600 leading-relaxed headline-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            Pure Design Hub helps businesses grow, connect with their audience, and stand out online with world-class design and technology.
          </p>

          {/* BUTTON + TRUSTPILOT */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12">
            <Link href="/get-quote" className="globalBtn text-white bg-[#F75126] shadow-[0_20px_40px_-10px_rgba(247,81,38,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(247,81,38,0.5)] transition-all hover:-translate-y-1">
              Let's Get Started
            </Link>

            <div className="flex flex-col items-center lg:items-start gap-1 group cursor-pointer">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-[#F75126] transition-colors">Excellent on</span>
              <Link
                href="https://www.trustpilot.com/review/puredesignhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center"
              >
                <Image
                  src={Trustpilot}
                  alt="Trustpilot"
                  width={180}
                  height={48}
                  className="h-auto w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="bannerRight relative lg:h-[600px] lg:order-1 order-0 hidden lg:flex items-center justify-center">
          {/* Glowing Background Blob */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#F75126]/20 to-transparent rounded-full blur-[100px] banner-glow" />

          {/* Floating Elements - Hidden on mobile/tablet */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={BannerImage1}
              alt="Banner Image"
              width={450}
              height={450}
              className="w-auto h-auto absolute lg:-left-5 top-0 banner-float-1 banner-parallax z-10"
            />
            <Image
              src={BannerImage2}
              alt="Banner Image"
              width={350}
              height={350}
              className="w-auto h-auto absolute lg:right-0 bottom-10 banner-float-2 banner-parallax z-10"
            />
            
            {/* Decorative Buttons/Icons */}
            <Image
              src={BannerBtn1}
              alt="Banner Button"
              className="absolute right-10 top-10 banner-float-3 banner-parallax"
            />
            <Image
              src={BannerBtn2}
              alt="Banner Button"
              className="absolute left-10 top-1/2 banner-float-2 banner-parallax"
            />
            <Image
              src={BannerBtn3}
              alt="Banner Button"
              className="absolute right-1/4 bottom-0 banner-float-1 banner-parallax"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
