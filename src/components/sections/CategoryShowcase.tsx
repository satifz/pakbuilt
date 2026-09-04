import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/catalog";

/** Product category showcase — data-driven so a real catalogue can replace it. */
export function CategoryShowcase({ limit }: { limit?: number }) {
  const shown = limit ? categories.slice(0, limit) : categories;

  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Products"
          title="Products You Can Build With"
          subtitle="Browse by category and send us the specifics — quantities, specifications and finishes are confirmed on quotation."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c, i) => (
            <Reveal key={c.slug} delay={i * 50}>
              <Link
                to="/products"
                search={{ category: c.slug }}
                className="group block h-full overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.name} supplied by PakBuilt`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="font-display absolute top-3 left-3 rounded-md bg-charcoal/80 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-charcoal-foreground uppercase backdrop-blur-sm">
                    {c.group}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                  <span className="font-display mt-4 inline-flex items-center gap-1 text-xs font-bold tracking-[0.14em] text-primary uppercase">
                    View Category
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        {limit ? (
          <div className="mt-10 flex justify-center">
            <Button asChild variant="onLight" size="xl">
              <Link to="/products">See all categories</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
