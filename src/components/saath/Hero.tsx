import heroImg from "@/assets/clinic-interior.jpg";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-12 md:gap-8 md:py-32">
        <div className="md:col-span-6 lg:col-span-5 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs tracking-wide text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" />
            Walk-in chemist & sexual health clinic
          </span>
          <h1 className="mt-6 font-serif-display text-5xl leading-[1.05] tracking-tight text-ink text-balance md:text-6xl lg:text-7xl">
            Come in. We'll <em className="not-italic text-sage">take a look</em>.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft text-balance">
            Saath means <em className="not-italic">together</em>. A neighbourhood pharmacy and clinic where you can walk in, sit down, and talk to a doctor about anything — including things that feel hard to say.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#visit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
            >
              Book a private visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-secondary"
            >
              <MapPin className="h-4 w-4" />
              Just walk in
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Open</dt>
              <dd className="mt-1 text-sm text-ink">9am — 9pm, daily</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">No</dt>
              <dd className="mt-1 text-sm text-ink">Appointment needed</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Private</dt>
              <dd className="mt-1 text-sm text-ink">Consultation rooms</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-6 lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroImg}
              alt="Inside Saath — a calm, light-filled neighbourhood chemist and sexual health clinic"
              width={1600}
              height={1200}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
