export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="relative max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-[562px]">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm font-medium text-gray-light">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-base font-semibold">1200+</span>
            <span className="text-sm font-medium text-gray-light">5 Stars Reviews</span>
          </div>

          <h1 className="text-[44px] font-bold leading-tight mb-2">
            Vision FX is since 2016.
          </h1>
          <h2 className="text-[30px] font-bold leading-snug mb-6 text-gray-light">
            Learn the day trading system that has generated $256K in payouts.
          </h2>
          <p className="text-base text-gray-mid leading-relaxed mb-10 max-w-[562px]">
            Vision FX is a professional trading platform with over 5 years of experience in the financial markets. Join like-minded individuals who follow elite trading signals to create life-changing profits.
          </p>

          <div className="flex items-center gap-4">
            <a href="#enroll" className="gold-gradient text-black font-medium text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Enroll Now
            </a>
            <a href="#telegram" className="border border-border text-white font-medium text-base px-8 py-3 rounded-full hover:bg-white/5 transition-colors">
              Join Telegram
            </a>
          </div>
        </div>

        <div className="flex-1 relative max-w-[600px] w-full">
          <img src="/images/hero-image.png" alt="Trading dashboard" className="w-full h-auto rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
