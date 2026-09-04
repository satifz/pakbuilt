import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { categories, products, type Product } from "@/data/catalog";
import { company } from "@/data/company";

const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? "Materials";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full w-[17.5rem] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift sm:w-auto">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-primary uppercase">
          {categoryName(product.categorySlug)}
        </span>
        <h3 className="font-display mt-2 text-base font-bold">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.spec}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          {product.brand} • {product.availability}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild variant="cta" size="sm">
            <Link to="/contact">Request Price</Link>
          </Button>
          <Button asChild variant="onLight" size="sm">
            <a href={company.whatsappHref} target="_blank" rel="noreferrer">
              Request Quote
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

/** Horizontally scrolling sample-product rail. Demo data only — no prices shown. */
export function FeaturedProducts() {
  return (
    <section className="overflow-hidden bg-sand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sample listings"
          title="Materials We're Commonly Asked For"
          subtitle="Demonstration entries showing how the catalogue will present real products. Pricing is always quoted against your actual requirement."
        />
      </div>
      <Reveal className="mt-12 max-w-none">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8">
          {products.map((p) => (
            <div key={p.slug} className="snap-start">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
