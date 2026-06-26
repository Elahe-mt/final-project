import { create } from 'zustand';
import type { ProductType } from '../pages/productPage';

type FavoriteStore = {
  items: ProductType[];
  toggleFavorite: (product: ProductType) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  items: [],

  toggleFavorite: (product) =>
    set((state) => {
      const exists = state.items.find((item) => item.id === product.id);
      if (exists) {
        return { items: state.items.filter((item) => item.id !== product.id) };
      }
      return { items: [...state.items, product] };
    }),

  isFavorite: (id) => get().items.some((item) => item.id === id),
}));