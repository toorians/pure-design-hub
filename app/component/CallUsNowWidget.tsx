"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useGeo } from "@/app/context/GeoContext";

function normalizeDigits(s: string) {
  return (s || "").replace(/[^\d]/g, "");
}

export type CallUsNowWidgetProps = {
  variant?: "header" | "floating";
  compact?: boolean;
  /** Extra-small header CTA (mobile nav bar next to menu). */
  micro?: boolean;
  className?: string;
  onNavigate?: () => void;
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.98.37 1.94.7 2.86a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.21-1.25a2 2 0 0 1 2.11-.45c.92.33 1.88.57 2.86.7A2 2 0 0 1 22 16.9Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CallUsNowWidget({
  variant = "header",
  compact = false,
  micro = false,
  className = "",
  onNavigate,
}: CallUsNowWidgetProps) {
  const pathname = usePathname();
  const { phone } = useGeo();

  const callHref = useMemo(() => {
    const digits = normalizeDigits(phone);
    return digits ? `tel:+${digits}` : `tel:${phone.replace(/\s+/g, "")}`;
  }, [phone]);

  const displayPhone = useMemo(() => phone.replace(/\s+/g, " ").trim(), [phone]);

  if (pathname?.startsWith("/checkout")) return null;

  const isFloating = variant === "floating";

  const root = [
    "cta-call-root group relative flex max-w-full min-w-0 items-center no-underline outline-none transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-[color:var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]",
    compact && micro
      ? "max-[420px]:flex-row max-[420px]:items-center max-[420px]:gap-1 max-[420px]:pt-0"
      : "max-[420px]:flex-col max-[420px]:items-center max-[420px]:gap-2 max-[420px]:pt-0.5",
    isFloating ? "fixed bottom-8 left-4 z-[60] drop-shadow-lg sm:bottom-10 sm:left-5" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const discWrap = [
    "cta-call-disc-wrap relative z-20 flex shrink-0 items-center justify-center",
    compact && micro ? "-mr-1" : "-mr-2 sm:-mr-2.5",
    "max-[420px]:mr-0",
  ].join(" ");

  const discSize =
    compact && micro
      ? "h-9 w-9 min-h-[2.25rem] min-w-[2.25rem]"
      : compact
        ? "h-11 w-11 min-h-[2.75rem] min-w-[2.75rem] sm:h-12 sm:w-12 sm:min-h-[3rem] sm:min-w-[3rem]"
        : "h-[3.25rem] w-[3.25rem] min-h-[3.25rem] min-w-[3.25rem] sm:h-14 sm:w-14 sm:min-h-[3.5rem] sm:min-w-[3.5rem]";

  const iconSize =
    compact && micro
      ? "h-4 w-4"
      : compact
        ? "h-[18px] w-[18px] sm:h-5 sm:w-5"
        : "h-5 w-5 sm:h-6 sm:w-6";

  const tabClass =
    compact && micro
      ? "inline-flex w-fit max-w-full rounded-tr-md bg-[color:var(--brand-ink)] px-1.5 py-0.5 text-[7px] font-black uppercase leading-none tracking-[0.1em] text-white max-[420px]:mx-auto"
      : compact
        ? "inline-flex w-fit max-w-full rounded-tr-md bg-[color:var(--brand-ink)] px-2 py-0.5 text-[8px] font-black uppercase leading-none tracking-[0.12em] text-white max-[420px]:mx-auto"
        : "inline-flex w-fit max-w-full rounded-tr-md bg-[color:var(--brand-ink)] px-2.5 py-1 text-[9px] font-black uppercase leading-none tracking-[0.14em] text-white sm:text-[10px] sm:tracking-[0.16em] max-[420px]:mx-auto";

  const barClass = [
    "cta-call-bar-shimmer flex w-full min-w-0 max-w-full items-center justify-center rounded-r-full border-y-2 border-r-2 border-[color:color-mix(in_srgb,var(--brand-primary)_68%,#0a1406)] bg-[color:var(--brand-primary)] font-extrabold leading-tight tracking-tight text-white tabular-nums shadow-[3px_3px_0_color-mix(in_srgb,var(--brand-primary)_42%,#000)] transition-[filter] duration-300 group-hover:brightness-110 sm:shadow-[4px_4px_0_color-mix(in_srgb,var(--brand-primary)_42%,#000)]",
    compact && micro
      ? "px-2 py-1 pl-2.5 text-[10px] leading-tight"
      : compact
        ? "px-3 py-1.5 pl-3.5 text-[11px] sm:px-4 sm:py-2 sm:pl-5 sm:text-xs"
        : "px-4 py-2 pl-5 text-xs sm:px-5 sm:py-2.5 sm:pl-6 sm:text-sm md:text-[0.95rem]",
    compact && micro
      ? "max-w-[min(100vw-3.5rem,14rem)] max-[420px]:max-w-[15rem]"
      : "max-w-[min(100vw-4.5rem,18rem)] sm:max-w-[20rem] max-[420px]:mx-auto max-[420px]:w-full max-[420px]:max-w-[17.5rem] max-[420px]:justify-center",
  ].join(" ");

  const textCol = [
    "flex min-w-0 flex-col items-stretch pt-1 sm:pt-1.5",
    "max-[420px]:w-full max-[420px]:max-w-[17.5rem] max-[420px]:items-center max-[420px]:pt-0",
  ].join(" ");

  const discInner = [
    "cta-call-phone flex h-full w-full items-center justify-center rounded-full border-[3px] border-[color:color-mix(in_srgb,var(--brand-primary)_68%,#051005)] bg-[color:var(--brand-primary)] shadow-[0_5px_0_color-mix(in_srgb,var(--brand-primary)_38%,#000)]",
  ].join(" ");

  return (
    <a
      href={callHref}
      className={root}
      aria-label={`Call us now at ${displayPhone}`}
      title={displayPhone}
      onClick={onNavigate}
    >
      <div className={`${discWrap} ${discSize}`}>
        <span
          className="cta-call-pulse-ring pointer-events-none absolute inset-0 rounded-full border-2 border-[color:color-mix(in_srgb,var(--brand-primary)_50%,transparent)]"
          aria-hidden
        />
        {!compact || !micro ? (
          <span
            className="cta-call-pulse-ring cta-call-pulse-ring--delay pointer-events-none absolute inset-0 rounded-full border-2 border-[color:color-mix(in_srgb,var(--brand-accent)_45%,transparent)]"
            aria-hidden
          />
        ) : null}
        <div className={discInner}>
          <PhoneIcon className={`${iconSize} shrink-0 text-white`} />
        </div>
      </div>

      <div className={textCol}>
        <span className={tabClass}>Call us now</span>
        <span className={barClass}>
          <span className="relative z-10 truncate px-0.5">{displayPhone}</span>
        </span>
      </div>
    </a>
  );
}
