export default function BeforeAfter() {
  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 items-center">
          <div className="rounded-3xl overflow-hidden border border-border">
            <div className="bg-card/80 text-center py-3 border-b border-border">
              <span className="text-sm sm:text-base font-semibold text-gray-light">Before Trading</span>
            </div>
            <img src="/images/before-trading.png" alt="Before Trading" className="w-full" />
          </div>

          <div className="hidden md:flex flex-col items-center gap-3 text-gold/40">
            {[...Array(8)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden border border-gold/30">
            <div className="bg-gold text-center py-3">
              <span className="text-sm sm:text-base font-semibold text-black">After Trading</span>
            </div>
            <img src="/images/after-trading.png" alt="After Trading" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
