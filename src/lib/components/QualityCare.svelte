<script lang="ts">
	import { quoteModal } from '#lib/state/quoteModal.svelte';

	const qualityPoints = [
		{
			title: 'Critério no planejamento',
			description:
				'Estudo das cargas térmicas, trajetos de dreno com gravidade natural e dimensionamento seguro de disjuntores.'
		},
		{
			title: 'Rigor na execução',
			description:
				'Uso de bomba de vácuo até atingir os níveis recomendados pelo fabricante, evitando umidade e incondensáveis no sistema.'
		},
		{
			title: 'Transparência na orientação',
			description:
				'Instruções sinceras sobre capacidades do equipamento, cuidados com a rede e periodicidade adequada de manutenção.'
		}
	];
</script>

<section class="border-t border-slate-200/60 bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Text & Quality Points (Left Column) -->
			<div class="flex flex-col items-start lg:col-span-6">
				<div
					class="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
					<span>Compromisso Técnico</span>
				</div>

				<h2
					class="mb-5 font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
				>
					Climatização é técnica. O cuidado está em como ela é feita.
				</h2>

				<p class="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg">
					Mais do que instalar um equipamento, é importante compreender o ambiente, executar o
					serviço com atenção e explicar ao cliente o que foi feito. É essa combinação de critério
					técnico e cuidado que orienta a proposta da Aura.
				</p>

				<!-- Points List -->
				<div class="mb-8 w-full divide-y divide-slate-100 border-t border-b border-slate-100">
					{#each qualityPoints as point (point.title)}
						<div class="flex items-start gap-4 py-4">
							<div
								class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue"
							>
								<svg
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2.5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="mb-1 text-sm font-bold text-navy-950">
									{point.title}
								</h3>
								<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
									{point.description}
								</p>
							</div>
						</div>
					{/each}
				</div>

				<div class="flex items-center gap-4">
					<button
						type="button"
						onclick={() => quoteModal.open('instalacao')}
						class="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					>
						<span>Solicitar visita para orçamento</span>
						<svg
							class="h-4 w-4 text-brand-blue"
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

			<!-- Image Mosaic (Right Column, matching reference image composition) -->
			<div class="lg:col-span-6">
				<div class="space-y-4">
					<!-- Top main photo: consultation -->
					<div
						class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md"
					>
						<img
							src="/images/quality-consulting.jpg"
							alt="Profissional técnico orientando cliente com transparência"
							width="1000"
							height="650"
							loading="eager"
							decoding="async"
							class="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-72"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"
						></div>
						<div class="absolute right-4 bottom-4 left-4 text-xs font-semibold text-white">
							Atendimento próximo e comunicação transparente
						</div>
					</div>

					<!-- Bottom two photos -->
					<div class="grid grid-cols-2 gap-4">
						<div
							class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xs"
						>
							<img
								src="/images/quality-technician.jpg"
								alt="Unidades condensadoras com fluido ecológico"
								width="500"
								height="400"
								loading="eager"
								decoding="async"
								class="h-40 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-48"
							/>
							<div
								class="absolute bottom-2.5 left-2.5 text-[11px] font-semibold text-white drop-shadow-md"
							>
								Condensadoras & fluido ecológico
							</div>
						</div>

						<div
							class="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xs"
						>
							<img
								src="/images/quality-tools.jpg"
								alt="Tubulação frigorígena de cobre e conexões com isolamento"
								width="500"
								height="400"
								loading="eager"
								decoding="async"
								class="h-40 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 sm:h-48"
							/>
							<div
								class="absolute bottom-2.5 left-2.5 text-[11px] font-semibold text-white drop-shadow-md"
							>
								Tubulação de cobre & vedação
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
