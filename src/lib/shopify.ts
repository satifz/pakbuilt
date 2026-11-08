// Shopify Storefront API integration.
// The storefront token is a public, publishable credential (like an anon key).

export const SHOPIFY_API_VERSION = "2026-10";
export const SHOPIFY_STORE_PERMANENT_DOMAIN = "pakbuilt-build-pukka-aoxco-iduwuuaw.myshopify.com";

const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = "95fddbfb4b329600e7ac24678dab06d4";

// ---------- Types ----------

export interface ShopifyVariant {
  id: string;
  title: string;
  price: { amount: string; currencyCode: string };
  availableForSale: boolean;
  selectedOptions: Array<{ name: string; value: string }>;
}

export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    productType?: string;
    vendor?: string;
    tags?: string[];
    availableForSale: boolean;
    priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
    images: { edges: Array<{ node: { url: string; altText: string | null } }> };
    variants: { edges: Array<{ node: ShopifyVariant }> };
    options: Array<{ name: string; values: string[] }>;
  };
}

// ---------- GraphQL documents ----------

export const PRODUCTS_QUERY = /* GraphQL */ `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          productType
          vendor
          tags
          availableForSale
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = /* GraphQL */ `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      handle
      availableForSale
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 8) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

const CART_QUERY = /* GraphQL */ `
  query cart($id: ID!) {
    cart(id: $id) {
      id
      totalQuantity
    }
  }
`;

const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 100) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_ADD_MUTATION = /* GraphQL */ `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        lines(first: 100) {
          edges {
            node {
              id
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_UPDATE_MUTATION = /* GraphQL */ `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const CART_LINES_REMOVE_MUTATION = /* GraphQL */ `
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// ---------- API plumbing ----------

export async function storefrontApiRequest<T = unknown>(
  query: string,
  variables: Record<string, unknown> = {},
): Promise<T | undefined> {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status === 402) {
    console.error("Shopify: API access requires an active Shopify billing plan.");
    return undefined;
  }

  if (!response.ok) {
    throw new Error(`Shopify HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (data.errors) {
    throw new Error(
      `Error calling Shopify: ${data.errors.map((e: { message: string }) => e.message).join(", ")}`,
    );
  }

  return data as T;
}

/** Formats a Shopify money object for display, e.g. "PKR 1,250.00". */
export function formatMoney(money: { amount: string; currencyCode: string }): string {
  const amount = Number.parseFloat(money.amount);
  try {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: money.currencyCode,
      currencyDisplay: "narrowSymbol",
    }).format(amount);
  } catch {
    return `${money.currencyCode} ${amount.toFixed(2)}`;
  }
}

/** Adds the channel parameter Shopify requires for checkouts from the web. */
function formatCheckoutUrl(checkoutUrl: string): string {
  try {
    const url = new URL(checkoutUrl);
    url.searchParams.set("channel", "online_store");
    return url.toString();
  } catch {
    return checkoutUrl;
  }
}

// ---------- Cart operations (real-time sync with Shopify) ----------

export interface CartLineInputItem {
  variantId: string;
  quantity: number;
}

function isCartNotFoundError(
  userErrors: Array<{ field: string[] | null; message: string }>,
): boolean {
  return userErrors.some(
    (e) =>
      e.message.toLowerCase().includes("cart not found") ||
      e.message.toLowerCase().includes("does not exist"),
  );
}

export async function createShopifyCart(
  item: CartLineInputItem,
): Promise<{ cartId: string; checkoutUrl: string; lineId: string } | null> {
  const data = await storefrontApiRequest<{
    data: {
      cartCreate: {
        cart: {
          id: string;
          checkoutUrl: string;
          lines: { edges: Array<{ node: { id: string; merchandise: { id: string } } }> };
        } | null;
        userErrors: Array<{ field: string[] | null; message: string }>;
      };
    };
  }>(CART_CREATE_MUTATION, {
    input: { lines: [{ quantity: item.quantity, merchandiseId: item.variantId }] },
  });

  const payload = data?.data?.cartCreate;
  if (payload?.userErrors && payload.userErrors.length > 0) {
    console.error("Cart creation failed:", payload.userErrors);
    return null;
  }

  const cart = payload?.cart;
  if (!cart?.checkoutUrl) return null;

  const lineId = cart.lines.edges[0]?.node?.id;
  if (!lineId) return null;

  return { cartId: cart.id, checkoutUrl: formatCheckoutUrl(cart.checkoutUrl), lineId };
}

