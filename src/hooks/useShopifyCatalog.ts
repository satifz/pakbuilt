import { useQuery } from "@tanstack/react-query";
import { fetchShopifyProducts, type ShopifyProduct, type ShopifyVariant } from "@/lib/shopify";
import type { ShopProduct } from "@/data/shop";
import type { CartItem } from "@/stores/cartStore";

export interface ShopifyMatch {
  variant: ShopifyVariant;
  title: string;
  image?: string | undefined;
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function pickVariant(p: ShopifyProduct["node"]): ShopifyVariant | null {
  const variants = p.variants.edges.map((e) => e.node);
  return variants.find((v) => v.availableForSale) ?? variants[0] ?? null;
}

/**
 * Loads the live Shopify catalogue and links each local shop product (images, specs,
 * categories) to its Shopify product so price + checkout come from Shopify.
 * A local product matches by Shopify handle === local id, then by exact title,
 * then by unique title containment.
 */
export function useShopifyCatalog() {
  const query = useQuery({
    queryKey: ["shopify-products"],
    queryFn: () => fetchShopifyProducts(250),
    staleTime: 60_000,
  });

  const products = query.data ?? [];

  function match(local: ShopProduct): ShopifyMatch | null {
    const nodes = products.map((p) => p.node);
    const localName = norm(local.name);

    let found =
      nodes.find((n) => n.handle === local.id) ??
      nodes.find((n) => norm(n.title) === localName) ??
      null;

    if (!found) {
      const partial = nodes.filter((n) => {
        const t = norm(n.title);
        return t.startsWith(localName) || localName.startsWith(t);
      });
      if (partial.length === 1) found = partial[0] ?? null;
    }
    if (!found) return null;

    const variant = pickVariant(found);
    if (!variant) return null;
    return { variant, title: found.title, image: found.images.edges[0]?.node.url };
  }

  return { match, isLoading: query.isLoading, isError: query.isError, count: products.length };
}

/** Builds the cart line for a matched product. `handle` holds the local product id so cart links work. */
export function toCartItem(
  local: ShopProduct,
  m: ShopifyMatch,
  quantity: number,
): Omit<CartItem, "lineId"> {
  return {
    variantId: m.variant.id,
    variantTitle: m.variant.title,
    handle: local.id,
    title: local.name,
    image: local.image,
    price: m.variant.price,
    quantity,
    selectedOptions: m.variant.selectedOptions,
  };
}
