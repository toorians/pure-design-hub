"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/component/header";
import Footer from "@/app/component/footer";
import ContactUs from "@/app/component/contactUs";
import Accordion from "@/app/component/Accordion";
import SEOPricingSection from "@/app/component/seo-services-pricing";

const HERO_IMAGE = "/assets/images/seo_banner.png";
const SEO_COMP_IMAGE = "/assets/images/service5.png";

export default function SEOServicesNew() {
  const seoServices = [
    {
      title: "SEO Strategy and Planning",
      desc: "Every successful campaign starts with a clear strategy. We begin by understanding your business, your target audience, your competitors, and your goals. This allows us to create SEO Techniques that are aligned with your business needs rather than using generic tactics.",
      icon: "📋"
    },
    {
      title: "Keyword Research and Search Intent Analysis",
      desc: "Ranking for the wrong keywords wastes time and budget. Our Expert SEO teams focus on finding the right keywords your target audience in the USA is actually searching for. We also analyze search intent to make sure your pages match what users expect to find.",
      icon: "🔍"
    },
    {
      title: "On Page SEO Optimization",
      desc: "The foundation of any optimized website lies in on-page SEO. We focus on improving important elements including titles, headings, content structure, internal linking, image optimization, URLs, and keyword placement.",
      icon: "📄"
    },
    {
      title: "Technical SEO Improvements",
      desc: "A website may have strong content, but technical issues can still block its performance. Our SEO services include technical audits to identify and fix issues that may affect crawling, indexing, speed, mobile usability, and site structure.",
      icon: "⚙️"
    },
    {
      title: "Content Optimization and Content Strategy",
      desc: "Content plays a major role in SEO success. We improve existing content and create strategies for new service pages, landing pages, and blog content that support topical relevance and authority.",
      icon: "✍️"
    },
    {
      title: "Local SEO Services",
      desc: "If your business targets customers in specific cities or service areas, local SEO is essential. This help business in the USA improve local visibility through location-focused optimization, Google Business Profile support, local landing pages, citation consistency, and localized keyword targeting.",
      icon: "📍"
    },
    {
      title: "Link Building and Authority Growth",
      desc: "Authority matters in search results. Our Off page SEO Services support long-term growth by helping your website earn stronger trust signals through ethical and quality-focused link-building strategies.",
      icon: "🔗"
    },
    {
      title: "SEO Reporting and Performance Tracking",
      desc: "Transparency is important. We track rankings, traffic patterns, engagement signals, and improvement areas so you can understand how your SEO campaign is progressing. Our SEO services are based on data, not assumptions.",
      icon: "📊"
    },
  ];

  const strategySteps = [
    { number: "01", title: "Discovery and Website Review", desc: "We start by reviewing your website, current performance, competitors, and goals. This helps us understand where your business stands and what improvements are needed first." },
    { number: "02", title: "Research and Opportunity Mapping", desc: "Next, we identify the most valuable keyword opportunities, service gaps, content needs, and technical issues. This creates the direction for the SEO campaign." },
    { number: "03", title: "Optimization and Implementation", desc: "We then apply the necessary improvements across your website. This may include on-page updates, technical fixes, content enhancements, and location-focused optimization depending on your needs." },
    { number: "04", title: "Growth and Refinement", desc: "SEO is not a one-time task. Search behavior changes, competition changes, and websites need continuous refinement. Our SEO service include ongoing review and improvement so your site can stay competitive in the USA market." },
  ];

  const faqItems = [
    { id: 1, question: "Are seo services worth it in 2026?", answer: "Yes, SEO is worth it in 2026 as they help businesses increase organic visibility, attract qualified traffic, and generate long-term leads. With a strategic approach, SEO continues to outperform paid advertising for sustainable growth." },
    { id: 2, question: "Is SEO for small business worth it for businesses in the USA?", answer: "Yes, businesses in the USA can benefit greatly, especially with affordable SEO services for small business that improve local visibility and attract the right audience. It provides steady traffic and leads without depending only on paid marketing." },
    { id: 3, question: "Can SEO help my local business grow?", answer: "Yes, SEO improves your visibility in local searches and Google Maps, helping you reach nearby customers who are ready to take action." },
    { id: 4, question: "How much do SEO services cost?", answer: "The cost varies based on your goals and competition, but there are flexible options, including affordable SEO services for small businesses." },
    { id: 5, question: "How long does SEO take to show results?", answer: "SEO usually takes 3 to 6 months to show noticeable improvements, depending on your competition and current website condition." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E2B3A] via-[#2D3E50] to-[#1E2B3A] text-white py-16 px-4 md:px-20 lg:pt-24 lg:pb-40 relative overflow-hidden">
        {/* Decorative Blurred Blobs for Depth */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-[#F75126] opacity-[0.08] blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[70%] bg-[#2470ff] opacity-[0.05] blur-[150px] rounded-full"></div>
        
        <div className="max-w-[1400px] mx-auto z-10 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-[#F75126]/10 border border-[#F75126]/20 rounded-full">
                <span className="text-[#F75126] text-sm font-bold tracking-wider uppercase">Strategic Growth 2026</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
                SEO Services <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">in USA</span>
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-xl leading-relaxed font-light">
                Increase your website’s authority and rankings with consistent results from our <span className="text-white font-semibold">tested SEO strategy.</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-10 pt-4">
                <Link href="/get-quote" className="bg-[#F75126] text-white px-12 py-6 rounded-full font-bold text-lg hover:shadow-[0_20px_50px_rgba(247,81,38,0.3)] hover:-translate-y-1 transition-all flex items-center gap-3 group">
                  Get Free Proposal
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
                <Link href="tel:+1234567890" className="flex items-center gap-3 font-bold text-xl hover:text-[#F75126] transition-all group">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-full group-hover:bg-[#F75126]/20 group-hover:border-[#F75126]/30 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F75126" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  Schedule a Call
                </Link>
              </div>
            </div>

            {/* Consultation Form Card - Enhanced UX/UI */}
            <div className="bg-white/95 backdrop-blur-md rounded-[40px] p-8 md:p-14 text-[#2D3E50] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/20 relative">
              <div className="absolute -top-6 -left-6 bg-[#F75126] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                FREE AUDIT
              </div>
              <h3 className="text-4xl font-black mb-2">
                Book a Free
              </h3>
              <h3 className="text-4xl font-black text-[#F75126] mb-12">
                Consultation
              </h3>
              
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="text" id="name" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Full Name" required />
                    <label htmlFor="name" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Full Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Email" required />
                    <label htmlFor="email" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Email</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <input type="tel" id="number" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Number" required />
                    <label htmlFor="number" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Number</label>
                  </div>
                  <div className="relative group">
                    <input type="text" id="project" className="peer w-full border-b-2 border-gray-200 bg-transparent outline-none focus:border-[#F75126] transition-all py-3 text-lg placeholder-transparent" placeholder="Project Need" />
                    <label htmlFor="project" className="absolute left-0 -top-5 text-sm font-bold text-gray-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-[#F75126]">Describe Your Project Need.</label>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#F75126] text-white font-bold py-6 rounded-2xl text-xl hover:bg-[#E0441D] hover:shadow-[0_20px_40px_rgba(247,81,38,0.3)] transition-all mt-6 active:scale-[0.98]">
                  Schedule A Call
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-8 font-medium">
                  By submitting this form, you agree to our <Link href="/privacypolicy" className="text-[#F75126] hover:underline">Privacy Policy</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Growth Section */}
      <section className="py-20 px-4 md:px-20 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[450px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
            <Image src={SEO_COMP_IMAGE} alt="SEO Strategy" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-[#F75126] font-bold uppercase tracking-widest mb-4">Strategic SEO</h3>
            <h2 className="title2 mb-6 uppercase">
              An SEO Agency Focused on <span className="text-[#F75126]">Sustainable Rankings</span>
            </h2>
            <p className="text mb-4 text-gray-600">
              Our Services for Seo are built for service-based businesses, startups, agencies, local brands, and growing companies that want long-term growth. Instead of relying on short-term tricks, Pure Design Hub focuses on sustainable SEO strategies that improve your website’s authority, strengthen its relevance, and help it perform better in search results over time.
            </p>
            <p className="text mb-8 text-gray-600">
              We do not treat search engine optimization as a one-size-fits-all service. Every business has different goals, different competition, and a different audience. That is why our SEO Consulting is customized to match your niche, your market, and your business objectives in the USA.
            </p>
          </div>
        </div>
      </section>

      {/* Why SEO Matters Section */}
      <section className="bg-[#f9f9f9] py-20 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="title2 mb-6">Why SEO Matters for <span className="text-[#F75126]">Businesses in the USA</span></h2>
            <p className="text text-gray-600 mb-6">
              The online market in the USA is highly competitive. People search every day for products, services, and solutions, and most of them click on businesses that appear on the first page of Google. If your website is not ranking well, you are missing valuable traffic and potential revenue.
            </p>
            <p className="text text-gray-600 mb-6 font-semibold">
              With the right strategy, SEO can help your business:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "increase organic traffic", "improve keyword rankings", "generate better quality leads",
                "build trust and authority", "reduce dependency on paid ads", "create long-term digital growth"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-[#F75126] font-bold">✔</span> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#272D4E] p-10 rounded-[40px] text-white">
            <h4 className="text-2xl font-bold mb-4">Targeted Traffic with Real Intent</h4>
            <p className="text-gray-400">
              Professional SEO service help businesses improve their online visibility and attract users who are already searching for what they offer. This means SEO does not just bring traffic. It brings targeted traffic from people with real intent. At Pure Design Hub, our SEO Strategies are designed to help your business compete effectively in the USA market.
            </p>
          </div>
        </div>
      </section>

      {/* Our SEO Services Grid */}
      <section className="py-20 px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto text-center mb-16">
          <h2 className="title2 mb-4 uppercase text-[#272D4E]">Our SEO <span className="text-[#F75126]">Services Include</span></h2>
          <p className="text max-w-2xl mx-auto text-gray-500">
            We provide specialized SEO techniques aligned with your business needs rather than using generic tactics.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {seoServices.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[#272D4E] group-hover:text-[#F75126]">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0B0D17] text-white px-4">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Over <span className="text-[#F75126]">68,000 Searches</span> On Google Every Second!</h2>
          <p className="text-gray-400 mb-12">Is your brand visible for the terms that matter most to your business?</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "95%", label: "First Page Rank" },
              { val: "78%", label: "Traffic Increase" },
              { val: "62%", label: "Conversion Lift" },
              { val: "100%", label: "White Hat SEO" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-[#F75126] mb-2">{stat.val}</div>
                <div className="text-gray-400 font-semibold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="title2 text-center mb-12 uppercase">Why Choose <span className="text-[#F75126]">Pure Design Hub</span> for SEO Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Customize SEO strategies", text: "Tailored roadmaps built around your unique business goals and market competition." },
              { title: "Clean and Clear Communication", text: "Transparent reporting and feedback so you always know your project status." },
              { title: "Ethical Optimization Methods", text: "We strictly follow white-hat SEO techniques to ensure long-term site safety." },
              { title: "Strong Content Quality", text: "Focusing on content that is useful, clear, original, and aligned with user intent." },
              { title: "Technical Accuracy", text: "Precision audits to identify and fix every technical barrier to search performance." },
              { title: "Long-term Business Growth", text: "We focus on building authority that keeps you profitable for years to come." },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#f9f9f9] rounded-3xl border border-gray-100 hover:border-[#F75126] transition-all">
                <h4 className="font-bold text-xl text-[#272D4E] mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-600 max-w-3xl mx-auto">
            Pure Design Hub understands that businesses do not just want rankings. They want measurable business growth. That is why Our SEO services are designed to improve visibility, build authority, and convert traffic into real results.
          </p>
        </div>
      </section>

      {/* Our SEO Process */}
      <section className="py-20 bg-[#F8F8F8] px-4 md:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
          <div>
            <h2 className="title2 mb-6">Our <span className="text-[#F75126]">SEO Process</span></h2>
            <p className="text text-gray-600">
              We combine strategy, content, and optimization into one clear process. This allows businesses in the USA to build a stronger digital presence without depending only on paid marketing.
            </p>
            <div className="mt-8">
              <Link href="/get-quote" className="bg-[#F75126] text-white px-8 py-4 rounded-full font-bold inline-block shadow-lg hover:shadow-xl transition-all">Start Your Audit</Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {strategySteps.map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-md transition-all">
                <div className="bg-[#F75126]/10 text-[#F75126] w-12 h-12 flex items-center justify-center rounded-full font-bold mb-4 text-xl">{step.number}</div>
                <h4 className="font-bold text-xl text-[#272D4E] mb-2">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="title2 mb-6 uppercase text-[#272D4E]">Who Can Benefit from <span className="text-[#F75126]">Our SEO Services</span></h2>
          <p className="text-gray-500 mb-12">Whether your business is new or already established, the right SEO strategy can help create better search visibility.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["local businesses", "startups", "agencies", "eCommerce brands", "service providers", "consultants", "personal brands", "growing companies"].map((type, i) => (
              <span key={i} className="bg-[#f0f0f0] text-gray-700 px-8 py-4 rounded-full font-semibold border border-gray-100 hover:bg-[#F75126] hover:text-white transition-all cursor-default text-lg">
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Real Business Growth Section */}
      <section className="py-20 bg-[#272D4E] text-white px-4 md:px-20 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">SEO Services Focused on <span className="text-[#F75126]">Real Business Growth</span></h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
            The goal of SEO should never be traffic alone. It should be qualified traffic that supports real business outcomes. We design SEO campaign strategies that combine planning, content, and optimization to help businesses grow through organic search and long-term visibility.
          </p>
          <div className="bg-white/5 p-12 rounded-[50px] border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">Let Pure Design Hub Help You Rank Higher</h4>
            <p className="text-gray-400 mb-8 text-lg">If you’re looking for affordable SEO services, we are ready to help you to improve your search presence with a strategy built for long-term growth.</p>
            <Link href="/get-quote" className="bg-[#F75126] text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#F75126] transition-all inline-block shadow-2xl">Contact Us Today</Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#F75126] rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F75126] rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Pricing */}
      <div className="py-20">
        <SEOPricingSection />
      </div>

      {/* FAQs */}
      <section className="py-24 px-4 md:px-20 max-w-[1100px] mx-auto bg-[#fafafa]">
        <h2 className="title2 text-center mb-16 uppercase text-[#272D4E]">Search Engine <span className="text-[#F75126]">Optimization FAQs</span></h2>
        <Accordion items={faqItems} />
      </section>

      <ContactUs />
      <Footer />
    </main>
  );
}
