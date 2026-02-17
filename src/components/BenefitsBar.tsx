export default function BenefitsBar() {
  const items = [
    "Access to our trusted broker",
    "Deposit bonus and daily analysis",
    "Unlock lifetime benefits",
    "Enjoy signals with 87% success rate",
  ];

  return (
    <section className="border-y border-border py-4 overflow-hidden">
      <div className="ticker-scroll flex whitespace-nowrap gap-12">
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-base text-gray-light">{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
