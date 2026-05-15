"use client";
import React, { useState, FormEvent, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "../component/footer";
import Header from "../component/header";
import BannerImage from "@/public/assets/images/ChatGPT_Image_May_13_2026_08_30_35_AM.png";
import "react-phone-input-2/lib/style.css";
import { useGeo } from "../context/GeoContext";
import { buildTelHref } from "@/app/lib/siteContact";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const inputClassName =
  "rounded-lg bg-[color:var(--surface)] py-3.5 px-4 sm:px-5 w-full border-2 border-[color:var(--border)] text-[color:var(--brand-ink)] placeholder:text-[color:var(--muted)] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[color:color-mix(in_srgb,var(--brand-primary)_50%,var(--border))] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--brand-primary)_14%,transparent)]";

const phoneInputFieldClass =
  "!rounded-lg !bg-[color:var(--surface)] !py-3.5 !pl-[3.25rem] sm:!pl-14 !pr-4 sm:!pr-5 !w-full !min-h-[48px] !border-2 !border-[color:var(--border)] !text-[color:var(--brand-ink)] focus:!border-[color:color-mix(in_srgb,var(--brand-primary)_50%,var(--border))] focus:!shadow-[0_0_0_3px_color-mix(in_srgb,var(--brand-primary)_14%,transparent)] !outline-none";

const phoneFlagButtonClass =
  "!rounded-l-lg !border-0 !bg-[color:var(--surface-2)] hover:!bg-[color:color-mix(in_srgb,var(--surface-2)_85%,var(--brand-primary))]";

const GetQuote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.service.trim()) newErrors.service = "Service is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await fetch("https://puredesignhub.com/api/get-quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || `Server error: ${res.status}`);
      }

      setSuccessMsg(data?.message || "Thank you! Your request has been submitted successfully.");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const { phone } = useGeo();
  const callHref = useMemo(() => buildTelHref(phone), [phone]);
  return (


    <>
      <section className="relative min-h-full w-full overflow-hidden border-b border-[color:var(--border)] bg-[color:var(--surface)]">
        <Header />

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 px-4 py-10 sm:gap-12 sm:px-6 md:py-14 lg:grid-cols-12 lg:items-stretch lg:gap-x-10 lg:gap-y-12 lg:px-10 lg:py-16 xl:px-16 xl:py-20 2xl:px-24 2xl:py-24">
          <div className="order-1 flex min-h-0 w-full min-w-0 lg:order-0 lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-5 md:max-w-xl md:gap-6 lg:max-w-none"
            >
              <header className="mb-1 md:mb-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--brand-primary)_22%,var(--border))] bg-[color:color-mix(in_srgb,var(--brand-primary)_8%,var(--surface))] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-primary)]"
                    aria-hidden
                  />
                  Request a quote
                </div>
                <h1 className="text-3xl font-black leading-[1.12] text-[color:var(--brand-ink)] sm:text-4xl md:text-[2.35rem]">
                  Tell us about your{" "}
                  <span className="text-[color:var(--brand-primary)]">project</span>
                </h1>
                <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base">
                  Share a few details and our team will get back within 24 hours with tailored next steps.
                </p>
              </header>

              {/* Name */}
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={inputClassName}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
              </div>

              {/* Email + Phone */}
              <div className="flex flex-col items-center gap-4 lg:flex-row">
                <div className="get-quote-phone-wrap w-full">
                  <PhoneInput
                    country={"us"}
                    value={form.phone}
                    onChange={(phone) => setForm({ ...form, phone })}
                    placeholder="Phone number"
                    inputProps={{ name: "phone", autoComplete: "tel" }}
                    containerClass="!w-full"
                    inputClass={phoneInputFieldClass}
                    buttonClass={phoneFlagButtonClass}
                    dropdownClass="!rounded-lg !bg-[color:var(--surface)] !text-[color:var(--brand-ink)] !border !border-[color:var(--border)] !shadow-lg"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={inputClassName}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Service + Reference Video */}
              <div className="w-full">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClassName} appearance-none cursor-pointer bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-11`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a2b3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  }}
                >
                  <option value="">Select Service</option>
                  <option value="WebDevelopment">Web Development</option>
                  <option value="AppDevelopment">App Development</option>
                  <option value="BrandingDesign">Branding Design</option>
                  <option value="ContentWriting">Content Writing</option>
                  <option value="SocialMediaMarketing">Social Media Marketing</option>
                  <option value="SEOServices">SEO Services</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Message */}
              <div className="w-full">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us more about your project"
                  className={`${inputClassName} resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>


              <div className="w-full">
                <p className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2.5 text-[13px] leading-relaxed text-[color:var(--brand-ink)] shadow-sm sm:px-4 sm:text-sm">
                  By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message &amp; data rates may apply. Message frequency may vary. Reply Help for more information. You can reply STOP to opt-out of further messaging.
                </p>
              </div>

              {successMsg && (
                <p className="rounded-lg border border-green-200 bg-green-100 px-4 py-3 text-sm text-green-700">
                  {successMsg}
                </p>
              )}
              {errorMsg && (
                <p className="rounded-lg border border-red-200 bg-red-100 px-4 py-3 text-sm text-red-700">
                  {errorMsg}
                </p>
              )}

              {/* Submit Button */}
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <button
                  type="submit"
                  className="globalBtn !rounded-xl bg-[color:var(--brand-primary)] text-white inline-flex w-fit px-10 py-4 text-base shadow-[0_14px_36px_color-mix(in_srgb,var(--brand-primary)_38%,transparent)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_color-mix(in_srgb,var(--brand-primary)_42%,transparent)] sm:px-14 sm:py-[1.1rem] sm:text-lg"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "SEND"}
                </button>
                <div className="hidden h-9 w-px shrink-0 bg-[color:var(--border)] sm:inline-flex" aria-hidden />
                <span className="text-center text-[15px] text-[color:var(--brand-ink)] sm:text-left sm:text-base">
                  We can respond within 24 hours. If you prefer to speak by
                  phone, call us on{" "}
                  <a
                    href={callHref}
                    className="font-bold text-[color:var(--brand-primary)] underline decoration-[color:color-mix(in_srgb,var(--brand-primary)_35%,transparent)] underline-offset-2 hover:decoration-[color:var(--brand-primary)]"
                  >
                    {phone}
                  </a>
                </span>
              </div>
            </form>
          </div>

          {/* Illustration: same row height as form on large screens */}
          <div className="order-0 flex w-full items-center justify-center lg:order-1 lg:col-span-5 lg:min-h-0 lg:items-stretch lg:justify-end">
            <div className="relative flex h-[min(42vh,20rem)] w-full max-w-[18rem] items-center justify-center sm:h-[min(44vh,22rem)] sm:max-w-xs md:max-w-sm lg:h-full lg:min-h-0 lg:w-full lg:max-w-none lg:items-center lg:justify-end lg:pl-4 xl:pl-6">
              <Image
                src={BannerImage}
                alt="Get a Quote"
                width={640}
                height={640}
                sizes="(max-width: 1024px) 85vw, (max-width: 1400px) 38vw, 400px"
                decoding="async"
                loading="lazy"
                className="max-h-full w-auto max-w-full object-contain object-center lg:ml-auto lg:max-h-full lg:object-right"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GetQuote;
