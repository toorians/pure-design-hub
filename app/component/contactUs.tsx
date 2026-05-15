"use client";

import Image from "next/image";
import React, {
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGeo } from "@/app/context/GeoContext";
import { SITE_SUPPORT_EMAIL, buildTelHref } from "@/app/lib/siteContact";

gsap.registerPlugin(ScrollTrigger);

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactUsProps = {
  /** When set (e.g. contact page), replaces the default hero heading */
  title?: ReactNode;
  /** Optional intro under the heading; empty string hides the paragraph */
  text?: string;
  /** Optional image shown in the left column */
  imagePath?: string;
};

const defaultIntro =
  "Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.";

export default function ContactUs({
  title,
  text,
  imagePath,
}: ContactUsProps = {}) {
  const { phone } = useGeo();
  const callHref = useMemo(() => buildTelHref(phone), [phone]);

  const introText = text !== undefined ? text : defaultIntro;

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 32,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".contact-form-card", {
        opacity: 0,
        y: 28,
        scale: 0.985,
        duration: 0.75,
        ease: "power2.out",
        delay: 0.08,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const fieldClass =
    "w-full rounded-xl bg-[color:var(--surface-2)] border-2 border-transparent py-3.5 px-5 outline-none font-semibold text-[color:var(--brand-ink)] placeholder:text-[color:var(--muted)] transition-[border-color,background-color,box-shadow,transform] duration-200 ease-out focus:border-[color:color-mix(in_srgb,var(--brand-primary)_35%,transparent)] focus:bg-[color:var(--surface)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--brand-primary)_14%,transparent)] hover:bg-[color:var(--surface)]";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Partial<FormValues> = {};
    if (!values.name.trim()) newErrors.name = "Name is required";
    if (!values.email.trim()) newErrors.email = "Email is required";
    if (!values.phone.trim()) newErrors.phone = "Phone is required";
    if (!values.service.trim()) newErrors.service = "Service is required";
    if (!values.message.trim()) newErrors.message = "Message is required";
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
        body: JSON.stringify({ ...values, formName: "Contact Us Form" }),
      });

      const data = await res.json();
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || `Server error: ${res.status}`);
      }

      setSuccessMsg(
        data?.message ||
          "Thank you! Your message has been sent successfully."
      );
      setValues({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[color:var(--surface)] py-24 md:py-28 lg:py-36 xl:py-40 px-4 md:px-12 lg:px-[150px]"
    >
      {/* Background: soft wash */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_12%_18%,color-mix(in_srgb,var(--brand-primary)_10%,transparent),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_88%_82%,color-mix(in_srgb,var(--brand-accent)_8%,transparent),transparent_52%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="contact-reveal relative lg:self-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--brand-primary)_22%,var(--border))] bg-[color:color-mix(in_srgb,var(--brand-primary)_8%,var(--surface))] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--brand-primary)]">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-primary)]"
                aria-hidden
              />
              Get in touch
            </div>

            <h2 className="text-3xl font-black leading-[1.15] text-[color:var(--brand-ink)] sm:text-4xl md:text-[2.5rem] md:leading-[1.12]">
              {title ?? (
                <>
                  Let&apos;s Start a{" "}
                  <span className="text-[color:var(--brand-primary)]">
                    Conversation
                  </span>
                </>
              )}
            </h2>

            {imagePath ? (
              <div className="relative mt-8 w-full max-w-lg">
                <Image
                  src={imagePath}
                  alt="Customer support — we are here to help"
                  width={640}
                  height={480}
                  className="h-auto w-full object-contain object-left"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}

            {introText ? (
              <p className="mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-[color:var(--muted)] sm:text-base">
                {introText}
              </p>
            ) : null}

            <div className="mt-10 max-w-md space-y-6">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[color:var(--muted)]">
                    Email us
                  </div>
                  <a
                    href={`mailto:${SITE_SUPPORT_EMAIL}`}
                    className="mt-1 block truncate text-base font-bold text-[color:var(--brand-ink)] underline-offset-4 hover:underline sm:text-lg"
                  >
                    {SITE_SUPPORT_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--brand-primary)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-[color:var(--muted)]">
                    Call us
                  </div>
                  <a
                    href={callHref}
                    className="mt-1 block text-base font-bold text-[color:var(--brand-ink)] underline-offset-4 hover:underline sm:text-lg"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-reveal">
            <form
              onSubmit={handleSubmit}
              ref={formRef}
              className="contact-form-card bg-[color:var(--surface)] rounded-2xl p-7 md:p-10 lg:p-11 border border-[color:var(--border)] shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-[border-color] duration-300 ease-out focus-within:border-[color:color-mix(in_srgb,var(--brand-primary)_15%,var(--border))]"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[color:var(--muted)] ml-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={values.name}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs ml-2">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[color:var(--muted)] ml-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={values.email}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs ml-2">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[color:var(--muted)] ml-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1..."
                    value={values.phone}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs ml-2">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[color:var(--muted)] ml-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    className={`${fieldClass} appearance-none cursor-pointer bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-11`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a2b3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="WebDevelopment">Web Development</option>
                    <option value="AppDevelopment">App Development</option>
                    <option value="BrandingDesign">Branding Design</option>
                    <option value="ContentWriting">Content Writing</option>
                    <option value="SEOServices">SEO Services</option>
                    <option value="SocialMediaMarketing">
                      Social Media Marketing
                    </option>
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-xs ml-2">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-[color:var(--muted)] ml-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={values.message}
                    onChange={handleChange}
                    className={`${fieldClass} resize-none min-h-[140px]`}
                    rows={4}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs ml-2">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-[color:var(--brand-primary)] text-white py-4 md:py-[1.125rem] font-black text-base md:text-lg shadow-[0_14px_36px_color-mix(in_srgb,var(--brand-primary)_38%,transparent)] transition-[transform,box-shadow,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_44px_color-mix(in_srgb,var(--brand-primary)_42%,transparent)] active:translate-y-0 active:scale-[0.99] active:shadow-md disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0"
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </button>
              </div>

              {successMsg && (
                <p className="text-green-600 text-center font-bold mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {successMsg}
                </p>
              )}
              {errorMsg && (
                <p className="text-red-600 text-center font-bold mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {errorMsg}
                </p>
              )}

              <p className="text-[10px] text-[color:var(--muted)] text-center mt-8 leading-relaxed">
                By submitting this form you consent to be contacted by SMS.
                Message & data rates may apply. Reply STOP to opt-out.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
