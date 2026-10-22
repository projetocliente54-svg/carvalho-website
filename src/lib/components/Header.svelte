<script lang="ts">
	import { siteConfig, whatsappUrl } from '#lib/config/site';
	import BrandMark from './BrandMark.svelte';
	import WhatsAppIcon from './WhatsAppIcon.svelte';

	let scrollY = $state(0);
	let menuOpen = $state(false);
	let solid = $derived(scrollY > 32 || menuOpen);

	function setMenu(open: boolean) {
		menuOpen = open;
		document.body.style.overflow = open ? 'hidden' : '';
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && menuOpen) setMenu(false);
	}

	// O menu some no desktop (lg); sem isso, girar um tablet com o menu aberto deixava a página sem rolagem.
	$effect(() => {
		const desktop = matchMedia('(min-width: 64rem)');
		const onChange = () => desktop.matches && setMenu(false);
		desktop.addEventListener('change', onChange);
		return () => desktop.removeEventListener('change', onChange);
	});
</script>

<svelte:window bind:scrollY onkeydown={onKeydown} />

<a
	href="#conteudo"
	class="sr-only z-[60] rounded bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
>
	Pular para o conteúdo
</a>

<header
	class="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 {solid
		? 'border-b border-white/8 bg-ink/92 backdrop-blur-md'
		: 'border-b border-transparent bg-transparent'}"
>
	<div
		class="mx-auto flex h-[var(--header-h)] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8"
	>
		<a href="#inicio" class="shrink-0 rounded-full" aria-label="{siteConfig.name} — início">
			<BrandMark size={44} />
		</a>

		<nav aria-label="Principal" class="hidden lg:block">
			<ul class="flex items-center gap-1">
				{#each siteConfig.navigation as item (item.href)}
					<li>
						<a
							href={item.href}
							class="group relative px-3.5 py-2 text-sm font-medium text-white/72 transition-colors hover:text-white"
						>
							{item.label}
							<span
								class="absolute inset-x-3.5 bottom-0.5 h-px origin-left scale-x-0 bg-sky transition-transform duration-300 group-hover:scale-x-100"
							></span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-2">
			<a
				href={whatsappUrl('orcamento')}
				target="_blank"
				rel="noopener"
				class="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong sm:inline-flex"
			>
				<WhatsAppIcon class="h-4 w-4" />
				Solicitar orçamento
			</a>

			<button
				type="button"
				class="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
				aria-expanded={menuOpen}
				aria-controls="menu-mobile"
				aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
				onclick={() => setMenu(!menuOpen)}
			>
				<svg
					class="h-6 w-6"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
				>
					{#if menuOpen}
						<path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
					{:else}
						<path stroke-linecap="round" d="M4 8h16M4 16h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div
			id="menu-mobile"
			class="h-[calc(100dvh-var(--header-h))] overflow-y-auto border-t border-white/8 bg-ink px-4 pt-4 pb-8 sm:px-6 lg:hidden"
		>
			<nav aria-label="Menu mobile">
				<ul class="divide-y divide-white/8">
					{#each siteConfig.navigation as item, i (item.href)}
						<li>
							<a
								href={item.href}
								class="flex items-center justify-between py-4 font-heading text-2xl font-semibold text-white [font-stretch:110%]"
								onclick={() => setMenu(false)}
							>
								{item.label}
								<span class="font-sans text-xs text-mist tabular-nums">0{i + 1}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<a
				href={whatsappUrl('orcamento')}
				target="_blank"
				rel="noopener"
				class="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 font-semibold text-white"
				onclick={() => setMenu(false)}
			>
				<WhatsAppIcon />
				Solicitar orçamento pelo WhatsApp
			</a>
			<p class="mt-4 text-center text-sm text-mist">
				{siteConfig.contact.phoneDisplay} · {siteConfig.city}, {siteConfig.regionCode}
			</p>
		</div>
	{/if}
</header>
