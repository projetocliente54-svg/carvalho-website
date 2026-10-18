<script lang="ts">
	import { siteConfig } from '#lib/config/site';
	import { quoteModal } from '#lib/state/quoteModal.svelte';

	let scrollY = $state(0);
	let isMobileMenuOpen = $state(false);

	let isScrolled = $derived(scrollY > 24);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
		}
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	}

	function handleQuoteClick() {
		closeMobileMenu();
		quoteModal.open('instalacao');
	}
</script>

<svelte:window bind:scrollY />

<header
	class="fixed top-0 right-0 left-0 z-40 transition-all duration-300 {isScrolled
		? 'border-b border-slate-100 bg-white/95 py-3.5 shadow-xs backdrop-blur-md'
		: 'bg-white/80 py-5 backdrop-blur-xs'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<!-- Brand Logo -->
			<a
				href="#inicio"
				class="group flex items-center gap-2.5 rounded-lg p-0.5 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
				onclick={closeMobileMenu}
			>
				<!-- Brand geometric air symbol -->
				<div
					class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-navy-950 text-white shadow-xs transition-transform duration-200 group-hover:scale-105"
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path
							d="M4 14C5.5 14 7 12.5 8.5 10.5C10 8.5 12 7 14.5 7C17 7 19 8.5 19 11"
							stroke="#087FC4"
							stroke-width="2.2"
							stroke-linecap="round"
						/>
						<path
							d="M4 9C5 9 6 8 7 6.8C8 5.6 9.5 4.5 11.5 4.5C14 4.5 15.5 6 16 7.5"
							stroke="#38BDF8"
							stroke-width="1.8"
							stroke-linecap="round"
						/>
						<circle cx="19" cy="6" r="1.5" fill="#38BDF8" />
					</svg>
				</div>
				<div class="flex flex-col">
					<span
						class="font-heading text-lg leading-none font-extrabold tracking-tight text-navy-950"
					>
						AURA
					</span>
					<span class="mt-0.5 text-[9px] font-bold tracking-[0.22em] text-slate-500 uppercase">
						Climatização
					</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center gap-1 md:flex lg:gap-2">
				{#each siteConfig.navigation as item (item.name)}
					<a
						href={item.href}
						class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-950 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					>
						{item.name}
					</a>
				{/each}
			</nav>

			<!-- Desktop CTA Button -->
			<div class="hidden items-center gap-3 md:flex">
				<button
					type="button"
					onclick={handleQuoteClick}
					class="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-navy-900 hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none active:scale-[0.98]"
				>
					<span>Solicitar orçamento</span>
					<svg
						class="h-4 w-4 text-brand-blue transition-transform duration-200 group-hover:translate-x-0.5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2.2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</button>
			</div>

			<!-- Mobile Menu Toggle Button -->
			<div class="flex items-center gap-2 md:hidden">
				<button
					type="button"
					onclick={handleQuoteClick}
					class="inline-flex items-center justify-center rounded-lg bg-navy-950 px-3 py-1.5 text-xs font-semibold text-white shadow-xs"
				>
					Orçamento
				</button>

				<button
					type="button"
					class="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-navy-950 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
					aria-expanded={isMobileMenuOpen}
					onclick={toggleMobileMenu}
				>
					{#if isMobileMenuOpen}
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Drawer -->
	{#if isMobileMenuOpen}
		<!-- Backdrop Button -->
		<button
			type="button"
			aria-label="Fechar menu"
			class="fixed inset-0 top-[60px] z-30 h-full w-full cursor-default border-none bg-navy-950/60 backdrop-blur-xs md:hidden"
			onclick={closeMobileMenu}
		></button>

		<div
			class="animate-in slide-in-from-top-4 fixed top-[60px] right-0 left-0 z-40 border-b border-slate-200 bg-white px-6 py-6 shadow-xl duration-200 md:hidden"
		>
			<nav class="flex flex-col space-y-3">
				{#each siteConfig.navigation as item (item.name)}
					<a
						href={item.href}
						class="border-b border-slate-100 py-2 text-base font-medium text-slate-800 transition-colors last:border-none hover:text-brand-blue"
						onclick={closeMobileMenu}
					>
						{item.name}
					</a>
				{/each}
			</nav>

			<div class="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-4">
				<button
					type="button"
					onclick={handleQuoteClick}
					class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-navy-900"
				>
					Solicitar orçamento
				</button>

				<a
					href="tel:{siteConfig.contact.phone}"
					class="py-1 text-center text-xs text-slate-500 hover:text-navy-950"
				>
					Ligar para {siteConfig.contact.phoneFormatted}
				</a>
			</div>
		</div>
	{/if}
</header>
