<script lang="ts">
	import { quoteModal } from '#lib/state/quoteModal.svelte';

	const principles = [
		{
			number: '01',
			title: 'Planejamento técnico',
			description:
				'Dimensionamento correto da carga térmica, mapeamento estrutural e escolha do percurso ideal para tubulação frigorígena e dreno por gravidade.'
		},
		{
			number: '02',
			title: 'Instalação cuidadosa',
			description:
				'Fixação firme e nivelada, isolamento térmico elastomérico sem emendas expostas, vácuo controlado e proteção do patrimônio do cliente.'
		},
		{
			number: '03',
			title: 'Orientação ao cliente',
			description:
				'Explicação transparente sobre o serviço executado, configurações de conforto do controle remoto e cronograma de limpeza dos filtros.'
		}
	];
</script>

<section class="relative overflow-hidden bg-[#0B1220] py-20 text-white lg:py-28">
	<!-- Subtle ambient glow in background -->
	<div
		class="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#123A63]/40 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -top-40 right-10 h-80 w-80 rounded-full bg-[#087FC4]/20 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Large Photo (Left Column) -->
			<div class="relative lg:col-span-6">
				<div
					class="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
				>
					<img
						src="/images/dark-editorial.jpg"
						alt="Equipe técnica em inspeção e instalação de sistema de climatização"
						width="1200"
						height="900"
						loading="eager"
						decoding="async"
						class="h-[380px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-[480px] lg:h-[540px]"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 via-transparent to-transparent"
					></div>

					<!-- Bottom technical credit badge -->
					<div
						class="absolute right-6 bottom-6 left-6 rounded-xl border border-white/10 bg-[#0B1220]/90 p-4 backdrop-blur-md"
					>
						<div class="flex items-center justify-between text-xs">
							<span class="font-medium text-slate-300">Procedimento Técnico Controlado</span>
							<span class="font-bold tracking-wider text-brand-blue uppercase"
								>Normas de Engenharia</span
							>
						</div>
					</div>
				</div>
			</div>

			<!-- Editorial Content (Right Column) -->
			<div class="flex flex-col items-start lg:col-span-6">
				<div
					class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-bold tracking-wider text-[#38BDF8] uppercase"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-[#087FC4]"></span>
					<span>Rigor Técnico & Acabamento</span>
				</div>

				<h2
					class="mb-6 font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
				>
					Um bom resultado começa antes de ligar o aparelho.
				</h2>

				<p class="mb-8 text-base leading-relaxed text-slate-300 sm:text-lg">
					Uma climatização eficiente depende de decisões bem feitas desde o início. Avaliar o
					ambiente, planejar a instalação e executar cada etapa com cuidado faz diferença no
					conforto e no funcionamento do sistema.
				</p>

				<!-- 3 Editorial Principles (Clean Dividers, No Generic Cards) -->
				<div class="mb-8 w-full divide-y divide-white/10 border-t border-b border-white/10">
					{#each principles as item (item.number)}
						<div class="py-5 transition-colors hover:bg-white/[0.02]">
							<div class="flex items-start gap-5">
								<span class="shrink-0 font-heading text-sm font-bold text-brand-blue">
									{item.number}
								</span>
								<div>
									<h3 class="mb-1.5 text-base font-bold text-white">
										{item.title}
									</h3>
									<p class="text-xs leading-relaxed text-slate-300 sm:text-sm">
										{item.description}
									</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<button
					type="button"
					onclick={() => quoteModal.open('instalacao')}
					class="inline-flex items-center gap-2 rounded-xl bg-[#087FC4] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#076fae] focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
				>
					<span>Solicitar avaliação técnica</span>
					<svg
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2.2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>
