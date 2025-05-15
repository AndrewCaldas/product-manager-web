'use client';

import { useProductStore } from '@/store/productStore';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export function SortFilter() {
  const sort = useProductStore((state) => state.sort);
  const setSort = useProductStore((state) => state.setSort);

  return (
    <div className="w-full max-w-xs">
      <Select value={sort} onValueChange={setSort}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name-asc">Nome (A-Z)</SelectItem>
          <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
          <SelectItem value="price-asc">Preço (menor ao maior)</SelectItem>
          <SelectItem value="price-desc">Preço (maior ao menor)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
