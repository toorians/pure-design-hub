"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CallUsNowWidget from "@/app/component/CallUsNowWidget";
// import Logo from "@/public/assets/images/logo.svg";
import Logo from "@/public/assets/images/Png_2.png";
import LogoBlack from "@/public/assets/images/Png.png";

export default function Homw() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLLIElement | null>(null);

  const serviceLinks = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/app-development", label: "App Development" },
    { href: "/services/branding-design", label: "Branding Design" },
    { href: "/services/content-writing", label: "Content Writing" },
    { href: "/services/social-media-marketing", label: "Social Media Marketing" },
    { href: "/services/seo-services", label: "SEO Services" },
  ];

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /** Dark page backgrounds need light nav text for contrast. */
  const isDarkHeaderBg = pathname === "/" || pathname === "/home" || pathname.startsWith("/services");
  const navMuted = isDarkHeaderBg ? "text-white/90" : "text-[color:var(--foreground)]";

  /** Dark / green hero pages: lighter mark (Png_2). All other routes: dark logo (Png.png). Desktop xl+ only. */
  const currentLogo = isDarkHeaderBg ? Logo : LogoBlack;

  // helper to mark active links
  const linkClass = (href: string) =>
    `text-[17px] font-bold transition-colors duration-300 hover:text-[color:var(--brand-primary)] ${
      pathname === href ? "text-[color:var(--brand-primary)]" : navMuted
    }`;
  const homeLinkClass = `text-[17px] font-bold transition-colors duration-300 hover:text-[color:var(--brand-primary)] ${
    pathname === "/" || pathname === "/home"
      ? "text-[color:var(--brand-primary)]"
      : navMuted
  }`;

  return (
    <header className="flex items-center justify-between xl:py-6 py-4 px-4 sm:px-6 lg:px-8 2xl:px-14 relative z-40">
      {/* Logo */}
      <Link
        href="/"
        className="logo group relative block h-[52px] w-[182px] shrink-0 sm:h-[56px] sm:w-[196px] md:h-[58px] md:w-[208px] xl:h-[62px] xl:w-[220px]"
      >
        <Image
          src={currentLogo}
          alt="Pure Design Hub"
          fill
          priority
          className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.03] xl:hidden"
          sizes="(max-width:1279px) 220px, 0px"
        />
        <Image
          src={currentLogo}
          alt="Pure Design Hub"
          fill
          className="hidden object-contain object-left transition-transform duration-300 group-hover:scale-[1.03] xl:block"
          sizes="(min-width:1280px) 220px, 0px"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex items-center 2xl:gap-10 gap-5 mx-auto">
        <li>
          <Link href="/" className={homeLinkClass}>
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li ref={desktopDropdownRef} className="relative">
          <button
            onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
            className={`flex items-center gap-1 text-[17px] font-bold transition-colors duration-300 hover:text-[color:var(--brand-primary)] ${
              pathname.startsWith("/services")
                ? "text-[color:var(--brand-primary)]"
                : isDarkHeaderBg
                  ? "text-white/90"
                  : "text-[#272D4E]"
            }`}
          >
            Services
            <svg
              className={`w-4 h-4 transform transition-transform ${
                desktopServicesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {desktopServicesOpen && (
            <ul className="absolute left-0 top-full mt-2 w-56 shadow-xl rounded-xl border py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 theme-surface theme-border">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-[color:var(--brand-primary)] hover:text-white ${
                      pathname === item.href
                          ? "bg-[color:var(--brand-primary)] text-white"
                        : "opacity-90"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link href="/about-us" className={linkClass("/about-us")}>
            About Us
          </Link>
        </li>

        <li>
          <Link href="/portfolio" className={linkClass("/portfolio")}>
            Portfolio
          </Link>
        </li>

        <li>
          <Link href="/contact-us" className={linkClass("/contact-us")}>
            Contact Us
          </Link>
        </li>

        <li>
          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
        </li>

      </ul>

      {/* Right Side */}
      <div className="hidden xl:flex items-center xl:gap-6 gap-4">
        <CallUsNowWidget variant="header" />
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden flex items-center gap-2 shrink-0">
        <CallUsNowWidget variant="header" compact micro className="min-w-0 max-w-[min(52vw,11rem)] sm:max-w-[12.5rem]" />
        <button
          onClick={() => setIsOpen(true)}
          className={`p-2.5 rounded-lg border shadow-sm transition-all duration-300 hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)] hover:shadow-md ${
            isDarkHeaderBg
              ? "border-white/25 bg-white/10 text-white hover:bg-white/15"
              : "theme-border theme-surface"
          }`}
          aria-label="Open navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`xl:hidden fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile + Tablet Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[88%] max-w-[380px] shadow-2xl z-50 xl:hidden transform theme-surface ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b theme-border">
          <Link href="/" className="relative block h-[52px] w-[150px] shrink-0 sm:h-[56px] sm:w-[162px]" onClick={() => setIsOpen(false)}>
            <Image
              src={LogoBlack}
              alt="Pure Design Hub"
              fill
              className="object-contain object-left"
              sizes="162px"
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-black/5 transition-colors"
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* Close Button */}
        {/* Sidebar Links */}
        <ul className="flex flex-col gap-1 px-4 py-5 overflow-y-auto h-[calc(100vh-82px)]">
          <li>
            <Link href="/" className="block px-3 py-3 rounded-lg text-[17px] font-bold hover:text-[color:var(--brand-primary)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_5%,transparent)] transition-all duration-300">
              Home
            </Link>
          </li>

          {/* Services Accordion */}
          <li>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-[17px] font-bold hover:text-[color:var(--brand-primary)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_5%,transparent)] transition-all duration-300"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                mobileServicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <ul className="overflow-hidden pl-4 pr-2 pt-1 pb-2 flex flex-col gap-1">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? "bg-[color:var(--brand-primary)] text-white"
                          : "hover:text-[color:var(--brand-primary)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_5%,transparent)]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li><Link href="/about-us" className="block px-3 py-3 rounded-lg text-[17px] font-bold hover:text-[color:var(--brand-primary)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_6%,transparent)] transition-all duration-300">About Us</Link></li>
          <li><Link href="/portfolio" className="block px-3 py-3 rounded-lg text-[17px] font-bold hover:text-[color:var(--brand-primary)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_6%,transparent)] transition-all duration-300">Portfolio</Link></li>
          <li><Link href="/contact-us" className="block px-3 py-3 rounded-lg text-[17px] font-bold hover:text-[color:var(--brand-primary)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_6%,transparent)] transition-all duration-300">Contact Us</Link></li>
          <li><Link href="/pricing" className="block px-3 py-3 rounded-lg text-[17px] font-bold hover:text-[color:var(--brand-primary)] hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_6%,transparent)] transition-all duration-300">Pricing</Link></li>

          <li className="mt-2 px-3">
            <CallUsNowWidget
              variant="header"
              className="w-full max-w-full justify-center"
              onNavigate={() => setIsOpen(false)}
            />
          </li>

        </ul>
      </div>
    </header>
  );
}