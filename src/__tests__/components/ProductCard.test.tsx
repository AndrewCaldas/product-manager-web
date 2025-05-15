import { render } from '@testing-library/react';
import { ProductCard } from '@/app/products/components';
import { Product } from '@/types';

let mockProduct: Product;

beforeEach(() => {
  mockProduct = {
    id: '1',
    name: 'Notebook Gamer',
    category: 'Eletrônicos',
    price: 4500,
    description: 'Um notebook potente para jogos.',
    imageUrl: 'https://picsum.photos/300/200',
  };
});

describe('ProductCard', () => {
  it('deve renderizar corretamente e bater o snapshot', () => {
    const { container } = render(<ProductCard product={mockProduct} />);
    expect(container).toMatchSnapshot();
  });
});
