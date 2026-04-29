import { ShoppingBag, MapPin } from "lucide-react";

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-serif-display text-2xl tracking-tight text-ink">Saath</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">together</span>
        </a>

        <ul className="hidden items-center gap-10 text-sm text-ink-soft md:flex">
          <li><a href="#services" className="transition-colors hover:text-ink">Services</a></li>
          <li><a href="#clinic" className="transition-colors hover:text-ink">The Clinic</a></li>
          <li><a href="#shop" className="transition-colors hover:text-ink">Pharmacy</a></li>
          <li><a href="#learn" className="transition-colors hover:text-ink">Learn</a></li>
          <li><a href="#visit" className="transition-colors hover:text-ink">Visit</a></li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#visit"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-ink-soft transition-colors hover:bg-secondary hover:text-ink sm:inline-flex"
          >
            <MapPin className="h-3.5 w-3.5" />
            Bandra · Open today
          </a>
          <button aria-label="Bag" className="rounded-full p-2 text-ink-soft transition-colors hover:bg-secondary hover:text-ink">
            <ShoppingBag className="h-[18px] w-[18px]" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
