import { ArrowRight, MapPin, Heart, Stethoscope, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "@/components/saath/Nav";
import Footer from "@/components/saath/Footer";

const roles = [
  {
    title: "Consulting Physician — Sexual Health",
    location: "Mumbai · Bandra West",
    type: "Full-time",
    summary: "Lead patient consultations across ED, PE, STI, contraception and menopause care. MBBS with post-grad in Sexual Medicine, Urology, Gynaecology, or Family Medicine preferred.",
  },
  {
    title: "Consulting Physician — Sexual Health",
    location: "New Delhi",
    type: "Full-time",
    summary: "Open our flagship Delhi clinic alongside the founding team. Set the clinical tone for everything that follows.",
  },
  {
    title: "Pharmacist (D.Pharm / B.Pharm)",
    location: "Mumbai & New Delhi",
    type: "Full-time",
    summary: "Run the dispensing counter, advise on OTC purchases, and uphold our quietly-confident counter culture.",
  },
  {
    title: "Front-of-House Host",
    location: "Mumbai & New Delhi",
    type: "Full-time",
    summary: "First face of Saath. Discreet, warm, unflappable. You'll set the tone the moment someone walks in.",
  },
  {
    title: "Chaperone Nurse (GNM / B.Sc Nursing)",
    location: "Mumbai & New Delhi",
    type: "Full-time / Part-time",
    summary: "Support patients during examinations. Calm presence, clinical training, total discretion.",
  },
  {
    title: "Brand & Content Lead",
    location: "Mumbai (Hybrid)",
    type: "Full-time",
    summary: "Write, edit and shape the voice of Saath across our site, packaging and patient education.",
  },
];

const values = [
  { icon: Heart, title: "Quietly kind", body: "We treat patients the way we'd want our own family to be treated — without judgement, without spectacle." },
  { icon: Stethoscope, title: "Clinically rigorous", body: "Indian-licensed doctors, evidence-based care, transparent pricing. No shortcuts." },
  { icon: Users, title: "Built together", body: "Saath means together. Every role shapes the experience — from the host at reception to the doctor in the room." },
];

const Careers = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      <section className="bg-gradient-hero">
        <div className="container py-20 md:py-32">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">Careers at Saath</p>
          <h1 className="mt-4 max-w-3xl font-serif-display text-5xl leading-[1.05] tracking-tight text-ink text-balance md:text-6xl lg:text-7xl">
            Help build the clinic <em className="not-italic text-sage">India deserves</em>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            We're a small founding team opening neighbourhood sexual health clinics across India — beginning in Mumbai and New Delhi. If you believe healthcare can be quieter, kinder, and more honest, we'd love to meet you.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30 py-20">
        <div className="container grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title}>
              <v.icon className="h-6 w-6 text-sage" />
              <h3 className="mt-4 font-serif-display text-2xl text-ink">{v.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sage">Open roles</p>
              <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-ink md:text-5xl">Where you might fit in.</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-ink-soft md:block">
              Don't see your role? Write to <a className="underline underline-offset-4" href="mailto:careers@saathyours.com">careers@saathyours.com</a>.
            </p>
          </div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {roles.map((r, i) => (
              <a
                key={i}
                href="mailto:careers@saathyours.com?subject=Application — "
                className="group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-secondary/40 md:grid-cols-12 md:items-center md:gap-8 md:px-2"
              >
                <div className="md:col-span-5">
                  <h3 className="font-serif-display text-2xl text-ink">{r.title}</h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {r.location} · {r.type}
                  </p>
                </div>
                <p className="md:col-span-6 text-ink-soft leading-relaxed">{r.summary}</p>
                <div className="md:col-span-1 md:text-right">
                  <ArrowRight className="ml-auto h-5 w-5 text-ink-soft transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <a
              href="mailto:careers@saathyours.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
            >
              Send us your CV
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/" className="text-sm text-ink-soft underline underline-offset-4 hover:text-ink">
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
