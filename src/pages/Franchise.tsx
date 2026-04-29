import { ArrowRight, Building2, IndianRupee, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "@/components/saath/Nav";
import Footer from "@/components/saath/Footer";

const pillars = [
  {
    icon: Building2,
    title: "A turnkey clinic",
    body: "We hand over a fully-fitted neighbourhood clinic — interiors, signage, pharmacy stock, clinical equipment and SOPs.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical governance",
    body: "Doctor recruitment, training, audits and on-call medical leadership stay with us. You run the storefront; we hold the standards.",
  },
  {
    icon: Sparkles,
    title: "The Saath brand",
    body: "Marketing, packaging, voice and digital — all done centrally so every Saath looks and feels the same.",
  },
  {
    icon: IndianRupee,
    title: "Honest economics",
    body: "Transparent unit economics, shared P&L visibility, and royalty terms designed so partners actually make money.",
  },
];

const economics = [
  { label: "Initial investment", value: "₹ 65 — 90 L" },
  { label: "Clinic footprint", value: "550 — 850 sq ft" },
  { label: "Break-even", value: "14 — 18 months" },
  { label: "Royalty", value: "8% of revenue" },
];

const Franchise = () => {
  return (
    <main className="min-h-screen bg-background">
      <Nav />

      <section className="bg-gradient-hero">
        <div className="container grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-sage">Franchise with Saath</p>
            <h1 className="mt-4 font-serif-display text-5xl leading-[1.05] tracking-tight text-ink text-balance md:text-6xl lg:text-7xl">
              Bring Saath to <em className="not-italic text-sage">your city</em>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Saath is opening one neighbourhood sexual-health clinic at a time. We're now inviting a small number of operating partners to launch Saath in cities beyond Mumbai and New Delhi.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:franchise@saathyours.com?subject=Franchise enquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#cities"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-secondary"
              >
                <MapPin className="h-4 w-4" />
                Cities we're scouting
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-[2rem] border border-border bg-card/70 p-8 shadow-card backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">At a glance</p>
              <dl className="mt-6 grid grid-cols-2 gap-6">
                {economics.map((e) => (
                  <div key={e.label}>
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{e.label}</dt>
                    <dd className="mt-1 font-serif-display text-2xl text-ink">{e.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-ink-soft">
                Indicative. Final terms vary by city, format and partner profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">What you get</p>
          <h2 className="mt-3 max-w-2xl font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
            A clinic in a box, run with care.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title}>
                <p.icon className="h-6 w-6 text-sage" />
                <h3 className="mt-4 font-serif-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cities" className="border-y border-border bg-secondary/40 py-24 md:py-32">
        <div className="container grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-sage">Where we're going</p>
            <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
              Cities on our map.
            </h2>
            <p className="mt-5 text-ink-soft">
              Currently operating in Mumbai and New Delhi. Now scouting partners in:
            </p>
          </div>
          <div className="md:col-span-8">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {["Bengaluru", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Chandigarh", "Jaipur", "Lucknow", "Indore", "Kochi", "Goa"].map((c) => (
                <li key={c} className="flex items-center gap-2 border-b border-border py-3 text-ink">
                  <MapPin className="h-4 w-4 text-sage" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink-soft">
              Don't see your city? We're listening — write to us anyway.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">How it works</p>
          <h2 className="mt-3 max-w-2xl font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
            From first call to opening day.
          </h2>
          <ol className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
            {[
              { n: "01", t: "Introduction", b: "A 30-minute call to understand your city, capital and motivation." },
              { n: "02", t: "Site & terms", b: "We co-scout sites, model the unit, and finalise commercial terms." },
              { n: "03", t: "Build & hire", b: "We build the clinic and hire your clinical team. You set up local operations." },
              { n: "04", t: "Open the doors", b: "Soft launch with our team on the ground. Then it's quietly yours to run." },
            ].map((s) => (
              <li key={s.n}>
                <p className="font-serif-display text-3xl text-sage">{s.n}</p>
                <h3 className="mt-3 font-serif-display text-2xl text-ink">{s.t}</h3>
                <p className="mt-2 text-ink-soft leading-relaxed">{s.b}</p>
              </li>
            ))}
          </ol>

          <div className="mt-20 rounded-[2rem] border border-border bg-card p-10 shadow-soft md:p-14">
            <h3 className="max-w-2xl font-serif-display text-3xl text-ink md:text-4xl text-balance">
              If this sounds like the kind of business you want to build, we should talk.
            </h3>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:franchise@saathyours.com?subject=Franchise enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
              >
                franchise@saathyours.com
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/" className="text-sm text-ink-soft underline underline-offset-4 hover:text-ink">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Franchise;
