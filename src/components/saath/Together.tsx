import clinicRoom from "@/assets/clinic-room.jpg";
import { MapPin, Clock, Phone } from "lucide-react";

const Together = () => {
  return (
    <section id="clinic" className="container py-24 md:py-32">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">The Saath clinic</p>
          <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
            A real place. With a real door you can walk through.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft text-balance">
            We're a chemist and sexual health clinic in one. ED, painful intimacy, lumps you've been worrying about, contraception, STI checks, fertility questions — bring it in. We'll have a look, talk it through, and dispense whatever you need on the spot.
          </p>

          <ul className="mt-8 space-y-4 border-t border-border pt-8">
            <li className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-ink">Ground floor, 14 Linking Road</p>
                <p className="text-sm text-ink-soft">Bandra West, Mumbai 400050</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-ink">Open every day · 9am — 9pm</p>
                <p className="text-sm text-ink-soft">Walk-ins welcome. Bookings always honoured first.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-ink">+91 22 4000 1100</p>
                <p className="text-sm text-ink-soft">Or write to hello@saathyours.com</p>
              </div>
            </li>
          </ul>

          <a
            href="#visit"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-lift"
          >
            Book a private visit →
          </a>
        </div>
        <div className="order-1 md:order-2">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            <img
              src={clinicRoom}
              alt="A private consultation room inside the Saath clinic"
              width={1400}
              height={1000}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Together;
