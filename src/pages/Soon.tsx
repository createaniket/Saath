const Soon = () => {

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-background text-ink">
      {/* Top bar */}
      <header className="container flex shrink-0 items-center justify-between py-4">
        <div className="flex items-baseline gap-2">
          <span className="font-serif-display text-2xl tracking-tight">Saath</span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground">साथ · together</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-sage/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sage">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" />
          A not-for-profit
        </span>
      </header>

      {/* Hero — fills remaining space, centred */}
      <section className="container flex flex-1 items-center py-4">
        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Left: headline + copy */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-sage">Phase 01 · A quiet beginning</p>
            <h1 className="mt-2 font-serif-display text-3xl leading-[1.05] tracking-tight text-balance md:text-4xl">
              Sexual health, <em className="not-italic text-sage">said simply</em> - built for the mohalla.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Saath is a mohalla sexual health clinic and chemist. Backed by patient investors and run as a not-for-profit - every rupee goes back into better care, lower prices, and more doors that open quietly in more mohallas.
            </p>
            <p className="mt-2 max-w-md text-xs text-ink-soft md:text-sm">
              We're keeping the rest under wraps. The doors open this season.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-sage/30 bg-sage/5 px-3 py-1.5 text-xs text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              <span className="font-medium">Not-for-profit</span>
            </div>
          </div>

          {/* Right: How we're built card */}
          <aside>
            <div className="rounded-2xl border border-border bg-card/70 p-5 shadow-card backdrop-blur">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">How we're built</p>
              <ul className="mt-3 space-y-3">
                <li>
                  <p className="font-serif-display text-base text-ink">Community-based</p>
                  <p className="text-xs text-ink-soft">Designed with the mohallas we serve.</p>
                </li>
                <li>
                  <p className="font-serif-display text-base text-ink">Not-for-profit</p>
                  <p className="text-xs text-ink-soft">Surplus reinvested into care.</p>
                </li>
              </ul>
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">First clinics</p>
                <p className="mt-1 text-xs text-ink">Mumbai · New Delhi</p>
                <p className="text-xs text-ink-soft">Pan-India shipping.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Marquee tagline */}
      <div className="shrink-0 overflow-hidden border-t border-border bg-sage py-3">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-serif-display text-base italic text-white md:text-lg"
            >
              Built in India, for India. So our children - and theirs - can talk about sexual health without shame.
              <span className="mx-8 text-white/80">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="container flex shrink-0 flex-col items-start justify-between gap-2 py-4 text-[11px] text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Saath Wellness Pvt. Ltd.</p>
        <a href="mailto:aniket@saathyours.com" className="hover:text-ink">aniket@saathyours.com</a>
      </footer>
    </main>
  );
};

export default Soon;
