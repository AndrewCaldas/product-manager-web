import { create } from 'zustand';
import { Product } from '@/types/product';

type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

interface ProductStore {
  products: Product[];
  filteredProducts: Product[];
  search: string;
  priceRange: [number, number];
  sort: SortOption;
  addProduct: (product: Product) => void;
  setSearch: (search: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSort: (sort: SortOption) => void;
  applyFilters: () => void;
  loadProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filteredProducts: [],
  search: '',
  priceRange: [0, 99999],
  sort: 'name-asc',

  addProduct: (product) => {
    const updated = [...get().products, product];
    set({ products: updated }, () => get().applyFilters());
  },

  setSearch: (search) => set({ search }, () => get().applyFilters()),

  setPriceRange: (range) => set({ priceRange: range }, () => get().applyFilters()),

  setSort: (sort) => set({ sort }, () => get().applyFilters()),

  loadProducts: (products) => set({ products }, () => get().applyFilters()),

  applyFilters: () => {
    const { products, search, priceRange, sort } = get();

    let result = [...products];

    if (search) {
      result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sort) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
    }

    set({ filteredProducts: result });
  },
}));
