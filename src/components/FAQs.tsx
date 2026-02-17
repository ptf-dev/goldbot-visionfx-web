"use client";

import { useState } from "react";

const faqs = [
  { q: "What happens after I purchase?", a: "You'll receive instant access to the VIP group, trading signals, and all premium resources." },
  { q: "Can I use this if I'm a total beginner?", a: "Traders undergo an evaluation process to demonstrate their trading skills. Upon passing, they receive funding to trade in financial markets, sharing a portion of the profits earned." },
  { q: "Will I win every trade with this?", a: "No trading system guarantees 100% wins. Our signals have an 87% success rate, but risk management is key." },
  { q: "Do I need a paid TradingView plan?", a: "No, a free TradingView account is sufficient to get started with our tools and indicators." },
  { q: "How do I cancel my membership?", a: "You can cancel anytime by contacting our support team. However, the lifetime plan is a one-time payment with no recurring charges." },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section id="faqs" className="py-24">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row gap-16">
        <div className="lg:w-[441px] shrink-0">
          <h2 className="text-[44px] font-semibold leading-tight mb-4">
            Frequently<br />Asked Questions?
          </h2>
          <p className="text-base text-gray-mid mb-8">
            Something left unanswered? Check out the full FAQs.
          </p>
          <a href="#" className="inline-block border border-border text-white text-base px-6 py-4 rounded-full hover:bg-white/5 transition-colors">
            Read All Faqs
          </a>
        </div>
        <div className="flex-1 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-medium">{faq.q}</span>
                <svg className={`w-5 h-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-mid leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
