export default function Footer() {
  return (
    <footer className="py-12 sm:py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-[36px] lg:text-[54px] font-bold leading-tight mb-4">
          Ready to<br />Change Your Life?
        </h2>
        <p className="text-base text-gray-mid max-w-[700px] mx-auto mb-10">
          Vision FX helps you trade better by thinking better — with tools that support structure, discipline, and smart decision-making.
        </p>
        <a href="#" className="inline-block border border-border text-white text-sm sm:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/5 transition-colors mb-10 sm:mb-20">
          Join 20,000+ Traders Using Vision FX
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-sm sm:text-base text-gray-light">
          {["Home", "Pricing", "Features", "How it works", "FAQs"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
