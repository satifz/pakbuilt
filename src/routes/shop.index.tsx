import { createFileRoute, Link } from "@tanstack/react-router";
import { Filter, Search, ShoppingCart, X } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney } from "@/lib/shopify";
import { toCartItem, useShopifyCatalog } from "@/hooks/useShopifyCatalog";
import { shopCategories, formatPrice, type ShopProduct } from "@/data/shop";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const title = "Shop | Building Materials & Supplies | PakBuilt";
const description =
  "Browse and order building materials, construction supplies, finishes, HVAC, electrical, plumbing and fit-out products from PakBuilt.";

const searchSchema = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/shop/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.pakbuilt.com/shop" },
    ],
    links: [{ rel: "canonical", href: "https://www.pakbuilt.com/shop" }],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { category, q } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(q ?? "");
  const [showFilters, setShowFilters] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const cartLoading = useCartStore((s) => s.isLoading);
  const catalog = useShopifyCatalog();

  const active = shopCategories.find((c) => c.slug === category)?.slug;

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return catalog.products.filter((p) => {
      if (active && p.category !== active) return false;
      if (!search) return true;
      return (
        p.name.toLowerCase().includes(search) ||
        p.brand.toLowerCase().includes(search) ||
        p.subcategory.toLowerCase().includes(search) ||
        p.spec.toLowerCase().includes(search)
      );
    });
  }, [active, query, catalog.products]);

  const setCategory = (slug?: string) =>
    navigate({ search: (prev) => ({ ...prev, category: slug }), resetScroll: false });

  async function handleAdd(p: ShopProduct) {
    const m = catalog.match(p);
    if (!m) {
      toast.error("This item isn't available to order online yet. Please request a quote.");
      return;
    }
    await addItem(toCartItem(p, m, 1));
    toast.success(`${p.name} added to cart`);
  }

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Materials You Can Order"
        subtitle="Browse our catalogue of construction, finishing and fit-out materials. Add to cart and checkout through our Shopify store."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Search & filter bar */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[220px] max-w-md">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands, specs..."
                aria-label="Search shop"
                className="h-11 pl-9"
              />
            </div>
            <Button
              variant="onLight"
              size="default"
              className="lg:hidden"
              onClick={() => setShowFilters((v) => !v)}
            >
              <Filter className="size-4" />
              Filters
            </Button>
            <Button asChild variant="onLight" size="default">
              <Link to="/cart">
                <ShoppingCart className="size-4" />
                Cart
              </Link>
            </Button>
          </div>

          {/* Category chips */}
          <div
            className={cn("flex-wrap gap-2", showFilters ? "flex" : "hidden lg:flex")}
            role="group"
            aria-label="Filter by category"
          >
            <FilterChip active={!active} onClick={() => setCategory()}>
              All
            </FilterChip>
            {shopCategories.map((c) => (
              <FilterChip
                key={c.slug}
                active={active === c.slug}
                onClick={() => setCategory(c.slug)}
              >
                {c.name}
              </FilterChip>
            ))}
          </div>

          {(active || query) && (
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
          )}
        </div>

        {/* Results count */}
        <p
          className="mt-8 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase"
          aria-live="polite"
        >
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>

        {/* Product grid */}
        <div
          key={`${active ?? "all"}-${query}`}
          className="mt-4 grid animate-fade-in gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((p, i) => {
            const m = catalog.match(p);
            return (
              <Reveal key={p.id} delay={i * 30}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                  {p.badge && (
                    <span className="absolute top-3 left-3 z-10 rounded-md bg-primary px-2 py-0.5 text-[0.65rem] font-bold text-primary-foreground uppercase">
                      {p.badge}
                    </span>
                  )}

                  <Link to="/shop/$productId" params={{ productId: p.id }} className="block">
                    <div className="aspect-[4/3] overflow-hidden bg-sand">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-4">
                    <span className="font-display text-[0.6rem] font-bold tracking-[0.16em] text-primary uppercase">
                      {p.brand}
                    </span>
                    <Link to="/shop/$productId" params={{ productId: p.id }}>
                      <h2 className="font-display mt-1 text-sm font-bold leading-snug transition-colors duration-200 group-hover:text-primary">
                        {p.name}
                      </h2>
                    </Link>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {p.spec}
                    </p>

                    <div className="mt-auto pt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-lg font-bold text-foreground">
                          {m ? formatMoney(m.variant.price) : formatPrice(p.price)}
                        </span>
                        {p.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {formatPrice(p.originalPrice)}
                          </span>
                        )}
                        {p.unit && (
                          <span className="text-[0.65rem] text-muted-foreground">/{p.unit}</span>
                        )}
                      </div>
                      <div className="mt-3 flex gap-2">
                        {m || catalog.isLoading ? (
                          <Button
                            variant="cta"
                            size="sm"
                            className="flex-1"
                            disabled={!m || cartLoading || !m.variant.availableForSale}
                            onClick={() => handleAdd(p)}
                          >
                            <ShoppingCart className="size-3.5" />
                            {catalog.isLoading
                              ? "Loading…"
                              : m && !m.variant.availableForSale
                                ? "Out of stock"
                                : "Add to Cart"}
                          </Button>
                        ) : (
                          <Button asChild variant="cta" size="sm" className="flex-1">
                            <Link to="/contact">Request Quote</Link>
                          </Button>
                        )}
                        <Button asChild variant="onLight" size="sm">
                          <Link to="/shop/$productId" params={{ productId: p.id }}>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            No products matched your search. Try a different term or clear the filters.
          </p>
        )}
      </section>

      {/* CTA banner */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Can't find what you need?"
            title="Send Us Your Requirement"
            subtitle="These are sample listings. If you need a specific brand, spec or quantity — send it over and we'll source it for you."
            tone="dark"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
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
