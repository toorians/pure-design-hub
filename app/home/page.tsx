"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.svg";
import Trustpilot from "@/public/assets/images/trustpilot.svg";
import BannerImage1 from "@/public/assets/images/banner_img1.png";
import BannerImage2 from "@/public/assets/images/banner_img2.png";
import BannerBtn1 from "@/public/assets/images/banner_btn1.png";
import BannerBtn2 from "@/public/assets/images/banner_btn2.png";
import BannerBtn3 from "@/public/assets/images/banner_btn3.png";
import AboutImg1 from "@/public/assets/images/about_img1.png";
import AboutImg2 from "@/public/assets/images/about_img2.png";
import Circle from "@/public/assets/images/circle.png";
import SmallCircle from "@/public/assets/images/smallCircle.png";
import VerticalDots from "@/public/assets/images/vertical_dots.png";
import HorizontalDots from "@/public/assets/images/horizontal_dots.png";
import PortfolioGallery from "../component/portfolioGallery";
import TestimonialImg1 from "@/public/assets/images/testimonial_img1.png";
import TestimonialImg2 from "@/public/assets/images/testimonial_img2.png";
import TestimonialImg3 from "@/public/assets/images/testimonial_img3.png";
import TestimonialImg4 from "@/public/assets/images/testimonial_img4.png";
import TestimonialImg5 from "@/public/assets/images/testimonial_img5.png";
import TestimonialImg6 from "@/public/assets/images/testimonial_img6.png";
import ContactBg from "@/public/assets/images/contact_bg.png";
import FooterLogo from "@/public/assets/images/footer_logo.png";
import PaymentIcon1 from "@/public/assets/images/payment_icon1.png";
import PaymentIcon2 from "@/public/assets/images/payment_icon2.png";
import LocationIcon from "@/public/assets/images/location_icon.svg";
import MessageIcon from "@/public/assets/images/message_icon.svg";
import USAIcon from "@/public/assets/images/USA.svg";
import UKIcon from "@/public/assets/images/UK.svg";
import TestimonialSlider from "../component/testimonial";
import Header from "../component/header";
import HomeBanner from "../component/homeBanner";
import Footer from "../component/footer";
import ContactUs from "../component/contactUs";
import AboutUs from "../component/AboutUsComp";
import Services from "../component/services";
import AboutUsComp from "../component/AboutUsComp";
import CategoryTabs from "../component/categoryTabs";

const categories = ["E-Store", "Web Design", "Mobile Apps", "Branding", "Logo"];

const Home = () => {
  const services = [
    {
      title: "Website Development",
      text: "Add WooCommerce plugin to any WordPress site and set up a new store in minutes.",
      imagePath: "/assets/images/service1.png",
      slug: "/services/website-development",
      buttonText: "Read More ›",
    },
    {
      title: "App Development",
      text: "Add WooCommerce plugin to any WordPress site and set up a new store in minutes.",
      imagePath: "/assets/images/service2.png",
      slug: "/services/app-development",
      buttonText: "Read More ›",
    },
    {
      title: "Branding Design",
      text: "Add WooCommerce plugin to any WordPress site and set up a new store in minutes.",
      imagePath: "/assets/images/branding_body.png",
      slug: "/services/branding-design",
      buttonText: "Read More ›",
    },
    {
      title: "Content Writing",
      text: "Add WooCommerce plugin to any WordPress site and set up a new store in minutes.",
      imagePath: "/assets/images/service3.png",
      slug: "/services/content-writing",
      buttonText: "Read More ›",
    },
    {
      title: "Social Media Marketing",
      text: "Add WooCommerce plugin to any WordPress site and set up a new store in minutes.",
      imagePath: "/assets/images/service4.png",
      slug: "/services/social-media-marketing",
      buttonText: "Read More ›",
    },
    {
      title: "SEO Services",
      text: "Add WooCommerce plugin to any WordPress site and set up a new store in minutes.",
      imagePath: "/assets/images/service5.png",
      slug: "/services/seo-services",
      buttonText: "Read More ›",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("E-Store");

  return (
    <>
      {/* Banner Section */}
      <section className="banner_sec relative overflow-hidden h-full w-full bg-[linear-gradient(90deg,_rgba(251,89,30,0.08)_0%,_rgba(229,239,255,0.26)_84%,_rgba(229,239,255,0)_100%)] z-1 xl:mb-40 lg:mb-20 mb-10">
        <Header />
        <HomeBanner />
      </section>

      {/* Services Section */}
      <section className="services_sec xl:px-40 lg:px-20 px-4 xl:mb-40 lg:mb-20 mb-10">
        <h2 className="title2 text-center lg:mb-22 md:mb-16 mb-5">
          Providing expert <span>services <svg
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
            </svg></span>
        </h2>
        <Services services={services} />
      </section>

      {/* About Section */}
      <AboutUsComp />

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
          Whatever your<br className="lg:block hidden"></br>
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
        {/* Category tabs */}
        {/* Tabs rendered first */}
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
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
};

export default Home;
