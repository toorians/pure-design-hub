"use client";

import { FormEvent, useMemo, useState } from "react";
import { useGeo } from "@/app/context/GeoContext";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function normalizeDigits(s: string) {
  return (s || "").replace(/[^\d]/g, "");
}

export default function FloatingQuoteWidget() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const geo = useGeo();

  const callHref = useMemo(() => {
    const digits = normalizeDigits(geo.phone);
    return digits ? `tel:+${digits}` : "tel:";
  }, [geo.phone]);

  const handleSubmit = async (e: FormEvent) => {
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
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error(data?.message || `Server error: ${res.status}`);
      setSuccessMsg(data?.message || "Thanks! We’ll reach out shortly.");
      setForm(initialForm);
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hidden lg:block">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative h-[170px] w-[58px] rounded-l-2xl rounded-r-xl bg-[color:var(--brand-accent)] text-[color:var(--brand-ink)] shadow-xl ring-1 ring-black/10 transition-transform duration-300 hover:-translate-y-0.5"
          aria-label="Open quote form"
          title="Let's talk Business"
        >
          <span
            className="[writing-mode:vertical-rl] rotate-180 text-[15px] leading-none font-extrabold tracking-wide text-[color:var(--brand-ink)] drop-shadow-[0_1px_1px_rgba(255,255,255,0.25)] mx-auto"
            aria-hidden="true"
          >
            Let&apos;s talk Business
          </span>
        </button>
      ) : (
        <div className="w-[360px] rounded-2xl border shadow-2xl theme-surface theme-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b theme-border theme-surface-2">
            <div className="font-extrabold">Get a Quote</div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-1 font-bold opacity-80 hover:opacity-100"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3">
            <input
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              placeholder="Full Name"
              className="rounded-xl px-4 py-3 border theme-border theme-surface outline-0"
            />
            <input
              value={form.email}
              onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              placeholder="Email"
              type="email"
              className="rounded-xl px-4 py-3 border theme-border theme-surface outline-0"
            />
            <input
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              placeholder="Phone"
              className="rounded-xl px-4 py-3 border theme-border theme-surface outline-0"
            />
            <select
              value={form.service}
              onChange={(e) => setForm((p) => ({ ...p, service: e.target.value }))}
              className="rounded-xl px-4 py-3 border theme-border theme-surface outline-0"
            >
              <option value="">Select Service</option>
              <option value="WebDevelopment">Web Development</option>
              <option value="AppDevelopment">App Development</option>
              <option value="BrandingDesign">Branding Design</option>
              <option value="ContentWriting">Content Writing</option>
              <option value="SocialMediaMarketing">Social Media Marketing</option>
              <option value="SEOServices">SEO Services</option>
            </select>
            <textarea
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              placeholder="Tell us about your project"
              rows={4}
              className="rounded-xl px-4 py-3 border theme-border theme-surface outline-0 resize-none"
            />

            {successMsg ? (
              <div className="text-sm rounded-xl border px-3 py-2 theme-border theme-surface-2">{successMsg}</div>
            ) : null}
            {errorMsg ? (
              <div className="text-sm rounded-xl border px-3 py-2 theme-border theme-surface-2">{errorMsg}</div>
            ) : null}

            <button
              disabled={loading}
              type="submit"
              className="rounded-xl bg-[color:var(--brand-primary)] text-white py-3 font-extrabold transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            <a href={callHref} className="text-sm font-semibold underline underline-offset-4" style={{ color: "var(--muted)" }}>
              Prefer a call? {geo.phone}
            </a>
          </form>
        </div>
      )}
    </div>
  );
}

