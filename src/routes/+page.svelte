<script lang="ts">
	import SEO from '#lib/components/SEO.svelte';
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Services from '#lib/components/Services.svelte';
	import DarkEditorial from '#lib/components/DarkEditorial.svelte';
	import Process from '#lib/components/Process.svelte';
	import Solutions from '#lib/components/Solutions.svelte';
	import Differentials from '#lib/components/Differentials.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import QualityCare from '#lib/components/QualityCare.svelte';
	import FAQ from '#lib/components/FAQ.svelte';
	import FinalCTA from '#lib/components/FinalCTA.svelte';
	import Footer from '#lib/components/Footer.svelte';
</script>

<SEO />

<Header />

<main id="main-content" class="flex-1">
	<!-- Section 2: Hero -->
	<Hero />

	<!-- Section 3: Serviços -->
	<Services />

	<!-- Section 4: Bloco Editorial Escuro -->
	<DarkEditorial />

	<!-- Section 5: Processo de Atendimento -->
	<Process />

	<!-- Section 6: Soluções Residenciais e Comerciais -->
	<Solutions />

	<!-- Section 7: Diferenciais de Atendimento -->
	<Differentials />

	<!-- Section 8: Projetos e Serviços Realizados (Escuro) -->
	<Projects />

	<!-- Section 9: Qualidade e Cuidado -->
	<QualityCare />

	<!-- Section 10: Perguntas Frequentes -->
	<FAQ />

	<!-- Section 11: CTA Final (Escuro) -->
	<FinalCTA />
</main>

<!-- Section 12: Rodapé Completo -->
<Footer />
