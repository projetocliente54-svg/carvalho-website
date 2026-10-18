<script lang="ts">
	import { servicesData } from '#lib/data/services';
	import { quoteModal, type ServiceType } from '#lib/state/quoteModal.svelte';

	let activeServiceId = $state<string>('instalacao');

	function selectService(id: string) {
		activeServiceId = activeServiceId === id ? '' : id;
	}

	function handleRequestService(id: string) {
		quoteModal.open(id as ServiceType);
	}
</script>

<section id="servicos" class="border-t border-slate-200/60 bg-surface-alt py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Left Editorial Column -->
			<div class="flex flex-col justify-between lg:col-span-5">
				<div>
					<div
						class="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
						<span>Serviços Especializados</span>
					</div>

					<h2
						class="mb-4 font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-4xl"
					>
						Climatização pensada para cada ambiente.
					</h2>

					<p class="mb-8 text-base leading-relaxed text-slate-600">
						Da escolha do equipamento aos cuidados depois da instalação, cada etapa influencia o
						desempenho e a durabilidade do sistema.
					</p>
				</div>

				<!-- Editorial Photo of technician at work -->
				<div
					class="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md"
				>
					<img
						src="/images/service-tech.jpg"
						alt="Técnico realizando manutenção e verificação de equipamento com ferramentas profissionais"
						width="1000"
						height="800"
						loading="eager"
						decoding="async"
						class="h-80 w-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-105 sm:h-96 lg:h-[430px]"
					/>
					<div
						class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 via-navy-950/40 to-transparent p-5"
					>
						<p class="text-xs font-semibold text-white/90">Critério técnico em cada etapa</p>
						<p class="mt-0.5 text-[11px] text-slate-300">
							Ferramentas calibradas, vácuo com vacuômetro digital e fluido nas pressões corretas.
						</p>
					</div>
				</div>

				<div class="mt-8 flex items-center gap-4">
					<button
						type="button"
						onclick={() => quoteModal.open('instalacao')}
						class="flex items-center gap-1.5 rounded-md py-1 text-sm font-semibold text-brand-blue transition-colors hover:text-navy-950 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					>
						<span>Solicitar uma avaliação do seu espaço</span>
						<svg
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Right Services Column (Editorial Accordion/List) -->
			<div class="flex flex-col space-y-4 lg:col-span-7">
				{#each servicesData as service (service.id)}
					{@const isOpen = activeServiceId === service.id}

					<div
						class="rounded-2xl border bg-white transition-all duration-300 {isOpen
							? 'border-brand-blue shadow-md ring-1 ring-brand-blue/30'
							: 'border-slate-200/90 shadow-xs hover:border-slate-300'}"
					>
						<!-- Accordion Trigger Button -->
						<button
							type="button"
							class="flex w-full items-start justify-between gap-4 rounded-2xl p-6 text-left focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none sm:p-7"
							aria-expanded={isOpen}
							onclick={() => selectService(service.id)}
						>
							<div class="flex items-start gap-4 sm:gap-6">
								<span
									class="font-heading text-lg font-bold sm:text-xl {isOpen
										? 'text-brand-blue'
										: 'text-slate-400'} shrink-0 pt-0.5"
								>
									{service.number}
								</span>
								<div>
									<h3 class="font-heading text-lg font-bold text-navy-950 sm:text-xl">
										{service.title}
									</h3>
									<p class="mt-1.5 text-sm leading-relaxed text-slate-600">
										{service.shortDescription}
									</p>
								</div>
							</div>

							<!-- Arrow / Plus indicator -->
							<div
								class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 {isOpen
									? 'rotate-180 bg-brand-blue text-white'
									: 'bg-slate-100 text-slate-500 hover:bg-slate-200'}"
							>
								<svg
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2.5"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
								</svg>
							</div>
						</button>

						<!-- Expandable Details -->
						{#if isOpen}
							<div
								class="animate-in fade-in-50 border-t border-slate-100 px-6 pt-2 pb-6 duration-200 sm:px-7 sm:pb-7"
							>
								<p class="mb-4 text-sm leading-relaxed text-slate-600">
									{service.fullDescription}
								</p>

								<!-- Technical Highlights Checklist -->
								<div
									class="mb-5 grid grid-cols-1 gap-2.5 rounded-xl border border-slate-100 bg-slate-50/80 p-4 sm:grid-cols-2"
								>
									{#each service.highlights as highlight (highlight)}
										<div class="flex items-center gap-2 text-xs font-medium text-slate-700">
											<svg
												class="h-3.5 w-3.5 shrink-0 text-brand-blue"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												stroke-width="3"
											>
												<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
											</svg>
											<span>{highlight}</span>
										</div>
									{/each}
								</div>

								<div
									class="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center"
								>
									<div class="text-xs text-slate-500">
										<span class="font-semibold text-slate-700">Recomendado para:</span>
										{service.bestFor}
									</div>

									<button
										type="button"
										onclick={() => handleRequestService(service.id)}
										class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-navy-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-navy-900"
									>
										<span>Solicitar este serviço</span>
										<svg
											class="h-3.5 w-3.5 text-brand-blue"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2.5"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
										</svg>
									</button>
								</div>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
