import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, ShoppingCart, Truck } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney } from "@/lib/shopify";
import { toCartItem, useShopifyCatalog, type ShopifyMatch } from "@/hooks/useShopifyCatalog";
import { shopCategories, shopProducts, formatPrice } from "@/data/shop";
import { toast } from "sonner";

export const Route = createFileRoute("/shop/$productId")({
  head: ({ params }) => {
    const product = shopProducts.find((p) => p.id === params.productId);
    const title = product ? `${product.name} | PakBuilt Shop` : "Product Not Found | PakBuilt";
    return {
      meta: [
        { title },
        { name: "description", content: product?.spec ?? "" },
        { property: "og:title", content: title },
      ],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const product = shopProducts.find((p) => p.id === productId);
  const catalog = useShopifyCatalog();
  const match = product ? catalog.match(product) : null;

  if (!product) {
    return (
      <>
        <PageHero eyebrow="Shop" title="Product Not Found" />
        <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground">This product doesn't exist or has been removed.</p>
          <Button asChild variant="cta" size="lg" className="mt-6">
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </section>
      </>
    );
  }

  const category = shopCategories.find((c) => c.slug === product.category);
  const related = shopProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Shop" title={product.name} subtitle={product.spec} />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/shop"
          search={category ? { category: category.slug } : {}}
          className="font-display inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase mb-8"
        >
          <ArrowLeft className="size-3.5" />
          Back to {category?.name ?? "Shop"}
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <Reveal variant="clip">
            <div className="relative overflow-hidden rounded-xl border border-border bg-sand">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground uppercase">
                  {product.badge}
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={80}>
            <div className="flex flex-col">
              <span className="font-display text-[0.65rem] font-bold tracking-[0.16em] text-primary uppercase">
                {product.brand}
              </span>
              <h1 className="font-display mt-2 text-3xl font-bold sm:text-4xl">{product.name}</h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{product.spec}</p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-foreground">
                  {match ? formatMoney(match.variant.price) : formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-sm text-muted-foreground">per {product.unit}</span>
              </div>
              {product.originalPrice && (
                <span className="mt-1 inline-block text-xs font-bold text-primary">
                  Save {formatPrice(product.originalPrice - product.price)}
                </span>
              )}

              {/* Features */}
              <ul className="mt-6 space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Add to cart */}
              <AddToCartSection product={product} match={match} loading={catalog.isLoading} />

              {/* Delivery note */}
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-sand p-4">
                <Truck className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Delivery Coordinated</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Location, access and timing confirmed before dispatch. Bulk orders may qualify
                    for free delivery.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold">More in {category?.name}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 40}>
                  <Link
                    to="/shop/$productId"
                    params={{ productId: p.id }}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-sand">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-4">
                      <span className="font-display text-[0.6rem] font-bold tracking-[0.16em] text-primary uppercase">
                        {p.brand}
                      </span>
                      <h3 className="font-display mt-1 text-sm font-bold leading-snug group-hover:text-primary">
                        {p.name}
                      </h3>
                      <p className="mt-2 font-display text-base font-bold">
                        {formatPrice(p.price)}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function AddToCartSection({
  product,
  match,
  loading,
}: {
  product: (typeof shopProducts)[number];
  match: ShopifyMatch | null;
  loading: boolean;
}) {
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((s) => s.addItem);
  const cartLoading = useCartStore((s) => s.isLoading);

  async function handleAdd() {
    if (!match) return;
    await addItem(toCartItem(product, match, qty));
    toast.success(`${qty}× ${product.name} added to cart`);
  }

  if (!match && !loading) {
    return (
      <div className="mt-8">
        <Button asChild variant="cta" size="lg">
          <Link to="/contact">Request a Quote</Link>
        </Button>
        <p className="mt-2 text-xs text-muted-foreground">
          This item isn't available to order online yet. Send us your requirement and we'll quote
          you.
        </p>
      </div>
    );
  }

  const unit = match ? Number.parseFloat(match.variant.price.amount) : 0;
  const soldOut = match ? !match.variant.availableForSale : false;

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <div className="flex items-center rounded-md border border-border bg-card">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="grid size-10 place-items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="size-4" />
        </button>
        <span className="font-display w-10 text-center text-sm font-bold">{qty}</span>
        <button
          type="button"
          onClick={() => setQty((q) => q + 1)}
          className="grid size-10 place-items-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="size-4" />
        </button>
      </div>
      <Button
        variant="cta"
        size="lg"
        onClick={handleAdd}
        disabled={!match || soldOut || cartLoading}
        className="flex-1 sm:flex-none"
      >
        <ShoppingCart className="size-4" />
        {soldOut
          ? "Out of stock"
          : match
            ? `Add to Cart — ${formatMoney({ amount: String(unit * qty), currencyCode: match.variant.price.currencyCode })}`
            : "Loading…"}
      </Button>
    </div>
  );
}
