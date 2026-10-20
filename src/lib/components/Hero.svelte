<script lang="ts">
	import { siteConfig, whatsappUrl } from '#lib/config/site';
	import WhatsAppIcon from './WhatsAppIcon.svelte';

	const strip = [
		'Instalação',
		'Manutenção',
		'Higienização',
		'Assistência técnica',
		'Venda de aparelhos'
	];
</script>

<section id="inicio" class="relative isolate overflow-hidden bg-ink text-white">
	<!-- Fluxo de ar: linhas finas em movimento lento -->
	<svg
		class="airflow pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
		viewBox="0 0 1440 900"
		preserveAspectRatio="xMidYMid slice"
		fill="none"
		aria-hidden="true"
	>
		<path
			d="M-40 640C260 560 420 700 720 610s520-260 780-200"
			stroke="#1676D2"
			stroke-opacity=".35"
		/>
		<path
			d="M-40 700C300 640 460 760 760 680s500-220 740-170"
			stroke="#7B9CC6"
			stroke-opacity=".22"
		/>
		<path
			d="M-40 760C340 720 500 820 800 750s480-180 700-140"
			stroke="#55B8FF"
			stroke-opacity=".14"
		/>
	</svg>
	<div
		class="pointer-events-none absolute -top-40 -right-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand/18 blur-[120px]"
		aria-hidden="true"
	></div>

	<div
		class="mx-auto grid max-w-7xl gap-12 px-4 pt-[calc(var(--header-h)+2.5rem)] pb-14 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-[calc(var(--header-h)+4.5rem)] lg:pb-20"
	>
		<div class="flex flex-col justify-center lg:col-span-7">
			<p class="eyebrow flex items-center gap-3 text-steel">
				<span class="h-px w-8 bg-steel/60" aria-hidden="true"></span>
				Carvalho Refrigeração · {siteConfig.city}, {siteConfig.regionCode}
			</p>

			<h1
				class="mt-6 text-[2.45rem] leading-[0.98] font-extrabold sm:text-[3.6rem] md:text-[4.2rem] lg:text-[3.5rem] xl:text-[4.5rem]"
			>
				<span class="block">Seu</span>
				<span class="block whitespace-nowrap">ar-condicionado,</span>
				<span class="block text-sky">em boas mãos.</span>
			</h1>

			<p class="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
				Instalação, manutenção, higienização e venda de ar-condicionado em Paraty. Atendimento
				direto, orientação na escolha do aparelho e cuidado em cada etapa do serviço.
			</p>

			<div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
				<a
					href={whatsappUrl('orcamento')}
					target="_blank"
					rel="noopener"
					class="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-base font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-strong"
				>
					<WhatsAppIcon />
					Solicitar orçamento
				</a>
				<a
					href="#equipamentos"
					class="group inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-7 py-4 text-base font-semibold whitespace-nowrap text-white transition-colors hover:border-white/40 hover:bg-white/5"
				>
					Conhecer os equipamentos
					<svg
						class="h-4 w-4 transition-transform group-hover:translate-y-0.5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"><path stroke-linecap="round" d="M12 5v14m0 0 6-6m-6 6-6-6" /></svg
					>
				</a>
			</div>
			<p class="mt-4 text-sm text-mist/80">
				O WhatsApp abre com uma mensagem pronta — você revisa antes de enviar.
			</p>
		</div>

		<figure class="relative w-full lg:col-span-5">
			<div
				class="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-graphite sm:aspect-[16/10] lg:aspect-[4/5]"
			>
				<img
					src="/img/hero-tecnico-condensadora-900.webp"
					srcset="/img/hero-tecnico-condensadora-640.webp 640w, /img/hero-tecnico-condensadora-900.webp 900w"
					sizes="(min-width: 1280px) 500px, (min-width: 1024px) 38vw, 100vw"
					width="900"
					height="1125"
					alt="Técnico da Carvalho Refrigeração, de uniforme, trabalhando na instalação de uma condensadora LG fixada em suporte na parede externa"
					fetchpriority="high"
					class="h-full w-full object-cover object-[50%_80%] sm:object-[50%_62%] lg:object-center"
				/>
				<div
					class="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent"
					aria-hidden="true"
				></div>
				<!-- Marcas de enquadramento técnico -->
				<span
					class="absolute top-5 left-5 h-5 w-5 border-t border-l border-white/50"
					aria-hidden="true"
				></span>
				<span
					class="absolute top-5 right-5 h-5 w-5 border-t border-r border-white/50"
					aria-hidden="true"
				></span>

				<a
					href={whatsappUrl('orcamento')}
					target="_blank"
					rel="noopener"
					class="group absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-ink/70 p-4 backdrop-blur-md transition-colors hover:bg-ink/85 sm:inset-x-5 sm:bottom-5"
				>
					<span
						class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-ink"
					>
						<WhatsAppIcon class="h-5 w-5" />
					</span>
					<span class="min-w-0">
						<span class="block text-xs tracking-wide text-mist">Atendimento direto</span>
						<span class="block font-heading text-lg font-bold tabular-nums">
							{siteConfig.contact.phoneDisplay}
						</span>
					</span>
					<svg
						class="ml-auto h-5 w-5 shrink-0 text-sky transition-transform group-hover:translate-x-1"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"><path stroke-linecap="round" d="M5 12h14m0 0-6-6m6 6-6 6" /></svg
					>
				</a>
			</div>
		</figure>
	</div>

	<!-- Faixa de serviços e localização -->
	<div class="border-t border-white/8">
		<div
			class="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-5 text-sm text-mist sm:px-6 lg:px-8"
		>
			{#each strip as item, i (item)}
				{#if i > 0}<span class="hidden h-1 w-1 rounded-full bg-steel/60 sm:block" aria-hidden="true"
					></span>{/if}
				<span>{item}</span>
			{/each}
			<span class="flex items-center gap-2 text-white sm:ml-auto">
				<svg
					class="h-4 w-4 text-sky"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					aria-hidden="true"
					><path d="M12 21s-7-6.1-7-11.5a7 7 0 1 1 14 0C19 14.9 12 21 12 21Z" /><circle
						cx="12"
						cy="9.5"
						r="2.5"
					/></svg
				>
				{siteConfig.city} — {siteConfig.regionCode}
			</span>
		</div>
	</div>
</section>
