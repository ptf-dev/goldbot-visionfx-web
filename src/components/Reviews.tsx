export default function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-gold border border-gold/30 rounded-full px-4 py-1 mb-6">
          <span className="w-2 h-2 rounded-full bg-gold" />
          REVIEWS
        </span>
        <h2 className="text-2xl sm:text-[36px] lg:text-[44px] font-semibold mb-4">
          Real Traders. <span className="gold-text">Real Results.</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-mid max-w-[500px] mx-auto mb-8 sm:mb-12">
          Thousands of traders worldwide already rely on Vision FX to trade with more clarity and confidence.
        </p>

        <div className="relative overflow-hidden mb-6">
          <img src="/images/reviews-section.png" alt="Trader reviews and testimonials" className="w-full rounded-2xl" />
        </div>

        <div className="border border-gold/30 rounded-full py-3 sm:py-4 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2">
          <p className="text-sm sm:text-base text-gray-light">
            <span className="text-gold font-semibold">Join Our Telegram Community</span> And See The Results For Yourself.
          </p>
          <a href="#" className="inline-block border border-gold/30 text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-white/5 transition-colors shrink-0">
            Get Instant Access →
          </a>
        </div>
      </div>
    </section>
  );
}
