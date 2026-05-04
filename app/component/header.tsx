"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.svg";

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

  // helper to mark active links
  const linkClass = (href: string) =>
    `text-[17px] font-bold transition-colors duration-300 hover:text-[#F75126] ${
      pathname === href ? "text-[#F75126]" : "text-[#272D4E]"
    }`;
  const homeLinkClass = `text-[17px] font-bold transition-colors duration-300 hover:text-[#F75126] ${
    pathname === "/" || pathname === "/home" ? "text-[#F75126]" : "text-[#272D4E]"
  }`;

  return (
    <header className="flex items-center justify-between xl:py-6 py-4 px-4 sm:px-6 lg:px-8 2xl:px-14 relative z-40">
      {/* Logo */}
      <Link href="/" className="logo group flex items-center">
        <Image
          src={Logo}
          alt="Logo"
          width={160}
          height={62}
          priority
          className="w-[125px] sm:w-[138px] md:w-[150px] xl:w-[160px] h-auto object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex items-center 2xl:gap-10 gap-5 xl:mr-auto xl:ml-16 2xl:ml-24">
        <li>
          <Link href="/" className={homeLinkClass}>
            Home
          </Link>
        </li>

        {/* Services Dropdown */}
        <li ref={desktopDropdownRef} className="relative">
          <button
            onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
            className={`flex items-center gap-1 text-[17px] font-bold transition-colors duration-300 hover:text-[#F75126] ${
              pathname.startsWith("/services")
                ? "text-[#F75126]"
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
            <ul className="absolute left-0 top-full mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-[#F75126] hover:text-white ${
                      pathname === item.href
                        ? "bg-[#F75126] text-white"
                        : "text-gray-700"
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
        <Link
          href="/get-quote"
          className={`text-base font-bold px-5 py-2.5 rounded-lg border-2 transition-all duration-300 hover:-translate-y-0.5 ${
            pathname === "/get-started"
              ? "bg-[#F75126] text-white border-[#F75126]"
              : "bg-[#F75126] text-white border-[#F75126] hover:bg-white hover:text-[#F75126]"
          }`}
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden p-2.5 rounded-lg border border-gray-200 bg-white text-[#272D4E] shadow-sm transition-all duration-300 hover:border-[#F75126] hover:text-[#F75126] hover:shadow-md"
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

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`xl:hidden fixed inset-0 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile + Tablet Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[88%] max-w-[380px] bg-white shadow-2xl z-50 xl:hidden transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src={Logo}
              alt="Logo"
              width={142}
              height={54}
              className="w-[128px] sm:w-[136px] h-auto object-contain"
            />
          </Link>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md text-[#272D4E] hover:bg-gray-100 transition-colors"
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        {/* Close Button */}
        {/* Sidebar Links */}
        <ul className="flex flex-col gap-1 px-4 py-5 overflow-y-auto h-[calc(100vh-82px)]">
          <li>
            <Link href="/" className="block px-3 py-3 rounded-lg text-[17px] font-bold text-[#272D4E] hover:text-[#F75126] hover:bg-[#F75126]/5 transition-all duration-300">
              Home
            </Link>
          </li>

          {/* Services Accordion */}
          <li>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-3 rounded-lg text-[17px] font-bold text-[#272D4E] hover:text-[#F75126] hover:bg-[#F75126]/5 transition-all duration-300"
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
                          ? "bg-[#F75126] text-white"
                          : "text-gray-700 hover:text-[#F75126] hover:bg-[#F75126]/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li><Link href="/about-us" className="block px-3 py-3 rounded-lg text-[17px] font-bold text-[#272D4E] hover:text-[#F75126] hover:bg-[#F75126]/5 transition-all duration-300">About Us</Link></li>
          <li><Link href="/portfolio" className="block px-3 py-3 rounded-lg text-[17px] font-bold text-[#272D4E] hover:text-[#F75126] hover:bg-[#F75126]/5 transition-all duration-300">Portfolio</Link></li>
          <li><Link href="/contact-us" className="block px-3 py-3 rounded-lg text-[17px] font-bold text-[#272D4E] hover:text-[#F75126] hover:bg-[#F75126]/5 transition-all duration-300">Contact Us</Link></li>
          <li><Link href="/pricing" className="block px-3 py-3 rounded-lg text-[17px] font-bold text-[#272D4E] hover:text-[#F75126] hover:bg-[#F75126]/5 transition-all duration-300">Pricing</Link></li>

          <li className="mt-2 px-3">
            <Link
              href="/get-quote"
              className="text-base text-white font-bold bg-[#F75126] px-5 py-3 rounded-lg inline-flex hover:shadow-[0_14px_28px_rgba(247,81,38,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
}