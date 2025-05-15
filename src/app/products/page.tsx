'use client';

import { useEffect } from 'react';
import { useProductStore } from '@/store/productStore';
import { ProductCard, FilterBar } from './components';

export default function ProductListPage() {
  const { filteredProducts, loadProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Produtos</h1>

      <FilterBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts?.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
