'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm py-4 px-6 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/products" className="text-xl font-bold">
          Gerenciador de Produtos
        </Link>

        {pathname === '/products' && (
          <Link href="/products/new">
            <Button variant="default">Adicionar Produto</Button>
          </Link>
        )}

        {pathname === '/products/new' && (
          <Link href="/products">
            <Button variant="outline">Voltar para lista</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
