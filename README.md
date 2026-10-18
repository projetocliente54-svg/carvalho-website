# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@1.1.1 create --template minimal --types ts --add prettier eslint tailwindcss="plugins:none" --install npm my-climatizacao
```

## Adding features

Add features to your project with `sv add`:

```sh
npx sv add
```

For example, to add Tailwind CSS:

```sh
npx sv add tailwindcss
```

## Deploy no Cloudflare Pages

Este projeto está 100% configurado para deploy contínuo no **Cloudflare Pages** através do `@sveltejs/adapter-cloudflare`.

### Configurações no painel do Cloudflare Pages:

- **Framework preset:** `SvelteKit`
- **Build command:** `npm run build`
- **Build output directory:** `.svelte-kit/cloudflare`
- **Root directory:** `/` (ou a pasta do projeto se estiver em monorepo)
- **Node.js Version:** `20` (definida automaticamente pelos arquivos `.node-version`, `.nvmrc` e `engines` no `package.json`)

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
