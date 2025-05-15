'use client';

import { useState, useEffect } from 'react';
import { Input, Slider, Label } from '@/components/ui';
import { useProductStore } from '@/store/productStore';

export function FilterBar() {
  const { search, priceRange, setSearch, setPriceRange } = useProductStore();

  const [localPrice, setLocalPrice] = useState<[number, number]>(priceRange);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setPriceRange(localPrice);
    }, 400);

    return () => clearTimeout(debounce);
  }, [localPrice]);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center py-4">
      <Input
        placeholder="Buscar por nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      <div className="flex flex-col gap-1 w-full max-w-sm">
        <Label>
          Faixa de preço: R$ {localPrice[0]} - R$ {localPrice[1]}
        </Label>
        <Slider
          min={0}
          max={5000}
          step={50}
          value={localPrice}
          onValueChange={(val) => setLocalPrice(val as [number, number])}
        />
      </div>
    </div>
  );
}
