export default function BeforeAfter() {
  return (
    <section className="py-12 sm:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 grid md:grid-cols-2 gap-4 sm:gap-8">
        <div className="rounded-3xl overflow-hidden border border-border">
          <img src="/images/before-trading.png" alt="Before Trading" className="w-full" />
        </div>
        <div className="rounded-3xl overflow-hidden border border-border">
          <img src="/images/after-trading.png" alt="After Trading" className="w-full" />
        </div>
      </div>
    </section>
  );
}
