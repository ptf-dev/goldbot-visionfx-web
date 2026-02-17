"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Gold Bot", "Features", "How it works", "FAQs"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="/images/logo.png" alt="Vision FX" className="h-8 sm:h-10" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base text-gray-light hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#enroll"
            className="gold-gradient text-black font-medium text-sm px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Enroll Now
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-1" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-3">
          {links.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setMenuOpen(false)}
              className="block text-base text-gray-light hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
