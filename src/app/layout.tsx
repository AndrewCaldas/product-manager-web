import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components';

export const metadata: Metadata = {
  title: 'Gerenciador de Produtos',
  description: 'Aplicação para cadastro e listagem de produtos',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
