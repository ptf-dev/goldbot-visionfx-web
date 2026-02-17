export default function AboutUs() {
  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="relative bg-card border border-border rounded-3xl overflow-hidden mb-8">
          <img src="/images/about-us.png" alt="Vision FX" className="w-full" />
        </div>
        <div className="max-w-[926px] mx-auto space-y-6">
          <p className="text-lg text-gray-mid leading-relaxed">
            Advanced Trading, clean chart overlays, strategy back-testers, and automation tools. Vision Fx helps you simplify your analysis, validate your ideas, and trade with confidence.
          </p>
          <p className="text-lg text-gray-mid">
            Vision Fx helps you stop guessing and start growing.
          </p>
        </div>
      </div>
    </section>
  );
}
