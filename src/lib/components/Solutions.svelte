<script lang="ts">
	import { quoteModal } from '#lib/state/quoteModal.svelte';
</script>

<section id="solucoes" class="border-t border-slate-200/60 bg-surface-alt py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 max-w-2xl lg:mb-20">
			<div
				class="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
				<span>Aplicações Sob Medida</span>
			</div>
			<h2
				class="font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
			>
				Residencial e Empresarial
			</h2>
			<p class="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
				Soluções térmicas com critérios específicos para o descanso da sua família ou a
				produtividade da sua empresa.
			</p>
		</div>

		<div class="space-y-16 lg:space-y-24">
			<!-- Block 1: Residential (Text Left, Image Right) -->
			<div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
				<div class="order-2 flex flex-col items-start lg:order-1 lg:col-span-6">
					<div
						class="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-brand-blue uppercase"
					>
						<span>Ambientes Residenciais</span>
					</div>

					<h3
						class="mb-4 font-heading text-2xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
					>
						Conforto para viver bem em cada ambiente.
					</h3>

					<p class="mb-6 text-base leading-relaxed text-slate-600">
						Quartos, salas e espaços integrados pedem soluções que respeitem a rotina da casa. A
						escolha do equipamento e o planejamento da instalação ajudam a construir um ambiente
						mais confortável.
					</p>

					<!-- Destaques -->
					<div class="mb-8 w-full space-y-3">
						<div class="flex items-center gap-3 text-sm font-medium text-navy-950">
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
							>
								<svg
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span>Instalação em residências e apartamentos</span>
						</div>

						<div class="flex items-center gap-3 text-sm font-medium text-navy-950">
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
							>
								<svg
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span>Avaliação do ambiente e nível de ruído acústico</span>
						</div>

						<div class="flex items-center gap-3 text-sm font-medium text-navy-950">
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
							>
								<svg
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span>Manutenção preventiva para saúde e qualidade do ar</span>
						</div>
					</div>

					<button
						type="button"
						onclick={() => quoteModal.open('instalacao', 'residencial')}
						class="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					>
						<span>Conhecer soluções residenciais</span>
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

				<div class="order-1 lg:order-2 lg:col-span-6">
					<div
						class="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg"
					>
						<img
							src="/images/residential-living.jpg"
							alt="Sala de estar contemporânea com climatização agradável e iluminação natural"
							width="1200"
							height="900"
							loading="eager"
							decoding="async"
							class="h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-96"
						/>
						<div
							class="absolute bottom-4 left-4 rounded-lg bg-navy-950/80 px-3 py-1.5 text-xs text-white backdrop-blur-xs"
						>
							Espaços integrados & Convivência
						</div>
					</div>
				</div>
			</div>

			<!-- Block 2: Commercial (Image Left, Text Right) -->
			<div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
				<div class="lg:col-span-6">
					<div
						class="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg"
					>
						<img
							src="/images/commercial-office.jpg"
							alt="Sala de reuniões corporativa com climatização planejada para reuniões e trabalho"
							width="1200"
							height="900"
							loading="eager"
							decoding="async"
							class="h-72 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 sm:h-96"
						/>
						<div
							class="absolute bottom-4 left-4 rounded-lg bg-navy-950/80 px-3 py-1.5 text-xs text-white backdrop-blur-xs"
						>
							Ambientes Corporativos & Produtividade
						</div>
					</div>
				</div>

				<div class="flex flex-col items-start lg:col-span-6">
					<div
						class="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold tracking-wider text-brand-blue uppercase"
					>
						<span>Ambientes Corporativos & Lojas</span>
					</div>

					<h3
						class="mb-4 font-heading text-2xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-3xl lg:text-4xl"
					>
						Climatização alinhada à rotina do seu negócio.
					</h3>

					<p class="mb-6 text-base leading-relaxed text-slate-600">
						Escritórios, lojas e ambientes de atendimento exigem atenção ao uso do espaço e às
						necessidades de operação. Planejamos os serviços para atender às características de cada
						ambiente.
					</p>

					<!-- Destaques -->
					<div class="mb-8 w-full space-y-3">
						<div class="flex items-center gap-3 text-sm font-medium text-navy-950">
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
							>
								<svg
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span>Escritórios, consultórios e salas comerciais</span>
						</div>

						<div class="flex items-center gap-3 text-sm font-medium text-navy-950">
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
							>
								<svg
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span>Lojas e espaços de atendimento contínuo</span>
						</div>

						<div class="flex items-center gap-3 text-sm font-medium text-navy-950">
							<div
								class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue"
							>
								<svg
									class="h-3.5 w-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<span>Manutenção planejada com horários flexíveis</span>
						</div>
					</div>

					<button
						type="button"
						onclick={() => quoteModal.open('instalacao', 'comercial')}
						class="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#076fae] focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					>
						<span>Solicitar avaliação comercial</span>
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
	</div>
</section>
