<script lang="ts">
	import { quoteModal } from '#lib/state/quoteModal.svelte';

	function handleOpenQuote() {
		quoteModal.open('instalacao');
	}
</script>

<section id="inicio" class="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-36 lg:pb-24">
	<!-- Background subtle ambient lighting -->
	<div
		class="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
			<!-- Text Content (Left Column) -->
			<div class="flex flex-col items-start lg:col-span-7 xl:col-span-7">
				<!-- Eyebrow -->
				<div
					class="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-slate-100/90 px-3.5 py-1 text-xs font-bold tracking-wider text-slate-700 uppercase"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
					<span>Climatização Residencial e Comercial</span>
				</div>

				<!-- Main Title -->
				<h1
					class="mb-6 max-w-2xl font-heading text-4xl leading-[1.15] font-extrabold tracking-tight text-balance text-navy-950 sm:text-5xl lg:text-6xl"
				>
					Conforto térmico começa com uma instalação <span class="inline-block text-brand-blue"
						>bem executada.</span
					>
				</h1>

				<!-- Subtitle Copy -->
				<p class="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
					Projetamos, instalamos e cuidamos de sistemas de climatização para ambientes residenciais
					e comerciais. Atendimento técnico, execução cuidadosa e soluções pensadas para a sua
					rotina.
				</p>

				<!-- CTAs -->
				<div
					class="mb-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center"
				>
					<button
						type="button"
						onclick={handleOpenQuote}
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-7 py-4 text-base font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none active:translate-y-0"
					>
						<span>Solicitar um orçamento</span>
						<svg
							class="h-4 w-4 text-brand-blue"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
						</svg>
					</button>

					<a
						href="#servicos"
						class="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					>
						<span>Conhecer nossos serviços</span>
					</a>
				</div>

				<!-- Differentials row (micro-trust) -->
				<div
					class="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-100 pt-6 text-xs font-medium text-slate-600 sm:text-sm"
				>
					<div class="flex items-center gap-2">
						<svg
							class="h-4 w-4 shrink-0 text-brand-blue"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
						</svg>
						<span>Instalação planejada</span>
					</div>

					<div class="flex items-center gap-2">
						<svg
							class="h-4 w-4 shrink-0 text-brand-blue"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
						</svg>
						<span>Atendimento técnico</span>
					</div>

					<div class="flex items-center gap-2">
						<svg
							class="h-4 w-4 shrink-0 text-brand-blue"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
						</svg>
						<span>Manutenção preventiva</span>
					</div>
				</div>
			</div>

			<!-- Realistic Photography (Right Column) -->
			<div class="relative lg:col-span-5 xl:col-span-5">
				<div class="relative mx-auto max-w-lg lg:max-w-none">
					<!-- Geometric background architectural border accent -->
					<div
						class="absolute -inset-2 hidden rounded-3xl border border-slate-200/60 bg-slate-50/80 sm:block"
						aria-hidden="true"
					></div>

					<!-- Main Image Container -->
					<div
						class="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-xl"
					>
						<img
							src="/images/hero-tech.jpg"
							alt="Profissional técnico instalando sistema de ar-condicionado com precisão e ferramentas adequadas"
							width="1200"
							height="900"
							fetchpriority="high"
							loading="eager"
							decoding="async"
							class="h-[400px] w-full object-cover object-[70%_center] transition-transform duration-700 hover:scale-[1.02] sm:h-[480px] lg:h-[540px]"
						/>

						<!-- Subtle gradient overlay at bottom for readability of badge -->
						<div
							class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950/80 to-transparent"
						></div>

						<!-- Floating technical credibility pill -->
						<div
							class="absolute right-5 bottom-5 left-5 rounded-xl border border-white/40 bg-white/95 p-3.5 shadow-lg backdrop-blur-md sm:right-auto sm:left-6 sm:max-w-xs"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue"
								>
									<svg
										class="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<div>
									<p class="text-xs font-bold text-navy-950">Padrão Técnico Aura</p>
									<p class="text-[11px] text-slate-500">
										Avaliação prévia e procedimentos controlados
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Feature Ribbon (below hero, matching reference rhythm) -->
		<div class="mt-16 border-t border-slate-200/80 pt-10">
			<div class="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
				<div class="flex flex-col">
					<span class="mb-1 text-xs font-bold tracking-wider text-brand-blue uppercase"
						>01 / Diagnóstico</span
					>
					<span class="text-sm font-semibold text-navy-950">Avaliação prévia do espaço</span>
					<span class="mt-1 text-xs text-slate-500">Cálculo de carga térmica e infraestrutura</span>
				</div>

				<div class="flex flex-col border-l-0 border-slate-200 sm:border-l sm:pl-6">
					<span class="mb-1 text-xs font-bold tracking-wider text-brand-blue uppercase"
						>02 / Equipamentos</span
					>
					<span class="text-sm font-semibold text-navy-950">Sistemas dimensionados</span>
					<span class="mt-1 text-xs text-slate-500">Capacidade coerente com o uso real</span>
				</div>

				<div class="flex flex-col border-l-0 border-slate-200 md:border-l md:pl-6">
					<span class="mb-1 text-xs font-bold tracking-wider text-brand-blue uppercase"
						>03 / Organização</span
					>
					<span class="text-sm font-semibold text-navy-950">Cuidado e limpeza</span>
					<span class="mt-1 text-xs text-slate-500">Proteção do patrimônio do cliente</span>
				</div>

				<div class="flex flex-col border-l-0 border-slate-200 sm:border-l sm:pl-6">
					<span class="mb-1 text-xs font-bold tracking-wider text-brand-blue uppercase"
						>04 / Acompanhamento</span
					>
					<span class="text-sm font-semibold text-navy-950">Suporte pós-instalação</span>
					<span class="mt-1 text-xs text-slate-500">Orientações claras para o dia a dia</span>
				</div>
			</div>
		</div>
	</div>
</section>
