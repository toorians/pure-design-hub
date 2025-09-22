// components/TestimonialSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import Coma from "@/public/assets/images/coma.png"; // Replace with your actual path

const testimonials = [
  {
    id: 1,
    text: "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
  },
  {
    id: 2,
    text: "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
  },
  {
    id: 3,
     text: "No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!",
  },
];

export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Pagination,Autoplay]}
      pagination={{ clickable: true }}
      loop={true}
     autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      spaceBetween={30}
      slidesPerView={1}
      className="w-full max-w-[900px] mx-auto !p-1"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="bg-white shadow-sm rounded-[20px] xl:px-[82px] px-10 xl:pt-[106px] pt-20 xl:pb-[88px] pb-10 relative text-center">
            <Image
              src={Coma}
              alt="Coma icon"
              width={0}
              height={0}
              className="xl:w-[234px] xl:h-[168px] w-[150px] h-[100px] object-contain object-center absolute left-1/2 -translate-x-1/2 top-7"
            />
            <p className="xl:text-[26px] md:text-[18px] text text-[#94A2B3]">
              {testimonial.text}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
