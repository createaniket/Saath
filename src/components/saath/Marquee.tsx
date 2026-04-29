const Marquee = () => {
  const items = [
    "Walk-ins welcome",
    "Private consultation rooms",
    "Indian-licensed doctors on-site",
    "On-site dispensing pharmacy",
    "Confidential by default",
    "No referral needed",
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-xs uppercase tracking-[0.18em] text-ink-soft">
        {items.map((it) => (
          <span key={it} className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-sage" />
            {it}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
