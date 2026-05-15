import Image from "next/image";
import React, { FormEvent, useState } from "react";
import Link from "next/link";
import Trustpilot from "@/public/assets/images/trustpilot.svg";

type QuickFormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialQuickForm: QuickFormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const servicesList = [
  "Web Development",
  "App Development",
  "Branding Design",
  "Content Writing",
  "Social Media Marketing",
  "SEO Services",
];

const HomeBanner = () => {
  const [form, setForm] = useState<QuickFormState>(initialQuickForm);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.service.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://puredesignhub.com/api/get-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formName: "Home Hero Quick Form",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.message || `Server error: ${res.status}`);
      setSuccessMsg(data?.message || "Thanks! We’ll contact you shortly.");
      setForm(initialQuickForm);
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[750px] lg:min-h-[850px] bg-[#0a0a0a] flex items-center overflow-hidden py-16 lg:py-24 px-6 md:px-12 lg:px-[150px]">
      {/* Background Stylized Scrolling Text Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none flex flex-col justify-center rotate-[-10deg] scale-150 gap-8">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`flex whitespace-nowrap ${i % 2 === 0 ? 'tech-scroll-left' : 'tech-scroll-right'}`} style={{ animationDuration: '60s' }}>
            {[...Array(10)].map((_, j) => (
              <span key={j} className="text-[8vw] font-black uppercase tracking-tighter text-white px-4">
                CREATING FUTURE-READY DIGITAL STORIES
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Modern Glow Effects */}
      {/* <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#39b54a]/40 blur-[200px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#39b54a]/35 blur-[180px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" /> */}

      <div className="relative z-10 w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Banner Content Left */}
        <div className="bannerLeft flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 headline-reveal opacity-0" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-[#39b54a] animate-pulse"></span>
            <span className="text-white/70 text-xs font-bold tracking-widest uppercase">Premier Creative Agency</span>
          </div> */}

          <h1 className="text-5xl md:text-xl xl:text-7xl font-black text-white mb-6 leading-[1] headline-reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            Transforming <span className="text-[#39b54a]">Ideas</span> Into Impactful <span className="text-[#39b54a]">Digital</span> Experiences.
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-xl text-gray-400 leading-relaxed headline-reveal opacity-0" style={{ animationDelay: '0.4s' }}>
            Pure Design Hub helps businesses grow, connect with their audience, and stand out online with world-class design and technology.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 headline-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
            <Link href="/get-quote" className="group relative px-8 py-4 bg-[#39b54a] text-white font-black rounded-lg overflow-hidden transition-all hover:shadow-[0_20px_40px_-10px_rgba(57,181,74,0.5)] active:scale-95">
              <span className="relative z-10">LET'S GET STARTED</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Highly Rated on</span>
              <Link href="https://www.trustpilot.com/review/puredesignhub.com" target="_blank" className="opacity-60 hover:opacity-100 transition-opacity">
                <Image src={Trustpilot} alt="Trustpilot" width={140} height={35} className="brightness-0 invert" />
              </Link>
            </div>
          </div>
        </div>

        {/* Banner Form Right */}
        <div className="w-full max-w-lg lg:ml-auto headline-reveal opacity-0" style={{ animationDelay: "0.5s" }}>
          <div className="relative group">
            {/* Modern Layered Form Glow */}
            <div className="absolute -inset-4 bg-[#2a8b3a]/40 blur-[60px] opacity-100 animate-pulse -z-10 rounded-3xl" />
            <div className="absolute -inset-10 bg-[#2a8b3a]/25 blur-[120px] opacity-80 -z-20 rounded-full" />

            <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-[2px] bg-[#39b54a]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#39b54a]">Direct Inquiry</span>
                </div>
                <h2 className="text-3xl font-black text-white">Start Your <span className="text-[#39b54a]">Project</span></h2>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1">Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      placeholder="John Doe"
                      className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-[#39b54a] transition-all text-white text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      placeholder="john@example.com"
                      className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-[#39b54a] transition-all text-white text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      placeholder="+1 234 567 890"
                      className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-[#39b54a] transition-all text-white text-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
                      className="w-full h-12 px-4 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-[#39b54a] transition-all text-white text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#151515]">Select Service</option>
                      {servicesList.map((s) => (
                        <option key={s} value={s} className="bg-[#151515]">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-1">Project Brief</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about your project..."
                    rows={3}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-[#39b54a] transition-all text-white text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#39b54a] text-white font-black rounded-lg shadow-lg hover:shadow-[0_15px_30px_-5px_rgba(57,181,74,0.4)] hover:-translate-y-0.5 transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest text-sm flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {successMsg && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-[#39b54a] text-xs font-bold text-center animate-fade-in">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-bold text-center animate-fade-in">
                  {errorMsg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
