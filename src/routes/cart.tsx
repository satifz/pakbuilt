import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { formatMoney } from "@/lib/shopify";
import { useHydrated } from "@/hooks/useHydrated";
import { company } from "@/data/company";

const title = "Cart | PakBuilt Shop";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [{ title }, { property: "og:title", content: title }],
  }),
  component: CartPage,
});

function CartPage() {
  const hydrated = useHydrated();
  const storeItems = useCartStore((s) => s.items);
  const checkoutUrl = useCartStore((s) => s.checkoutUrl);
  const isLoading = useCartStore((s) => s.isLoading);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clearCart);

  const items = hydrated ? storeItems : [];
  const currency = items[0]?.price.currencyCode ?? "PKR";
  const totalAmount = items.reduce((n, i) => n + Number.parseFloat(i.price.amount) * i.quantity, 0);
  const total = formatMoney({ amount: String(totalAmount), currencyCode: currency });

  return (
    <>
      <PageHero
        eyebrow="Cart"
        title="Your Cart"
        subtitle="Review your selection below. Checkout is handled securely through our Shopify store."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="font-display inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.14em] text-primary uppercase mb-8"
        >
          <ArrowLeft className="size-3.5" />
          Continue Shopping
        </Link>

        {items.length === 0 ? (
          <Reveal>
            <div className="rounded-xl border border-dashed border-border p-16 text-center">
              <ShoppingCart className="mx-auto size-12 text-muted-foreground/40" />
              <h2 className="font-display mt-4 text-xl font-bold">Your cart is empty</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Browse our catalogue and add products to get started.
              </p>
              <Button asChild variant="cta" size="lg" className="mt-6">
                <Link to="/shop">Browse Shop</Link>
              </Button>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Cart items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </p>
                <button
                  type="button"
                  onClick={clearCart}
                  className="font-display text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase hover:text-destructive transition-colors"
                >
                  Clear all
                </button>
              </div>

              {items.map((item, i) => (
                <Reveal key={item.variantId} delay={i * 30}>
                  <div className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-card">
                    <Link
                      to="/shop/$productId"
                      params={{ productId: item.handle }}
                      className="shrink-0"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-20 rounded-lg object-cover sm:size-24"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col min-w-0">
                      <Link
                        to="/shop/$productId"
                        params={{ productId: item.handle }}
                        className="font-display text-sm font-bold hover:text-primary transition-colors truncate"
                      >
                        {item.title}
                      </Link>
                      <span className="mt-0.5 text-xs text-muted-foreground">
                        {formatMoney(item.price)}
                      </span>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-md border border-border bg-background">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                            className="grid size-8 place-items-center text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Decrease"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="font-display w-8 text-center text-xs font-bold">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                            className="grid size-8 place-items-center text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Increase"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-display text-sm font-bold">
                            {formatMoney({
                              amount: String(Number.parseFloat(item.price.amount) * item.quantity),
                              currencyCode: item.price.currencyCode,
                            })}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.variantId)}
                            className="grid size-8 place-items-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                            aria-label={`Remove ${item.title}`}
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Order summary */}
            <Reveal delay={60}>
              <div className="sticky top-28 rounded-xl border border-border bg-card p-6 shadow-card">
                <h2 className="font-display text-lg font-bold">Order Summary</h2>

                <div className="mt-5 space-y-3 border-b border-border pb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="text-xs text-muted-foreground">Coordinated after order</span>
                  </div>
                </div>

                <div className="mt-5 flex justify-between">
                  <span className="font-display text-base font-bold">Total</span>
                  <span className="font-display text-xl font-bold text-primary">{total}</span>
                </div>

                {/* Shopify checkout button */}
                <Button
                  variant="cta"
                  size="xl"
                  className="mt-6 w-full group"
                  disabled={!checkoutUrl || isLoading}
                  onClick={() => {
                    if (checkoutUrl) window.location.href = checkoutUrl;
                  }}
                >
                  {isLoading ? "Updating cart…" : "Checkout"}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <p className="mt-3 text-center text-[0.65rem] text-muted-foreground">
                  You'll be redirected to our secure Shopify store to complete payment.
                </p>

                {/* Alternate: WhatsApp order */}
                <div className="mt-5 border-t border-border pt-5">
                  <p className="text-center text-xs font-medium text-muted-foreground">
                    Or send your order via WhatsApp
                  </p>
                  <Button asChild variant="whatsapp" size="lg" className="mt-3 w-full">
                    <a href={buildWhatsAppOrderUrl(items, total)} target="_blank" rel="noreferrer">
                      WhatsApp Order
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Bulk orders"
            title="Need a Custom Quote?"
            subtitle="For project quantities, BOQ-based procurement or items not listed — send us your requirement."
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

function buildWhatsAppOrderUrl(
  items: { title: string; quantity: number; price: { amount: string; currencyCode: string } }[],
  total: string,
) {
  const lines = items.map((i) => `• ${i.quantity}× ${i.title} (${formatMoney(i.price)})`);
  const msg = [
    "Hi PakBuilt, I'd like to order the following:",
    "",
    ...lines,
    "",
    `Total: ${total}`,
    "",
    "Please confirm availability and delivery.",
  ].join("\n");

  return `https://wa.me/${company.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
}
