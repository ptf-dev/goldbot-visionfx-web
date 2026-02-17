export default function PremiumCard() {
  return (
    <section id="gold-bot" className="py-12 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-gold/20 min-h-[400px] sm:min-h-[500px]">
          <img
            src="/images/gold-bot-section.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/80" />
          <div className="relative flex items-center justify-end min-h-[400px] sm:min-h-[500px] p-6 sm:p-12">
            <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 w-full max-w-[380px]">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l2.09 6.26L20 9.27l-4.91 3.82L16.18 20 12 16.77 7.82 20l1.09-6.91L4 9.27l5.91-1.01L12 2z" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-semibold">Vision FX PREMIUM</h3>
              </div>
              <div className="space-y-4 mb-6">
                {["Lifetime Access", "Gold EA Included", "Private Group Access"].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base sm:text-lg font-medium">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl sm:text-4xl font-bold gold-text">&euro;400</span>
                <span className="text-sm sm:text-base text-gray-mid">One-Time Payment</span>
              </div>
              <a href="#enroll" className="block w-full gold-gradient text-black font-medium text-base py-3 rounded-full hover:opacity-90 transition-opacity text-center">
                Unlock Premium Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
