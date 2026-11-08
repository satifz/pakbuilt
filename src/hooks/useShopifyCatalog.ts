import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchShopifyProducts, type ShopifyProduct, type ShopifyVariant } from "@/lib/shopify";
import { shopCategories, shopProducts, type ShopProduct } from "@/data/shop";
import type { CartItem } from "@/stores/cartStore";

export interface ShopifyMatch {
  variant: ShopifyVariant;
  title: string;
  image?: string | undefined;
}

type ShopifyNode = ShopifyProduct["node"];

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function pickVariant(p: ShopifyNode): ShopifyVariant | null {
  const variants = p.variants.edges.map((e) => e.node);
  return variants.find((v) => v.availableForSale) ?? variants[0] ?? null;
}

function toMatch(n: ShopifyNode): ShopifyMatch | null {
  const variant = pickVariant(n);
  if (!variant) return null;
  return { variant, title: n.title, image: n.images.edges[0]?.node.url };
}

/** Finds the category slug for a Shopify product from its product type or tags. */
function categoryFor(n: ShopifyNode): string {
  const candidates = [n.productType ?? "", ...(n.tags ?? [])].map(norm).filter(Boolean);
  for (const c of candidates) {
    const hit = shopCategories.find((cat) => norm(cat.name) === c || norm(cat.slug) === c);
    if (hit) return hit.slug;
  }
  return "";
}

/** Builds a shop card for a product that exists in Shopify but not in the local catalogue. */
function fromShopify(n: ShopifyNode): ShopProduct {
  const category = categoryFor(n);
  const cat = shopCategories.find((c) => c.slug === category);
  const subTag = (n.tags ?? []).find((t) => !cat || norm(t) !== norm(cat.name));
  const firstImage = n.images.edges[0]?.node.url;
  return {
    id: n.handle,
    name: n.title,
    category,
    subcategory: subTag ?? n.productType ?? "",
    brand: n.vendor ?? "",
    spec: n.description.trim().slice(0, 140),
    unit: "",
    price: Number.parseFloat(n.priceRange.minVariantPrice.amount),
    image: firstImage ?? cat?.image ?? shopCategories[0]!.image,
    features: [],
  };
}

export interface ShopEntry {
  product: ShopProduct;
  match: ShopifyMatch | null;
}

/**
 * Merges your local catalogue (images, specs) with the live Shopify catalogue.
 * - Local products link to their Shopify product (by handle, then title) for price + checkout.
 * - Any product that exists ONLY in Shopify is added to the shop automatically.
 * - Local products with no Shopify match stay listed as "Request Quote".
 */
export function useShopifyCatalog() {
  const query = useQuery({
    queryKey: ["shopify-products"],
    queryFn: () => fetchShopifyProducts(250),
    staleTime: 60_000,
  });

  const nodes = useMemo(() => (query.data ?? []).map((p) => p.node), [query.data]);

  const entries = useMemo<ShopEntry[]>(() => {
    const used = new Set<string>();

    const findFor = (local: ShopProduct): ShopifyNode | null => {
      const free = nodes.filter((n) => !used.has(n.handle));
      const name = norm(local.name);
      let found =
        free.find((n) => n.handle === local.id) ?? free.find((n) => norm(n.title) === name) ?? null;
      if (!found) {
        const partial = free.filter((n) => {
          const t = norm(n.title);
          return t.startsWith(name) || name.startsWith(t);
        });
        if (partial.length === 1) found = partial[0] ?? null;
      }
      return found;
    };

    const result: ShopEntry[] = shopProducts.map((product) => {
      const node = findFor(product);
      if (node) used.add(node.handle);
      return { product, match: node ? toMatch(node) : null };
    });

    for (const n of nodes) {
      if (used.has(n.handle)) continue;
      const match = toMatch(n);
      if (match) result.push({ product: fromShopify(n), match });
    }
    return result;
  }, [nodes]);

  const products = useMemo(() => entries.map((e) => e.product), [entries]);
  const matchMap = useMemo(() => new Map(entries.map((e) => [e.product.id, e.match])), [entries]);

  return {
    products,
    match: (local: ShopProduct): ShopifyMatch | null => matchMap.get(local.id) ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    count: nodes.length,
  };
}

/** Builds the cart line for a matched product. `handle` holds the product id so cart links work. */
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
