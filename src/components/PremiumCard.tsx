export default function PremiumCard() {
  return (
    <section id="gold-bot" className="py-12 sm:py-24">
      <div className="max-w-[540px] mx-auto px-4 sm:px-8">
        <div className="bg-card border border-gold/30 rounded-3xl p-6 sm:p-10 text-center">
          <h3 className="text-xl sm:text-[30px] font-semibold mb-6 sm:mb-10">Vision FX PREMIUM</h3>
          <div className="space-y-5 mb-10">
            {["Lifetime Access", "Gold EA Included", "Private Group Access"].map((f) => (
              <div key={f} className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-lg sm:text-2xl font-medium">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex items-baseline justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
            <span className="text-3xl sm:text-[44px] font-bold gold-text">&euro;400</span>
            <span className="text-lg sm:text-2xl font-medium text-gray-mid">One-Time Payment</span>
          </div>
          <a href="#enroll" className="inline-block w-full gold-gradient text-black font-medium text-base py-4 rounded-full hover:opacity-90 transition-opacity">
            Unlock Premium Access
          </a>
        </div>
      </div>
    </section>
  );
}
