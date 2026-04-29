import { HeartPulse, ShieldCheck, FlaskConical, Microscope, Sprout, MessageCircleHeart } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "ED & performance",
    body: "Erectile difficulties, premature ejaculation, low libido. Examined, explained, and treated in one visit.",
  },
  {
    icon: ShieldCheck,
    title: "STI testing",
    body: "Same-day rapid tests and full panels. Results in your inbox, not on a notice board.",
  },
  {
    icon: FlaskConical,
    title: "Contraception",
    body: "Pills, IUDs, condoms, emergency contraception. We fit, dispense, and follow up.",
  },
  {
    icon: Microscope,
    title: "Lumps, rashes, pain",
    body: "If you've been worrying about something 'down there' — bring it in. A 10-minute look is usually all it takes.",
  },
  {
    icon: Sprout,
    title: "Fertility & hormones",
    body: "Trying to conceive, low testosterone, andropause, perimenopause. Tests, scans, and a clear plan.",
  },
  {
    icon: MessageCircleHeart,
    title: "Sex & relationships",
    body: "A counsellor sits in our clinic two days a week. Couples welcome. Judgement, never.",
  },
];

const Services = () => {
  return (
    <section id="services" className="container py-24 md:py-32">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">What we look after</p>
          <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
            Whatever it is, we've seen it before.
          </h2>
        </div>
        <p className="max-w-sm text-ink-soft">
          Everything below is handled in-house, by Indian-licensed doctors, in a private room. Most visits take less than thirty minutes.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.title} className="group bg-card p-8 transition-colors hover:bg-secondary/40">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-soft text-sage">
              <s.icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 font-serif-display text-2xl text-ink">{s.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
