"use client";

import { useState } from "react";

const faqs = [
  { q: "What Happens After I Purchase?", a: "You'll receive instant access to the VIP group, trading signals, and all premium resources." },
  { q: "Can I Use This If I'm A Total Beginner?", a: "Traders undergo an evaluation process to demonstrate their trading skills. Upon passing, they receive funding to trade in financial markets, sharing a portion of the profits earned." },
  { q: "Will I Win Every Trade With This?", a: "No trading system guarantees 100% wins. Our signals have an 87% success rate, but risk management is key." },
  { q: "Do I Need A Paid TradingView Plan?", a: "No, a free TradingView account is sufficient to get started with our tools and indicators." },
  { q: "How Do I Cancel My Membership?", a: "You can cancel anytime by contacting our support team. However, the lifetime plan is a one-time payment with no recurring charges." },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section id="faqs" className="py-12 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="lg:w-[380px] shrink-0">
          <h2 className="text-2xl sm:text-[36px] lg:text-[44px] font-semibold leading-tight mb-4">
            Frequently<br />Asked <span className="gold-text">Questions?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-mid mb-6 sm:mb-8">
            Something left unanswered? Check out the full FAQs.
          </p>
          <a href="#" className="inline-block border border-border text-white text-sm sm:text-base px-5 sm:px-6 py-3 sm:py-4 rounded-full hover:bg-white/5 transition-colors">
            Read All FAQs
          </a>
        </div>
        <div className="flex-1 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? "border-gold/40 border-l-2 border-l-gold" : "border-border"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className="text-sm sm:text-lg font-medium">{faq.q}</span>
                  <span className="w-5 h-5 shrink-0 flex items-center justify-center text-gray-light">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-xs sm:text-sm text-gray-mid leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
