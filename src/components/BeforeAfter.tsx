export default function BeforeAfter() {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-8 grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          <div className="bg-red-500/10 border-b border-border px-8 py-4">
            <h3 className="text-2xl font-semibold text-center">Before Trading</h3>
          </div>
          <img src="/images/before-trading.png" alt="Before Trading" className="w-full" />
        </div>
        <div className="bg-card border border-border rounded-3xl overflow-hidden">
          <div className="bg-green-500/10 border-b border-border px-8 py-4">
            <h3 className="text-2xl font-semibold text-center">After Trading</h3>
          </div>
          <img src="/images/after-trading.png" alt="After Trading" className="w-full" />
        </div>
      </div>
    </section>
  );
}
