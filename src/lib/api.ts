import { Product } from '@/types';
import { v4 as uuid } from 'uuid';

let localProducts: Product[] = [];

export async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://mocki.io/v1/d72e2ce2-2b01-40e3-8b13-33a33a38f34f');
  const { products } = await res.json();

  return [...products, ...localProducts];
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
  const newProduct: Product = {
    ...product,
    id: uuid(),
  };

  // Simula delay e adiciona no array local
  await new Promise((res) => setTimeout(res, 300));
  localProducts.push(newProduct);

  return newProduct;
}
