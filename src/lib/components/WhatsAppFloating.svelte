<script lang="ts">
	import { siteConfig, whatsappUrl } from '#lib/config/site';
	import WhatsAppIcon from './WhatsAppIcon.svelte';

	let scrollY = $state(0);
	let innerHeight = $state(800);

	// Aparece depois do hero, quando os CTAs principais já saíram da tela.
	let visible = $derived(scrollY > innerHeight * 0.8);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<a
	href={whatsappUrl('orcamento')}
	target="_blank"
	rel="noopener"
	aria-label="Conversar com a {siteConfig.name} pelo WhatsApp"
	tabindex={visible ? 0 : -1}
	aria-hidden={!visible}
	class="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition-[opacity,transform,background-color] duration-300 hover:bg-[#1FBE5B] sm:right-6 sm:bottom-6 {visible
		? 'translate-y-0 opacity-100'
		: 'pointer-events-none translate-y-4 opacity-0'}"
>
	<WhatsAppIcon class="h-7 w-7" />
</a>
