"use client";

import Header from "@/app/component/header";
import Footer from "../component/footer";
import Portfolio from "../component/portfolioGallery";
import GlobalBanner from "../component/globalBanner";
export default function PFGal() {
  return (
    <>
      <section className="globalBanner_sec relative overflow-hidden h-full w-full xl:mb-40 lg:mb-20 mb-10 bg-linear-to-b from-[#E5EFFF] from-40% to-[#FB591E] to-100% ">
        <Header />
        <GlobalBanner
          title={
            <>
              Check Out Our <span>Portfolio</span>
            </>
          }
          text="We convert your digital goals into strategies that grow your brand, increase visibility, and deliver measurable results online."
          imagePath="/assets/images/Portfolio/portfolio_banner.png"
        />
      </section>
      <Portfolio />
      <Footer />
    </>
  );
}