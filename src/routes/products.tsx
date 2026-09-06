import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { BoqBanner } from "@/components/sections/Blocks";
import { ProductCard } from "@/components/sections/FeaturedProducts";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories, products } from "@/data/catalog";
import { cn } from "@/lib/utils";

const title = "Products | Building Materials & Construction Supplies Karachi";
const description =
  "Browse PakBuilt product categories: construction materials, finishes, flooring, ceilings, hardware, plumbing, electrical, HVAC, MEP, waterproofing, paints and fit-out materials.";

const searchSchema = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/products")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pakbuilt.com/products" },
    ],
    links: [{ rel: "canonical", href: "https://www.pakbuilt.com/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState("");

  const active = categories.find((c) => c.slug === category)?.slug;

  const visibleCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories.filter((c) => {
      if (active && c.slug !== active) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.blurb.toLowerCase().includes(q) ||
        c.subcategories.some((s) => s.toLowerCase().includes(q))
      );
    });
  }, [active, query]);

  const visibleProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (active && p.categorySlug !== active) return false;
      if (!q) return true;
      return p.name.toLowerCase().includes(q) || p.spec.toLowerCase().includes(q);
    });
  }, [active, query]);

  const setCategory = (slug?: string) =>
    navigate({ search: slug ? { category: slug } : {}, resetScroll: false });

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products You Can Build With"
        subtitle="We list categories rather than pretending every SKU is on a shelf. Tell us the specification and we source it."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5">
          <div className="relative max-w-md">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search materials, e.g. tiles, ducting, cable"
              aria-label="Search products and categories"
              className="h-11 pl-9"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            <FilterChip active={!active} onClick={() => setCategory()}>
              All categories
            </FilterChip>
            {categories.map((c) => (
              <FilterChip key={c.slug} active={active === c.slug} onClick={() => setCategory(c.slug)}>
                {c.name}
              </FilterChip>
            ))}
          </div>

          {active || query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory();
              }}
              className="font-display inline-flex w-fit items-center gap-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase"
            >
              <X className="size-3.5" />
              Clear filters
            </button>
          ) : null}
        </div>

        <p className="mt-8 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase" aria-live="polite">
          {visibleCategories.length} {visibleCategories.length === 1 ? "category" : "categories"}
          {visibleProducts.length > 0 ? ` · ${visibleProducts.length} sample listings` : ""}
        </p>

        <div
          key={`${active ?? "all"}-${query}`}
          className="mt-4 grid animate-fade-in gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleCategories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 40}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={`${c.name} available through PakBuilt`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-primary uppercase">
                    {c.group}
                  </span>
                  <h2 className="font-display mt-2 text-lg font-bold transition-transform duration-300 ease-out group-hover:translate-x-0.5">
                    {c.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {c.subcategories.map((s) => (
                      <li
                        key={s}
                        className="rounded-md bg-sand px-2 py-1 text-[0.7rem] text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    <Button variant="onLight" size="sm" onClick={() => setCategory(c.slug)}>
                      View Category
                    </Button>
                    <Button asChild variant="cta" size="sm">
                      <Link to="/contact">Enquire</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {visibleCategories.length === 0 && visibleProducts.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Nothing matched that search. If it is construction, fit-out or building-services related,
            send us the requirement anyway — the categories are a starting point, not a limit.
          </p>
        ) : null}

        {visibleProducts.length > 0 ? (
          <div className="mt-20">
            <SectionHeading
              eyebrow="Sample listings"
              title="Example products in this selection"
              subtitle="Demonstration entries only — no prices are published. Quotes are issued against your specification and quantity."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visibleProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <BoqBanner />
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "font-display rounded-full border px-3.5 py-2 text-xs font-bold tracking-wide uppercase transition-[color,background-color,border-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card text-foreground/70 hover:border-primary hover:text-primary",
      )}
    >
      {children}
    </button>
  );
}
