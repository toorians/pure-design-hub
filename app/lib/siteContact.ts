/** Public support inbox — keep in sync with footer “Get In Touch”. */
export const SITE_SUPPORT_EMAIL = "support@puredesignhub.com";

export function normalizePhoneDigits(s: string) {
  return (s || "").replace(/[^\d]/g, "");
}

export function buildTelHref(phoneRaw: string) {
  const digits = normalizePhoneDigits(phoneRaw);
  return digits ? `tel:+${digits}` : `tel:${phoneRaw.replace(/\s+/g, "")}`;
}

export function buildWhatsAppHref(phoneRaw: string) {
  const digits = normalizePhoneDigits(phoneRaw);
  if (!digits) return "https://wa.me/";
  return `https://wa.me/${digits}`;
}
