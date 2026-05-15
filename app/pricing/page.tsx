"use client";

import Header from "@/app/component/header";
import Footer from "../component/footer";
import ContactUs from "../component/contactUs";
import PricingPlansBlock from "@/app/component/PricingPlansBlock";

export default function MasterPricingSection() {
  return (
    <>
      <Header />
      <PricingPlansBlock />
      <ContactUs />
      <Footer />
    </>
  );
}
