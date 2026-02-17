export default function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <div className="max-w-[1440px] mx-auto px-8 text-center">
        <span className="inline-block text-sm font-medium text-gold border border-gold/30 rounded-full px-4 py-1 mb-6">
          REVIEWS
        </span>
        <h2 className="text-[44px] font-semibold mb-4">
          Real Traders. Real Results.
        </h2>
        <p className="text-base text-gray-mid max-w-[454px] mx-auto mb-16">
          Thousands of traders worldwide already rely on Vision FX to trade with more clarity and confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-8 text-left">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-light text-sm leading-relaxed">
                &quot;Vision FX changed the way I trade. The signals are accurate and the community is incredibly supportive.&quot;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20" />
                <div>
                  <p className="text-sm font-medium">Trader #{i}</p>
                  <p className="text-xs text-gray-mid">Verified Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl text-gray-light">
            Join our Telegram community and see the results for yourself.
          </p>
          <a href="#" className="gold-gradient text-black font-medium text-base px-6 py-3 rounded-full shrink-0 hover:opacity-90 transition-opacity">
            Get Instant Access
          </a>
        </div>
      </div>
    </section>
  );
}
