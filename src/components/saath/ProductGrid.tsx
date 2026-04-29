import productEd from "@/assets/product-ed.jpg";
import productCondoms from "@/assets/product-condoms.jpg";
import productWellness from "@/assets/product-wellness.jpg";

type Product = {
  id: string;
  name: string;
  tag: string;
  price: string;
  blurb: string;
  image: string;
  accent: "sky" | "saffron" | "stone";
};

const products: Product[] = [
  {
    id: "rise",
    name: "Rise",
    tag: "ED treatment · Sildenafil 50mg",
    price: "₹ 1,490 / month",
    blurb: "A clinically proven first step. Reviewed by an Indian-licensed doctor before it ships.",
    image: productEd,
    accent: "sky",
  },
  {
    id: "shield",
    name: "Shield",
    tag: "Ultra-thin condoms · 12 pack",
    price: "₹ 449",
    blurb: "Vegan, fragrance-free, electronically tested. Quietly reliable, every time.",
    image: productCondoms,
    accent: "saffron",
  },
  {
    id: "calm",
    name: "Calm",
    tag: "Daily intimate care",
    price: "₹ 690",
    blurb: "A gentle balm for everyday confidence. Dermatologist tested, naturally derived.",
    image: productWellness,
    accent: "stone",
  },
];

const accentClasses: Record<Product["accent"], string> = {
  sky: "bg-sky-soft",
  saffron: "bg-saffron-soft",
  stone: "bg-secondary",
};

const ProductGrid = () => {
  return (
    <section id="shop" className="bg-secondary/30 py-24 md:py-32">
      <div className="container">
      <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-sage">From our pharmacy counter</p>
          <h2 className="mt-3 font-serif-display text-4xl tracking-tight text-ink md:text-5xl text-balance">
            Take a little Saath home.
          </h2>
        </div>
        <p className="max-w-sm text-ink-soft">
          A small, considered range you can pick up in-store or have delivered. Everything on this shelf is dispensed by our own pharmacists.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all duration-500 hover:shadow-card"
          >
            <div className={`relative aspect-[4/5] overflow-hidden ${accentClasses[p.accent]}`}>
              <img
                src={p.image}
                alt={p.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif-display text-2xl text-ink">{p.name}</h3>
                <span className="text-sm text-ink-soft">{p.price}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{p.tag}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{p.blurb}</p>
              <button className="mt-7 inline-flex items-center justify-center self-start rounded-full border border-ink/15 px-5 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-paper">
                Add to bag
              </button>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProductGrid;
