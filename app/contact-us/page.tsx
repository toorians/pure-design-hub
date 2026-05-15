"use client";

import React from "react";
import Header from "../component/header";
import GlobalBanner from "../component/globalBanner";
import ContactUsComp from "../component/contactUs";
import Footer from "../component/footer";

const ContactUs = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="globalBanner_sec contact-page-banner relative overflow-hidden h-full w-full bg-linear-to-b from-[color:color-mix(in_srgb,var(--surface-2)_95%,#e8f4e8)] from-35% to-[color:var(--brand-primary)] to-100%">
        <Header />
        <GlobalBanner
          title={
            <>
              Let’s Talk About <span className="text-[color:var(--brand-accent)]">Digital Goals</span>
            </>
          }
          text="we convert your digital goals and turn them into strategies that grow your brand, increase visibility, and deliver measurable results online."
          imagePath="/assets/images/contact_banner.png"
        />
      </section>

      {/* Contact Section */}
      <section className="contactpage_sec relative overflow-hidden pb-20 md:pb-24 xl:pb-32">
        <ContactUsComp
          title={
            <>
              <span className="block text-balance text-[color:var(--brand-ink)]">
                Get in touch any time
              </span>
              <span className="relative mt-3 inline-block text-balance text-[color:var(--brand-primary)]">
                for any help!
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full max-w-[12ch] rounded-full bg-[color:color-mix(in_srgb,var(--brand-accent)_75%,var(--brand-primary))] opacity-90"
                  aria-hidden
                />
              </span>
            </>
          }
          text=""
          imagePath="/assets/images/ChatGPT_Image_May_13_2026_08_31_53_AM.png"
        />
      </section>

      {/* We Are Here Section — temporarily hidden (redesign / focus on form)
      <section
        className="weHere_sec md:mb-10 mb-4 2xl:px-55 xl:px-40 lg:px-20 px-4
"
      >
        <div className="max-w-80 2xl:pt-55 md:pt-40 pt-10">
          <h2 className="title2 md:mb-12 mb-4">
            We are here
            <span>
              to help you{" "}
            </span>
          </h2>
          <Link href="/get-quote" className="globalBtn text-white bg-[color:var(--brand-primary)] inline-flex">
            Lets get Started
          </Link>
        </div>
        <Image
          src={Circle}
          title="circle"
          alt="circle"
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="xl:w-116 xl:h-116 w-66 h-66 object-cover object-center absolute -bottom-16 xl:-left-58 -left-32 -z-1 circle_img"
        />
      </section>
      */}

      {/* Footer Sectio */}
      <Footer />
    </>
  );
};

export default ContactUs;
