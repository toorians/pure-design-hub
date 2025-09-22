import Image from "next/image";
import React from "react";
import Link from "next/link";
import AboutImg1 from "@/public/assets/images/about_img1.png";
import AboutImg2 from "@/public/assets/images/about_img2.png";
import Circle from "@/public/assets/images/circle.png";
import SmallCircle from "@/public/assets/images/smallCircle.png";
import VerticalDots from "@/public/assets/images/vertical_dots.png";
import HorizontalDots from "@/public/assets/images/horizontal_dots.png";

export default function AboutUs() {
  return (
    <>
      <section className="about_sec relative xl:px-40 lg:px-20 px-4 xl:mb-40 lg:py-0 py-5 lg:mb-20 mb-10">
        <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-4 relative mb-14">
          <div className="md:w-[430px] w-50 md:h-[548px] h-70 shrink-0 relative z-1">
            <Image
              src={AboutImg1}
              title="Who We Are"
              alt="Who We Are"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover object-center"
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
              className="w-100 h-100 object-cover object-center absolute -bottom-10 -left-20 -z-1 about_side_img"
            />
            <Image
              src={SmallCircle}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[65px] h-[65px] object-cover object-center absolute top-24 -left-12 -z-1 about_side_img"
            />
            <Image
              src={VerticalDots}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[214px] h-[472px] object-cover object-center absolute -bottom-1/2 -translate-y-1/3 -left-16 -z-1 about_side_img"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="title3 !text-white">
              Driven by passion, defined by excellence.
            </h3>
            <p className="text !text-white mb-6">
              WooCommerce is developer friendly, too. Built with a REST API,
              WooCommerce is scalable and can integrate with virtually any
              service. Design a complex store from scratch, extend a store for a
              client, or simply add a single product to a WordPress site—your
              store, your way.
            </p>
            <Link
              href="@/about-us"
              className="globalBtn text-white bg-black w-fit"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center md:gap-10 gap-5 relative">
          <div className="flex flex-col gap-2 lg:order-0 order-1">
            <h3 className="title3 !text-white">
              From concept to creation, we make it real.
            </h3>
            <p className="text !text-white mb-6">
              WooCommerce is one of the fastest-growing eCommerce communities.
              We’re proud that the helpfulness of the community and a wealth of
              online resources are frequently cited as reasons our users love
              it. There are 80+ meetups worldwide!
            </p>
            <Link
              href="@/about-us"
              className="globalBtn text-white bg-black w-fit"
            >
              Learn more
            </Link>
          </div>
          <div className="md:w-[430px] w-50 md:h-[548px] h-70 shrink-0 relative z-1 lg:order-1 order-0">
            <Image
              src={AboutImg2}
              title="Who We Are"
              alt="Who We Are"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-full h-full object-cover object-center"
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
              className="w-66 h-66 object-cover object-center absolute -top-5 -right-24 -z-1 about_side_img"
            />
            <Image
              src={SmallCircle}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[65px] h-[65px] object-cover object-center absolute top-0 left-30 -z-1 about_side_img"
            />
            <Image
              src={HorizontalDots}
              title="circle"
              alt="circle"
              width={0}
              height={0}
              sizes="100vw"
              decoding="async"
              loading="lazy"
              className="w-[472px] h-[214px] object-cover object-center absolute top-1/2 -translate-y-1/2 -right-30 -z-1 about_side_img"
            />
          </div>
        </div>
      </section>
    </>
  );
}
