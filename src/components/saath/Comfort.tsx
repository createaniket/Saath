import { UserRound, Users, ShieldCheck } from "lucide-react";

const options = [
  {
    icon: UserRound,
    title: "Choose your doctor",
    body: "Female or male — your call, every visit. Tell us when you book, or quietly ask at reception. No reason needed.",
  },
  {
    icon: Users,
    title: "A chaperone, always available",
    body: "If you'd rather not be alone in the room, we'll arrange a second clinician — female or male — to sit in. It's free, and you can ask at any moment.",
  },
  {
    icon: ShieldCheck,
    title: "You set the pace",
    body: "Pause, ask again, change your mind, walk out — all welcome. Nothing happens without your clear yes.",
  },
];

const Comfort = () => {
  return (
    <section id="comfort" className="bg-paper">
      <div className="container py-24 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.24em] text-saffron-deep">Your comfort comes first</p>
            <h2 className="mt-4 font-serif-display text-4xl tracking-tight text-ink text-balance md:text-5xl lg:text-6xl">
              You'll never be left alone.
              <span className="block text-ink-soft">Unless you'd like to be.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft text-balance">
              We have <span className="text-ink">female and male doctors</span> on staff every day, and a chaperone is always one quiet word away. Your comfort isn't a nice-to-have — it's how we practice medicine.
            </p>
            <a
              href="#visit"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-saffron-deep underline-offset-8 hover:underline"
            >
              Tell us how you'd like to be seen →
            </a>
          </div>

          <ul className="md:col-span-7 grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-3">
            {options.map((o) => (
              <li key={o.title} className="bg-card p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-saffron-soft text-saffron-deep">
                  <o.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-serif-display text-xl text-ink">{o.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comfort;
