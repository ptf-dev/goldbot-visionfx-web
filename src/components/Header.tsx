"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <img src="/images/logo.png" alt="Vision FX" className="h-10" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Gold Bot", "Features", "How it works", "FAQs"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base text-gray-light hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link
          href="#enroll"
          className="gold-gradient text-black font-medium text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Enroll Now
        </Link>
      </div>
    </header>
  );
}
