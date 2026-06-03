import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "@/public/assets/images/Png_2.png";
import PaymentIcon1 from "@/public/assets/images/payment_icon1.png";
import PaymentIcon2 from "@/public/assets/images/payment_icon2.png";
import SmallCircle from "@/public/assets/images/smallCircle.png";
import { useGeo } from "@/app/context/GeoContext";
import {
  SITE_SUPPORT_EMAIL,
  buildTelHref,
  buildWhatsAppHref,
} from "@/app/lib/siteContact";

const footerNavLink =
  "group/nav relative inline-block py-1 text-base md:text-lg font-semibold text-white/85 transition-all duration-300 ease-out hover:text-[color:var(--brand-primary)] hover:translate-x-1";

const footerNavLinkBar =
  "absolute left-0 bottom-0 h-[2px] w-0 rounded-full bg-[color:var(--brand-primary)] transition-[width] duration-300 ease-out group-hover/nav:w-full";

const footerHeading =
  "text-xs font-black tracking-[0.2em] uppercase text-[color:var(--brand-primary)] mb-5";

const socialBtn =
  "group/social w-11 h-11 md:w-[47px] md:h-[47px] rounded-full bg-[color:var(--brand-primary)] flex items-center justify-center text-[color:var(--brand-accent)] transition-all duration-300 ease-out hover:scale-110 hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--brand-primary)_45%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_88%,#000)] hover:text-white active:scale-95";

function IconLocation({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 21c-4.418-3.479-8-7.238-8-11a8 8 0 1116 0c0 3.762-3.582 7.521-8 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.25" fill="currentColor" />
    </svg>
  );
}

function IconEnvelope({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 6h16v12H4V6Zm0 0 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FooterNavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="mb-1">
      <Link href={href} className={footerNavLink}>
        <span className={footerNavLinkBar} aria-hidden />
        {children}
      </Link>
    </li>
  );
}

