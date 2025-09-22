import Image from "next/image";
import React from "react";
import ContactBg from "@/public/assets/images/contact_bg.png";

export default function ContactUs() {
  return (
    <>
        <section className="contact_sec relative xl:px-40 lg:px-20 px-4 mb-10 overflow-hidden">
        <h2 className="title2 text-center">
          <span>Connect <svg
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
            </svg></span>with us
        </h2>
        <p className="text lg:my-12.5 md:my-8 my-4 text-center">
          Want the best website redesign service? Get in touch with our<br></br>{" "}
          professional designers!
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-15">
          <div className="md:order-0 order-1">
            <form action="" className="grid md:grid-cols-2 grid-cols-1 gap-7">
              <input
                type="text"
                placeholder="Name"
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-[26px] py-[13px] px-6 w-full outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-[26px] py-[13px] px-6 w-full outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-[26px] py-[13px] px-6 w-full outline-none"
              />
              <input
                type="text"
                placeholder="Select Service"
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-[26px] py-[13px] px-6 w-full outline-none"
              />
              <textarea
                name=""
                id=""
                placeholder="Type your message"
                className="text !text-[#D5D5D5] bg-white border border-[#F75126] rounded-[26px] py-[13px] px-6 w-full outline-none resize-none md:col-span-2"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="globalBtn text-white bg-[#F75126] w-fit"
              >
                See More
              </button>
            </form>
          </div>
          <div className="md:order-1 order-0">
            <Image
              src={ContactBg}
              title="Contact Us"
              alt="Contact Us"
              width={0}
              height={0}
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  )
}
