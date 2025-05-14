import { Product } from '@/types/product';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { name, category, description, price, imageUrl } = product;
  return (
    <div className="border rounded-xl p-4 shadow-sm space-y-2">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-sm">{description}</p>
      <p className="font-bold">R$ {price.toFixed(2)}</p>
    </div>
  );
}
