# Product Manager Web

Aplicação web para cadastro e gerenciamento de produtos.

## Como rodar o projeto

```bash
# Instale as dependências
pnpm install

# Rode o projeto em modo dev
pnpm run dev
```

## Rodar os testes

```bash
pnpm run test
```

## Tecnologias e Ferramentas

- Next.js App Router
- TypeScript
- Zustand (estado global)
- Tailwind CSS + Shadcn UI
- Jest + React Testing Library
- Mock IO (API fake)
- ESLint, Prettier (padronização de código)

## Funcionalidades

- Listagem de produtos
- Filtros (nome, preço)
- Ordenação (nome, preço)
- Cadastro de produto
- Teste de Snapshot
- Layout responsivo

## Estrutura de Pastas

├── src/
│ ├── app/              # Páginas e layouts
│ ├── components/       # Componentes reutilizáveis
│ ├── lib/              # Funções utilitárias e API
│ ├── store/            # Zustand store
│ ├── types/            # Tipagens globais
│ ├── **__tests__**/    # Testes automatizados