export async function addLineToShopifyCart(
  cartId: string,
  item: CartLineInputItem,
): Promise<{ success: boolean; lineId?: string; cartNotFound?: boolean }> {
  const data = await storefrontApiRequest<{
    data: {
      cartLinesAdd: {
        cart: {
          lines: { edges: Array<{ node: { id: string; merchandise: { id: string } } }> };
        } | null;
        userErrors: Array<{ field: string[] | null; message: string }>;
      };
    };
  }>(CART_LINES_ADD_MUTATION, {
    cartId,
    lines: [{ quantity: item.quantity, merchandiseId: item.variantId }],
  });

  const userErrors = data?.data?.cartLinesAdd?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) {
    console.error("Add line failed:", userErrors);
    return { success: false };
  }

  const lines = data?.data?.cartLinesAdd?.cart?.lines?.edges || [];
  const newLine = lines.find(
    (l: { node: { id: string; merchandise: { id: string } } }) =>
      l.node.merchandise.id === item.variantId,
  );
  const lineId = newLine?.node?.id;
  return lineId ? { success: true, lineId } : { success: true };
}

export async function updateShopifyCartLine(
  cartId: string,
  lineId: string,
  quantity: number,
): Promise<{ success: boolean; cartNotFound?: boolean }> {
  const data = await storefrontApiRequest<{
    data: {
      cartLinesUpdate: {
        cart: { id: string } | null;
        userErrors: Array<{ field: string[] | null; message: string }>;
      };
    };
  }>(CART_LINES_UPDATE_MUTATION, {
    cartId,
    lines: [{ id: lineId, quantity }],
  });

  const userErrors = data?.data?.cartLinesUpdate?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) {
    console.error("Update line failed:", userErrors);
    return { success: false };
  }
  return { success: true };
}

export async function removeLineFromShopifyCart(
  cartId: string,
  lineId: string,
): Promise<{ success: boolean; cartNotFound?: boolean }> {
  const data = await storefrontApiRequest<{
    data: {
      cartLinesRemove: {
        cart: { id: string } | null;
        userErrors: Array<{ field: string[] | null; message: string }>;
      };
    };
  }>(CART_LINES_REMOVE_MUTATION, { cartId, lineIds: [lineId] });

  const userErrors = data?.data?.cartLinesRemove?.userErrors || [];
  if (isCartNotFoundError(userErrors)) return { success: false, cartNotFound: true };
  if (userErrors.length > 0) {
    console.error("Remove line failed:", userErrors);
    return { success: false };
  }
  return { success: true };
}

export async function queryCartTotalQuantity(cartId: string): Promise<number | undefined> {
  const data = await storefrontApiRequest<{
    data: { cart: { id: string; totalQuantity: number } | null };
  }>(CART_QUERY, { id: cartId });
  return data?.data?.cart?.totalQuantity;
}

// ---------- Catalog reads ----------

export async function fetchShopifyProducts(
  first: number,
  query?: string,
): Promise<ShopifyProduct[]> {
  const data = await storefrontApiRequest<{
    data: { products: { edges: ShopifyProduct[] } | null };
  }>(PRODUCTS_QUERY, { first, query: query ?? null });

  return data?.data?.products?.edges ?? [];
}

export interface ShopifySingleProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  availableForSale: boolean;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  images: { edges: Array<{ node: { url: string; altText: string | null } }> };
  variants: { edges: Array<{ node: ShopifyVariant }> };
  options: Array<{ name: string; values: string[] }>;
}

export async function fetchShopifyProductByHandle(
  handle: string,
): Promise<ShopifySingleProduct | null> {
  const data = await storefrontApiRequest<{
    data: { product: ShopifySingleProduct | null };
  }>(PRODUCT_BY_HANDLE_QUERY, { handle });

  return data?.data?.product ?? null;
}
