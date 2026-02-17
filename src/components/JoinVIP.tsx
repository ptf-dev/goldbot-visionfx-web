export default function JoinVIP() {
  const features = [
    "Extra Signals Every Day - Crypto, Forex & Commodities.",
    "Access to our trusted broker.",
    "Deposit bonus and daily analysis.",
    "A community of over 10,000 profitable traders.",
    "Unlock lifetime benefits.",
    "Exclusive content to maximize profits.",
  ];

  return (
    <section id="features" className="py-12 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        <div className="flex-1">
          <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mb-5">
            <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 2h14v2H5v-2z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
            Join <span className="gold-text">Vision FX VIP</span>
          </h2>
          <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base font-medium">{f}</span>
              </div>
            ))}
          </div>
          <a href="#enroll" className="inline-block gold-gradient text-black font-medium text-sm sm:text-base px-8 sm:px-10 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition-opacity">
            Enroll Now
          </a>
        </div>
        <div className="flex-1 max-w-[500px] w-full">
          <div className="rounded-3xl overflow-hidden border border-gold/20">
            <img src="/images/hero-wrapper.png" alt="Vision FX lifestyle" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
