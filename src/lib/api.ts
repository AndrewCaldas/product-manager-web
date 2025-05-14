import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Notebook Gamer',
    category: 'Eletrônicos',
    price: 4500,
    description: 'Um notebook potente para jogos.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Fone Bluetooth',
    category: 'Acessórios',
    price: 199,
    description: 'Fone de ouvido com cancelamento de ruído.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export const fetchMockProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => resolve(mockProducts));
};
