<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import QuoteModal from '#lib/components/QuoteModal.svelte';
	import WhatsAppFloating from '#lib/components/WhatsAppFloating.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-white font-sans text-navy-950 selection:bg-brand-blue selection:text-white"
>
	{@render children()}
	<QuoteModal />
	<WhatsAppFloating />
</div>
