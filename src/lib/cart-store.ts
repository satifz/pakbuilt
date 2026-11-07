import { useSyncExternalStore } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  qty: number;
}

type Listener = () => void;

let items: CartItem[] = [];
const listeners = new Set<Listener>();

function emit() {
  for (const l of listeners) l();
}

function snapshot(): CartItem[] {
  return items;
}

function subscribe(l: Listener) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function addToCart(product: Omit<CartItem, "qty">, qty = 1) {
  const existing = items.find((i) => i.id === product.id);
  if (existing) {
    items = items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
  } else {
    items = [...items, { ...product, qty }];
  }
  emit();
}

export function updateQty(id: string, qty: number) {
  if (qty <= 0) {
    items = items.filter((i) => i.id !== id);
  } else {
    items = items.map((i) => (i.id === id ? { ...i, qty } : i));
  }
  emit();
}

export function removeFromCart(id: string) {
  items = items.filter((i) => i.id !== id);
  emit();
}

export function clearCart() {
  items = [];
  emit();
}

export function useCart() {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}

export function useCartCount() {
  const cart = useCart();
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

export function useCartTotal() {
  const cart = useCart();
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}
