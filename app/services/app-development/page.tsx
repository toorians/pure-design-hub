"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppHero from "@/public/assets/images/service2.png";
import TestimonialImg1 from "@/public/assets/images/testimonial_img1.png";
import TestimonialImg2 from "@/public/assets/images/testimonial_img2.png";
import TestimonialImg3 from "@/public/assets/images/testimonial_img3.png";
import TestimonialImg4 from "@/public/assets/images/testimonial_img4.png";
import TestimonialImg5 from "@/public/assets/images/testimonial_img5.png";
import TestimonialImg6 from "@/public/assets/images/testimonial_img6.png";
import Circle from "@/public/assets/images/circle.png";
import Header from "@/app/component/header";
import GlobalBanner from "@/app/component/globalBanner";
import PortfolioGallery from "@/app/component/portfolioGallery";
import TestimonialSlider from "@/app/component/testimonial";
import ContactUs from "@/app/component/contactUs";
import Footer from "@/app/component/footer";

export default function AppDevelopment() {
  const [activeCategory, setActiveCategory] = useState("Mobile Apps");
  return (
    <>
      {/* Banner Section */}
      <section className="globalBanner_sec relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 bg-linear-to-b from-[#E5EFFF] from-40% to-[#FB591E] to-100% ">
        <Header />
        <GlobalBanner
          title={
            <>
              Mobile App <span>Development</span>
            </>
          }
          text=""
          imagePath="/assets/images/app_banner.png"
        />
      </section>

      {/* Pure Design Hub Section */}
      <section
        className="purSee the Magic
We’ve Created
for Our ClientseDesignHub_hub relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 xl:px-30 px-4"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center xl:gap-10 lg:gap-5 gap-4">
          {/* Image */}
          <div className="relative w-full xl:h-[500px] md:h-[400px] sm:h-[300px] h-[200px] rounded-[20px] overflow-hidden">
            <Image
              src={AppHero}
              alt="App Development Hero"
              title="App Development Hero"
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
            <h3>Unleashing the Power of Your Brand</h3>
            <p className="text mb-4">
              We believe that a website should do more than just exist online—it
              should tell your story, capture attention, and inspire action. At
              Pure Design Hub, our mission is to design digital experiences that
              are clean, modern, and impactful, helping businesses stand out in
              today’s fast-moving digital world.
            </p>
            <p className="text lg:mb-10 mb-5">
              Our team is passionate about blending innovative design with smart
              strategy. Every project we take on is built around your brand
              identity, your audience, and your goals. From elegant portfolios
              to high-performing e-commerce stores, we ensure every website we
              create is responsive, user-friendly, and optimized for success.
            </p>
            <Link
              href=""
              className="globalBtn bg-[#F75126] text-white inline-flex"
            >
              Let’s Talk
            </Link>
          </div>
        </div>{" "}
      </section>

      {/* Portfolio Section */}
      <section className="services_sec relative 2xl:px-40 xl:px-20 px-4 mb-10 overflow-hidden">
         <h2 className="title2 text-center">
          Explore our{" "}
          <span>
            portfolio
            <svg
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
            </svg>
          </span>
        </h2>
        <p className="text lg:my-12.5 md:my-8 my-4 text-center">
          Get the perfect logo design - or any design in any categories!
          Whatever your<br></br>
          business need or budget, Contact our digital marketing firm.
        </p>
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
        {/* Gallery rendered separately but shares state */}
        <PortfolioGallery activeCategory={activeCategory} />
      </section>

      {/* Testimonial Section */}
      <section className="testimonial_sec relative overflow-hidden h-full w-full bg-gradient-to-b from-white via-[#F75126]/12 to-white z-1 xl:px-100 lg:px-60 md:px-20 px-4 xl:py-40 lg:py-20 py-10 xl:mb-40 lg:mb-20 mb-10">
        <h3 className="title2 xl:mb-26 lg:mb-10 mb-5 text-center">
          What people say about Pure Design Hub
        </h3>
        <main className="relative z-10 p-2">
          <div className="absolute top-5 right-[-10%] w-[214px] h-[100px] bg-[url('/assets/images/verticalDotsRed.png')] bg-no-repeat bg-contain bg-center z-[-1]" />
          <div className="absolute -bottom-10 left-[-10%] w-[214px] h-[100px] bg-[url('/assets/images/verticalDotsGreen.png')] bg-no-repeat bg-contain bg-center z-[-1]" />
          <TestimonialSlider />
        </main>

        <Image
          src={TestimonialImg1}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          decoding="async"
          loading="lazy"
          className="xl:w-34 xl:h-34 w-20 h-20 object-cover object-center absolute xl:left-80 left-20 xl:top-56 lg:top-10 top-0 testimonial_img"
        />
        <Image
          src={TestimonialImg2}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-23.5 xl:h-23.5 w-12 h-12 object-cover object-center absolute xl:right-80 right-20 xl:top-60 lg:top-12 top-4 testimonial_img"
        />
        <Image
          src={TestimonialImg3}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-23.5 xl:h-23.5 w-12 h-12 object-cover object-center absolute xl:left-15 left-10 xl:top-100 lg:top-60 top-full testimonial_img"
        />
        <Image
          src={TestimonialImg4}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-38.5 xl:h-38.5 w-24 h-24 object-cover object-center absolute xl:right-30 right-10 xl:top-100 lg:top-60 top-full testimonial_img"
        />
        <Image
          src={TestimonialImg5}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-26 xl:h-26 w-16 h-16 object-cover object-center absolute xl:left-50 left-20 xl:bottom-10 lg:bottom-4 bottom-0 testimonial_img"
        />
        <Image
          src={TestimonialImg6}
          title="Testimonial"
          alt="Testimonial"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="w-22 h-22 object-cover object-center absolute xl:right-50 lg:right-20 lg:bottom-0 -bottom-5 testimonial_img"
        />
      </section>

      {/* Contact Section */}
      <ContactUs />

      {/* Footer Sectio */}
      <Footer />
    </>
  );
}
