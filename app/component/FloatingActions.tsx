"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useGeo } from "@/app/context/GeoContext";
import FloatingQuoteWidget from "@/app/component/FloatingQuoteWidget";

function normalizeDigits(s: string) {
  return (s || "").replace(/[^\d]/g, "");
}

function buildWhatsAppLink(phoneRaw: string) {
  const digits = normalizeDigits(phoneRaw);
  if (!digits) return "https://wa.me/";
  return `https://wa.me/${digits}`;
}

export default function FloatingActions() {
  const pathname = usePathname();
  const geo = useGeo();

  const callHref = useMemo(() => {
    const digits = normalizeDigits(geo.phone);
    return digits ? `tel:+${digits}` : "tel:";
  }, [geo.phone]);

  const waHref = useMemo(() => buildWhatsAppLink(geo.phone), [geo.phone]);

  // Avoid stacking another form on the dedicated page
  const hideQuoteWidget = pathname === "/get-quote" || pathname?.startsWith("/checkout");

  return (
    <>
      {/* Desktop: right-center stack (tab + icons) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-end gap-3 pr-3">
        {!hideQuoteWidget ? <FloatingQuoteWidget /> : null}

        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.44 0 .06 5.38.06 11.98c0 2.11.55 4.17 1.6 6l-1.7 6.2 6.35-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.6 0 11.98-5.38 11.98-11.98 0-3.2-1.25-6.2-3.51-8.52ZM12.04 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.25C2.1 6.49 6.55 2.04 12.04 2.04c2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.49-4.45 9.94-9.91 9.94Zm5.77-7.41c-.32-.16-1.87-.92-2.16-1.02-.29-.11-.5-.16-.71.16-.21.32-.82 1.02-1 1.23-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.31.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.67.77.25 1.48.21 2.04.13.62-.09 1.87-.76 2.13-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </a>

        <a
          href={callHref}
          className="w-12 h-12 rounded-full bg-[color:var(--brand-primary)] text-white grid place-items-center shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Call us"
          title={`Call ${geo.phone}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.98.37 1.94.7 2.86a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.21-1.25a2 2 0 0 1 2.11-.45c.92.33 1.88.57 2.86.7A2 2 0 0 1 22 16.9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Mobile: left bottom — Tawk chat sits bottom-right; avoids overlap */}
      <div className="fixed left-4 bottom-6 z-[60] flex flex-col gap-3 lg:hidden">
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.44 0 .06 5.38.06 11.98c0 2.11.55 4.17 1.6 6l-1.7 6.2 6.35-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.6 0 11.98-5.38 11.98-11.98 0-3.2-1.25-6.2-3.51-8.52ZM12.04 21.9h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.22-3.77.99 1.01-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.25C2.1 6.49 6.55 2.04 12.04 2.04c2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.9 7.02c0 5.49-4.45 9.94-9.91 9.94Zm5.77-7.41c-.32-.16-1.87-.92-2.16-1.02-.29-.11-.5-.16-.71.16-.21.32-.82 1.02-1 1.23-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.62-.52-.54-.71-.55h-.6c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.31.16.21 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.67.77.25 1.48.21 2.04.13.62-.09 1.87-.76 2.13-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </a>

        <a
          href={callHref}
          className="w-12 h-12 rounded-full bg-[color:var(--brand-primary)] text-white grid place-items-center shadow-xl transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Call us"
          title={`Call ${geo.phone}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.98.37 1.94.7 2.86a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.21-1.25a2 2 0 0 1 2.11-.45c.92.33 1.88.57 2.86.7A2 2 0 0 1 22 16.9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </>
  );
}