export default function Footer() {
  const { phone, address, icon } = useGeo();
  const whatsappHref = useMemo(() => buildWhatsAppHref(phone), [phone]);
  const callHref = useMemo(() => buildTelHref(phone), [phone]);

  return (
    <>
      <section className="group relative overflow-hidden 2xl:px-80 xl:px-55 lg:p-15 md:p-10 p-4 bg-[color:var(--brand-primary)] transition-all duration-500">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        <div className="relative grid md:grid-cols-3 grid-cols-1 items-center justify-center xl:gap-20 lg:gap-10 gap-5">
          <p className="title3 !text-white md:col-span-2 transition-all duration-500 group-hover:translate-x-1">
            Your business deserves more than just a website. get fully customizable Website Services designed for growth.
          </p>
          <Link
            href="/get-quote"
            className="md:px-11 px-6 2xl:py-6 md:py-4 py-3 md:text-[18px] text-sm font-bold bg-[color:var(--brand-primary)] text-white border-white border-2 w-fit rounded-[60px] transition-all duration-300 ease-out hover:bg-white hover:text-[color:var(--brand-primary)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1"
          >
            Get Started
          </Link>
        </div>
      </section>

      <footer className="relative border-t border-white/[0.05] bg-[#030303] text-white 2xl:px-45 xl:px-20 px-4 xl:pt-20 pt-12 pb-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_srgb,var(--brand-primary)_12%,transparent),transparent_55%)]" />

        {/* Filhaal: decorative corner image band */}
        <Image
          src={SmallCircle}
          title="circle"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          decoding="async"
          loading="lazy"
          className="w-12 h-12 object-cover object-center absolute -top-6 right-40 opacity-80"
        />
       

        <div className="relative grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 items-start gap-12 xl:gap-10 mb-12">
          <div>
            <Link href="/" className="inline-flex transition-opacity duration-300 hover:opacity-90">
              <Image
                src={FooterLogo}
                title="Logo"
                alt="Pure Design Hub"
                width={220}
                height={60}
                decoding="async"
                loading="lazy"
                className="w-auto h-auto mb-7"
              />
            </Link>
            <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-sm">
              We conduct our business with honesty and transparency, building trust with our clients and partners.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col items-start gap-12 lg:gap-10">
            <ul className="min-w-0">
              <li className={footerHeading}>Company</li>
              <FooterNavItem href="/about-us">About Us</FooterNavItem>
              <FooterNavItem href="/portfolio">Portfolio</FooterNavItem>
              <FooterNavItem href="/contact-us">Contact Us</FooterNavItem>
              <FooterNavItem href="/pricing">Pricing</FooterNavItem>
              <FooterNavItem href="/faqs">FAQs</FooterNavItem>
              <li className="mb-1">
                <a href="/blogs" className={footerNavLink}>
                  <span className={footerNavLinkBar} aria-hidden />
                  Blogs
                </a>
              </li>
            </ul>
            <ul className="min-w-0">
              <li className={footerHeading}>Services</li>
              <FooterNavItem href="/services/branding-design">Branding</FooterNavItem>
              <FooterNavItem href="/services/web-development">Web Development</FooterNavItem>
              <FooterNavItem href="/services/app-development">App Development</FooterNavItem>
              <FooterNavItem href="/services/content-writing">Content Writing</FooterNavItem>
              <FooterNavItem href="/services/social-media-marketing">Social Media Marketing</FooterNavItem>
              <FooterNavItem href="/services/seo-services">SEO Services</FooterNavItem>
            </ul>
          </div>

          <ul>
            <li className={footerHeading}>Location</li>
            <li className="text-base md:text-lg text-white/80 mb-6 flex items-start gap-3">
              <IconLocation className="h-7 w-7 shrink-0 mt-0.5 text-[color:var(--brand-primary)] opacity-95" />
              <span>{address}</span>
            </li>
            <li className="flex flex-col items-start gap-4">
              <Image
                src={PaymentIcon1}
                title="DMCA Protected"
                alt="DMCA Protected"
                width={0}
                height={0}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                className="w-auto h-11 object-contain object-center opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
              <Image
                src={PaymentIcon2}
                title="McAfee Secure"
                alt="McAfee Secure"
                width={0}
                height={0}
                sizes="100vw"
                decoding="async"
                loading="lazy"
                className="w-auto h-11 object-contain object-center opacity-90 transition-opacity duration-300 hover:opacity-100"
              />
            </li>
          </ul>

          <ul>
            <li className={footerHeading}>Get In Touch</li>
            <li className="text-base md:text-lg text-white/80 mb-6 flex items-start gap-3">
              <IconEnvelope className="h-7 w-7 shrink-0 mt-0.5 text-[color:var(--brand-primary)] opacity-95" />
              <Link
                href={`mailto:${SITE_SUPPORT_EMAIL}`}
                className="transition-colors duration-300 hover:text-[color:var(--brand-primary)]"
              >
                {SITE_SUPPORT_EMAIL}
              </Link>
            </li>
            <li className="text-base md:text-lg text-white/80 mb-8 flex items-start gap-3">
              <Image
                src={icon}
                title="Phone"
                alt=""
                width={0}
                height={0}
                decoding="async"
                loading="lazy"
                className="w-7 h-5 object-cover object-center mt-1 shrink-0 opacity-90"
              />
              <Link
                href={callHref}
                className="transition-colors duration-300 hover:text-[color:var(--brand-primary)]"
              >
                {phone}
              </Link>
            </li>
            <li className="flex flex-wrap items-center gap-2.5">
              <Link
                href="https://www.facebook.com/profile.php?id=61577469429417"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBtn}
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 shrink-0 transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/puredesignhubofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className={socialBtn}
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 shrink-0 transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className={socialBtn} aria-label="WhatsApp">
                <svg className="w-6 h-6 shrink-0 transition-colors duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative border-t border-white/10 pt-8">
          <p className="text-center text-sm md:text-base text-white/55">
            COPYRIGHT PURE DESIGN HUB 2026 —{" "}
            <Link
              href="/terms-and-conditions"
              className="text-white/75 underline-offset-4 decoration-white/30 underline transition-colors duration-300 hover:text-[color:var(--brand-primary)] hover:decoration-[color:var(--brand-primary)]"
            >
              Terms &amp; Conditions
            </Link>
            {" · "}
            <Link
              href="/privacypolicy"
              className="text-white/75 underline-offset-4 decoration-white/30 underline transition-colors duration-300 hover:text-[color:var(--brand-primary)] hover:decoration-[color:var(--brand-primary)]"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
