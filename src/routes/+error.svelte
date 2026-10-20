<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig, whatsappUrl } from '#lib/config/site';
	import BrandMark from '#lib/components/BrandMark.svelte';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Página não encontrada' : 'Erro'} | {siteConfig.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main
	class="flex min-h-svh flex-col items-center justify-center bg-ink px-4 py-16 text-center text-white"
>
	<a href="/" aria-label="{siteConfig.name} — início"><BrandMark size={64} showText={false} /></a>
	<p class="eyebrow mt-10 text-steel">Erro {page.status}</p>
	<h1 class="mt-4 max-w-xl text-4xl font-extrabold sm:text-5xl">
		{notFound ? 'Esta página não existe.' : 'Algo não saiu como esperado.'}
	</h1>
	<p class="mt-5 max-w-md text-mist">
		Volte para o início ou fale direto com a Carvalho pelo WhatsApp.
	</p>
	<div class="mt-9 flex flex-col gap-3 sm:flex-row">
		<a
			href="/"
			class="rounded-full bg-brand px-7 py-3.5 font-semibold transition-colors hover:bg-brand-strong"
		>
			Ir para o início
		</a>
		<a
			href={whatsappUrl('duvidas')}
			target="_blank"
			rel="noopener"
			class="rounded-full border border-white/20 px-7 py-3.5 font-semibold transition-colors hover:bg-white/5"
		>
			Falar pelo WhatsApp
		</a>
	</div>
</main>
