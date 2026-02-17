"use client";

import dynamic from "next/dynamic";

const RippleGrid = dynamic(() => import("./RippleGrid"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden min-h-[80vh] sm:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <RippleGrid
          gridColor="#c9a84c"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          fadeDistance={1.5}
          vignetteStrength={2}
          glowIntensity={0.1}
          opacity={1}
          mouseInteraction={true}
          mouseInteractionRadius={1}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full">
        <div className="flex-1 max-w-[562px]">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-up flex-wrap">
            <span className="text-sm font-medium text-gray-light">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-base font-semibold">1200+</span>
            <span className="text-sm font-medium text-gray-light">5-Star Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-[42px] lg:text-[52px] font-bold leading-tight mb-3 animate-fade-up-delay-1">
            <span className="shimmer-text">Trusted Since 2016.</span>
          </h1>
          <h2 className="text-lg sm:text-2xl lg:text-[28px] font-bold leading-snug mb-4 sm:mb-6 text-gray-light animate-fade-up-delay-2">
            Learn the day trading system that has generated $256K in payouts.
          </h2>
          <p className="text-sm sm:text-base text-gray-mid leading-relaxed mb-8 sm:mb-10 max-w-[562px] animate-fade-up-delay-3">
            Vision FX is a professional trading platform with over 5 years of experience in the financial markets. Join like-minded individuals who follow elite trading signals to create life-changing profits.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-up-delay-4">
            <a href="#enroll" className="gold-gradient text-black font-medium text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-[0_0_30px_rgba(201,168,76,0.3)] text-center">
              Enroll Now
            </a>
            <a href="#telegram" className="border border-border text-white font-medium text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-white/5 transition-all hover:scale-105 text-center">
              Join Telegram
            </a>
          </div>
        </div>

        <div className="flex-1 relative max-w-[600px] w-full animate-fade-up-delay-2">
          <div className="absolute -inset-8 bg-gold/10 rounded-full blur-3xl animate-glow-pulse" />
          <div className="relative animate-float-slow">
            <img src="/images/hero-image.png" alt="Trading dashboard" className="w-full h-auto rounded-2xl relative z-10 shadow-2xl shadow-gold/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
