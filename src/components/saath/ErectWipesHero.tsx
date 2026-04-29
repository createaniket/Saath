import wipesImg from "@/assets/erect-wipes.jpg";
import { ArrowRight } from "lucide-react";

const ErectWipesHero = () => {
  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <div className="container relative grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-12 md:gap-10 md:py-28">
        <div className="md:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-saffron-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-deep" />
            New
          </span>

          <h2 className="mt-5 font-serif-display text-5xl leading-[1.02] tracking-tight text-ink text-balance md:text-6xl lg:text-7xl">
            Rise Wipes.
            <span className="mt-1 block text-ink-soft">
              Last longer, <span className="text-saffron-deep">quietly</span>.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            A patented benzocaine wipe that helps you take your time — without the mess of sprays or the wait of pills. One swipe, one minute, ready when you are.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-all hover:shadow-lift"
            >
              Buy a 6-pack · ₹ 599
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#learn"
              className="text-sm font-medium text-saffron-deep underline-offset-8 hover:underline"
            >
              Learn more →
            </a>
          </div>

          <ul className="mt-14 grid max-w-xl grid-cols-3 gap-8 border-t border-border pt-8 text-xs text-ink-soft">
            <li>
              <p className="font-serif-display text-3xl text-ink">5%</p>
              <p className="mt-1.5">Benzocaine, dermatologist-tested</p>
            </li>
            <li>
              <p className="font-serif-display text-3xl text-ink">60s</p>
              <p className="mt-1.5">To take effect</p>
            </li>
            <li>
              <p className="font-serif-display text-3xl text-ink">Patented</p>
              <p className="mt-1.5">Single-use, fragrance-free</p>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-[2rem] bg-secondary/40">
            <img
              src={wipesImg}
              alt="A single Saath Rise Wipe sachet on soft cream linen"
              width={1400}
              height={1200}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErectWipesHero;
