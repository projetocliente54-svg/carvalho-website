<script lang="ts">
	import SEO from '#lib/components/SEO.svelte';
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Services from '#lib/components/Services.svelte';
	import Equipment from '#lib/components/Equipment.svelte';
	import Proof from '#lib/components/Proof.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import WhatsAppFloating from '#lib/components/WhatsAppFloating.svelte';
</script>

<SEO />

<Header />

<main id="conteudo">
	<Hero />
	<Services />
	<Equipment />
	<Proof />
	<Contact />
</main>

<Footer />
<WhatsAppFloating />
