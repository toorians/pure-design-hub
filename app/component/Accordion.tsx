"use client";
import { useState } from "react";

type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={`transition-all duration-300 rounded-2xl overflow-hidden shadow-sm ${
              isOpen
                ? "bg-[color:var(--brand-primary)] text-white shadow-lg shadow-[color:color-mix(in_srgb,var(--brand-primary)_20%,transparent)]"
                : "bg-white text-black border border-gray-100 hover:border-[color:color-mix(in_srgb,var(--brand-primary)_30%,transparent)]"
            }`}
          >
            {/* Header */}
            <button
              onClick={() => toggle(item.id)}
              className={`flex w-full items-center justify-between px-6 py-5 sm:text-lg text-base text-left font-semibold cursor-pointer transition-colors duration-300 ${
                isOpen ? "text-white" : "text-[#272D4E] hover:text-[color:var(--brand-primary)]"
              }`}
            >
              <span className="pr-4">{item.question}</span>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen
                  ? "bg-white/20 rotate-180"
                  : "bg-[color:color-mix(in_srgb,var(--brand-primary)_10%,transparent)]"
              }`}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {/* Content */}
            {isOpen && (
              <div className="bg-[color:var(--brand-primary)] px-6 pb-6">
                <div className="h-px w-full bg-white/20 mb-4"></div>
                <p className="px-5 py-4 bg-white rounded-xl text-gray-700 sm:text-base text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
