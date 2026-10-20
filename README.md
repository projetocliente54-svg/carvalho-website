# Carvalho Refrigeração — site

Site institucional e comercial da Carvalho Refrigeração (Paraty, RJ), em SvelteKit + TypeScript + Tailwind, com deploy no Cloudflare Pages.

## Onde editar o conteúdo

| O quê                                                                              | Arquivo                   |
| ---------------------------------------------------------------------------------- | ------------------------- |
| Telefone, WhatsApp, mensagens pré-preenchidas, Instagram, Google, URL do site, SEO | `src/lib/config/site.ts`  |
| Serviços e perguntas frequentes                                                    | `src/lib/data/content.ts` |
| Fotos de trabalhos realizados e avaliações do Google                               | `src/lib/data/proof.ts`   |

### Pendências de configuração

Campos marcados com `PENDENTE` em `site.ts` ficam fora do site enquanto forem `null`:

- `url` — domínio definitivo. Enquanto vazio, canonical, sitemap e robots usam o domínio da requisição.
- `contact.address` — o endereço (Av. Roberto Silveira, 843 — Centro) só aparece em diretório de terceiros; confirme antes de publicar.
- `contact.openingHours` — horário de atendimento.
- `social.googleMaps` / `social.googleReview` — links do Perfil da Empresa no Google.
- `brand.logo` — hoje usa o logotipo público do Instagram (100×100 px). Substitua pelo arquivo original em alta resolução em `static/brand/`.

### Trabalhos e avaliações

- Adicione fotos reais em `static/img/trabalhos/` (WebP, ~1200 px) e registre-as em `works`.
- Copie avaliações do Google sem alterar o texto em `reviews`. Preencha `reviewSummary` somente com a nota e a quantidade exibidas na ficha oficial — isso também ativa o `AggregateRating` nos dados estruturados.

## Deploy no Cloudflare Pages

Este projeto está 100% configurado para deploy contínuo no **Cloudflare Pages** através do `@sveltejs/adapter-cloudflare`.

### Configurações no painel do Cloudflare Pages:

- **Framework preset:** `SvelteKit`
- **Build command:** `npm run build`
- **Build output directory:** `.svelte-kit/cloudflare`
- **Root directory:** `/` (ou a pasta do projeto se estiver em monorepo)
- **Node.js Version:** `22` (definida automaticamente pelos arquivos `.node-version`, `.nvmrc` e `engines` no `package.json`)

---

## Desenvolvimento Local

```sh
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Checagem de tipos
npm run check

# Linter e formatação
npm run lint
npm run format

# Build de produção
npm run build

# Preview da build
npm run preview
```
