import { DoorOpen, Stethoscope, Pill } from "lucide-react";

const steps = [
  {
    icon: DoorOpen,
    title: "Walk in, quietly.",
    body: "No queue at the counter. A host greets you, signs you in on a tablet, and shows you to a private waiting nook.",
  },
  {
    icon: Stethoscope,
    title: "Sit with a doctor.",
    body: "An Indian-licensed clinician sees you in a closed-door consultation room. Examinations, when needed, are gentle and explained at every step.",
  },
  {
    icon: Pill,
    title: "Leave with a plan.",
    body: "Medication is dispensed in-house from our pharmacy, in plain packaging. Follow-ups are free for thirty days.",
  },
];

const HowItWorks = () => {
  return (
    <section id="visit" className="bg-gradient-sage py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">A visit to Saath</p>
          <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
            Three small steps. One quieter chapter.
          </h2>
          <p className="mt-5 text-ink-soft text-balance">
            Walking in for the first time can feel hard. We've designed every part of your visit to be easier than the last.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="bg-card p-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-soft text-sage">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <p className="mt-6 font-serif-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Step 0{i + 1}
              </p>
              <h3 className="mt-2 font-serif-display text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
