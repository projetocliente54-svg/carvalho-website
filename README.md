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

- `url` — domínio definitivo. Enquanto vazio, canonical, Open Graph, sitemap e robots usam o domínio da requisição — o site responderia como canônico tanto em `*.pages.dev` quanto no domínio próprio. Preencha antes de divulgar o link.
- `contact.address` — o endereço (Av. Roberto Silveira, 843 — Centro) só aparece em diretório de terceiros; confirme antes de publicar.
- `contact.openingHours` — horário de atendimento.
- `social.googleReview` — hoje aponta para o perfil no Maps; troque pelo link direto "Escrever avaliação" (`g.page/r/.../review`) do Perfil da Empresa.
- `brand.logo` — hoje usa o logotipo público do Instagram (100×100 px), que fica levemente borrado em telas de alta densidade e abaixo do mínimo de 112 px que o Google recomenda para logotipos. Substitua pelo arquivo original em alta resolução em `static/brand/` (e regenere `apple-touch-icon.png`).

### Trabalhos e avaliações

- Fotos do carrossel ficam em `static/img/instalacoes/` em duas larguras (480 e 800 px, WebP, recorte 4:5) e são registradas em `works`.
- Copie avaliações do Google sem alterar o texto em `reviews`. Preencha `reviewSummary` somente com a nota e a quantidade exibidas na ficha oficial — isso também ativa o `AggregateRating` nos dados estruturados.

## Fontes e cache

- Archivo e Inter são servidas pelo próprio site (`static/fonts/`, subconjunto latino do Google Fonts, licença OFL), com `preload` em `src/app.html` e `@font-face` em `src/routes/layout.css`.
- `_headers` (na raiz do projeto — o adaptador não aceita o arquivo em `static/`) define o cache de imagens, logotipo e fontes no Cloudflare Pages. Como as imagens não têm hash no nome, ao substituir uma foto use um nome de arquivo novo.
- `src/hooks.server.ts` adiciona cabeçalhos básicos de segurança às páginas geradas pelo Worker.

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
