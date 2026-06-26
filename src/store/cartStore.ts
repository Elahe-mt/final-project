import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductType } from "../pages/productPage";

export type CartItem = ProductType & { quantity: number };

type CartState = {
  items: CartItem[];
  addItem: (product: ProductType, quantity: number) => void;
  removeItem: (id: number) => void;
};

export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set) => ({
      items: [],
      addItem: (product, quantity) =>
        set((state) => {
          const exists = state.items.find((item) => item.id === product.id);
          if (exists) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    { name: "cart-storage" }
  )
);