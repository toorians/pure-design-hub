'use client'
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/Png.png";

interface CheckoutProps {
  packageName: string;
  price: number;
  currency: string;
  description: string;
}

export default function CheckoutPage({
  packageName,
  price,
  currency,
  description,
}: CheckoutProps) {
  const normalizeErrorMessage = (value: any): string => {
    if (!value) return "Payment could not be completed. Please try again.";
    if (typeof value === "string") return value;
    if (typeof value === "object") {
      if (typeof value.message === "string") return value.message;
      if (typeof value.error === "string") return value.error;
      try {
        return JSON.stringify(value);
      } catch {
        return "Payment could not be completed. Please try again.";
      }
    }
    return "Payment could not be completed. Please try again.";
  };

  const currencyCode =
    currency === "£"
      ? "gbp"
      : currency === "$"
        ? "usd"
        : String(currency || "").toLowerCase() === "gbp"
          ? "gbp"
          : "usd";

  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    companyName: "",
    country: "US",
    state: "",
    city: "",
    zipCode: "",
  });

  const [checkoutTheme, setCheckoutTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const read = () =>
      setCheckoutTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    read();
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, []);

  const cardElementOptions = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: checkoutTheme === "dark" ? "#e2e8f0" : "#1e293b",
          "::placeholder": {
            color: checkoutTheme === "dark" ? "#64748b" : "#94a3b8",
          },
        },
        invalid: {
          color: "#dc2626",
        },
      },
      hidePostalCode: true,
    }),
    [checkoutTheme]
  );

  const fieldClass =
    "w-full rounded border border-[color:var(--border)] bg-[color:var(--surface)] p-2.5 text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] outline-none focus:border-[color:var(--brand-primary)] focus:ring-1 focus:ring-[color:color-mix(in_srgb,var(--brand-primary)_35%,transparent)]";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.state || !formData.city || !formData.zipCode || !phone) {
      setError("Please fill in all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent double submission

    setError("");
    setSuccess("");

    if (!stripe || !elements) return;

    if (!validateForm()) return;

    try {
      setLoading(true);

      // Create PaymentMethod on client
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("CardElement not loaded");

      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: phone,
            address: {
                line1: formData.address,
                city: formData.city,
                state: formData.state,
                postal_code: formData.zipCode,
                country: formData.country,
            }
        },
      });

      if (pmError) {
        setError(pmError.message || "Card verification failed");
        setLoading(false);
        return;
      }

      // Call backend with PaymentMethod ID and full details
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: price,
          currency: currencyCode,
          payment_method: paymentMethod.id,
          billing_details: {
              ...formData,
              phone,
              packageName,
              description,
          },
        }),
      });

      const data = await response.json();

      if (data.status === 200) {
          setSuccess("Thank you! Your payment has been received successfully.");
          console.log("Full server response:", data);
      } else {
          setError(normalizeErrorMessage(data.message || data.error));
      }

      setLoading(false);

    } catch (err: any) {
      setError(normalizeErrorMessage(err?.message || err));
      setLoading(false);
    }
  };

  return (
    <>
      <header className="flex items-center justify-between xl:pt-6 pt-4 px-4 lg:px-6 xl:px-14 relative border-b border-[color:var(--border)] bg-[color:var(--surface)] pb-4">
        <Link href="/" className="logo flex items-center">
          <Image
            src={Logo}
            alt="Pure Design Hub"
            width={176}
            height={68}
            priority
            className="h-auto w-[148px] sm:w-[160px] md:w-[172px] object-contain object-left"
          />
        </Link>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm font-semibold text-[color:var(--foreground)] hover:text-[color:var(--brand-primary)] flex items-center gap-1 transition-colors"
        >
          &larr; Back
        </button>
      </header>

      <section className="checkout-section max-w-6xl mx-auto px-4 lg:px-6 py-10 mb-16">
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 mt-6">
        {/* LEFT – FORM */}
        <div>
          <div className="rounded-t-md bg-[color:var(--brand-primary)] px-4 py-2.5 flex items-center gap-2 font-semibold text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-white/95 text-sm font-bold text-[color:var(--brand-primary)]">
              1
            </span>
            Payment Details
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-b-md border border-t-0 border-[color:var(--border)] bg-[color:var(--surface)] p-6 space-y-4 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleInputChange} className={fieldClass} />
              <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleInputChange} className={fieldClass} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleInputChange} className={fieldClass} />
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(value) => setPhone(value)}
                containerClass="!w-full checkout-phone-input"
                inputClass="!w-full"
                buttonClass="!h-[46px]"
                dropdownClass="!bg-[color:var(--surface)] !text-[color:var(--foreground)]"
                placeholder="Enter phone number"
              />
            </div>

            <input type="text" name="address" placeholder="Address" required value={formData.address} onChange={handleInputChange} className={fieldClass} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleInputChange} className={fieldClass} />
              <select name="country" value={formData.country} onChange={handleInputChange} className={fieldClass} required>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" name="state" placeholder="State" required value={formData.state} onChange={handleInputChange} className={fieldClass} />
              <input type="text" name="city" placeholder="City" required value={formData.city} onChange={handleInputChange} className={fieldClass} />
              <input type="text" name="zipCode" placeholder="Zip Code" required value={formData.zipCode} onChange={handleInputChange} className={fieldClass} />
            </div>

            <div className="pt-4">
              <h3 className="mb-3 text-xl font-semibold text-[color:var(--foreground)]">Payment Information</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                 <span className="rounded border border-[color:var(--border)] bg-[color:var(--surface-2)] px-2 py-1 text-xs font-bold text-[color:var(--foreground)]">VISA</span>
                 <span className="rounded border border-[color:var(--border)] bg-[color:var(--surface-2)] px-2 py-1 text-xs font-bold text-[color:var(--foreground)]">MasterCard</span>
                 <span className="rounded border border-[color:var(--border)] bg-[color:var(--surface-2)] px-2 py-1 text-xs font-bold text-[color:var(--foreground)]">AMEX</span>
                 <span className="rounded border border-[color:var(--border)] bg-[color:var(--surface-2)] px-2 py-1 text-xs font-bold text-[color:var(--foreground)]">Discover</span>
              </div>
              
              <label className="mb-1 block text-sm font-medium text-[color:var(--foreground)]">Credit or Debit Card</label>
              <div className="checkout-card-element-wrap">
                <CardElement
                  key={checkoutTheme}
                  options={cardElementOptions}
                />
              </div>
            </div>

            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            {success && <p className="mt-2 text-sm text-[color:var(--brand-primary)]">{success}</p>}

            <button
              disabled={!stripe || loading}
              className="mt-6 w-full rounded-md bg-[color:var(--brand-primary)] py-3 font-semibold text-white transition-colors hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_88%,#000)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </form>
        </div>

        {/* RIGHT – INVOICE */}
        <div>
          <div className="rounded-t-md bg-[color:var(--brand-primary)] px-4 py-2.5 flex items-center gap-2 font-semibold text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-white/95 text-sm font-bold text-[color:var(--brand-primary)]">2</span>
            Billing Invoice
          </div>
          <div className="rounded-b-md border border-t-0 border-[color:var(--border)] bg-[color:var(--surface)] p-0 shadow-sm">
            <div className="space-y-3 border-b border-dashed border-[color:var(--border)] p-4 pb-6">
              <h4 className="text-lg font-semibold text-[color:var(--foreground)]">{packageName || "Package Item"}</h4>
              
              <div className="flex justify-between text-sm text-[color:var(--muted)]">
                <span>Item Price</span>
                <span className="font-medium text-[color:var(--foreground)]">{currency}{price || "0.00"}</span>
              </div>
              
              <div className="flex justify-between text-sm text-[color:var(--muted)]">
                <span>Total ({currency === '$' ? 'USD' : currency === '£' ? 'GBP' : 'Local'})</span>
                <span className="font-medium text-[color:var(--foreground)]">{currency}{price || "0.00"}</span>
              </div>
              
              <div className="flex justify-between text-sm text-[color:var(--muted)]">
                <span>Discount</span>
                <span>-</span>
              </div>
            </div>

            <div className="space-y-3 p-4">
              <input type="text" placeholder="Enter Coupon Code" className={`${fieldClass} text-sm`} />
              <button type="button" className="w-full rounded bg-[color:var(--brand-primary)] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[color:color-mix(in_srgb,var(--brand-primary)_88%,#000)]">
                Apply Coupon
              </button>

              <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border)] pt-4">
                <span className="rounded border border-[color:var(--border)] px-3 py-1 text-xs font-bold uppercase text-[color:var(--muted)]">
                  Secured CHECKOUT
                </span>
                <span className="flex items-center gap-1 rounded bg-[color:color-mix(in_srgb,var(--foreground)_10%,var(--surface))] px-3 py-1.5 text-xs font-semibold text-[color:var(--foreground)]">
                  Powered by <strong className="text-sm font-bold tracking-tight">stripe</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    </>
  );
}
