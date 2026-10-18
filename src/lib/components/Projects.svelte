<script lang="ts">
	import { projectsData } from '#lib/data/projects';
	import { quoteModal } from '#lib/state/quoteModal.svelte';
</script>

<section id="projetos" class="relative overflow-hidden bg-[#0B1220] py-20 text-white lg:py-28">
	<!-- Background lighting accents -->
	<div
		class="pointer-events-none absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-[#123A63]/30 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
			<div class="max-w-2xl">
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-bold tracking-wider text-[#38BDF8] uppercase"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
					<span>Portfólio & Aplicações</span>
				</div>
				<h2
					class="mb-3 font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
				>
					Na prática, cada ambiente pede uma solução.
				</h2>
				<p class="text-base leading-relaxed text-slate-300">
					Exemplos demonstrativos de composições térmicas e infraestrutura técnica realizadas de
					acordo com as peculiaridades de cada espaço.
				</p>
			</div>

			<div class="shrink-0">
				<button
					type="button"
					onclick={() => quoteModal.open('instalacao')}
					class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
				>
					<span>Avaliar meu projeto</span>
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

		<!-- Demonstration Projects Grid (Asymmetric Editorial Layout) -->
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
			<!-- Featured Case: 7 Cols -->
			{#if projectsData[0]}
				{@const featured = projectsData[0]}
				<div
					class="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#087FC4]/50 lg:col-span-7"
				>
					<div class="relative aspect-[16/10] overflow-hidden bg-slate-900">
						<img
							src={featured.image}
							alt={featured.imageAlt}
							width="1000"
							height="650"
							loading="eager"
							decoding="async"
							class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/20 to-transparent opacity-90"
						></div>
						<div class="absolute top-4 left-4">
							<span
								class="inline-flex rounded-md border border-white/10 bg-[#0B1220]/85 px-3 py-1 text-xs font-semibold text-[#38BDF8] backdrop-blur-xs"
							>
								{featured.category}
							</span>
						</div>
						<div class="absolute right-4 bottom-4 left-4">
							<p class="text-xs font-medium text-slate-300">{featured.subtitle}</p>
							<h3 class="font-heading text-xl font-bold text-white sm:text-2xl">
								{featured.title}
							</h3>
						</div>
					</div>
					<div class="flex flex-1 flex-col justify-between p-6 sm:p-7">
						<p class="mb-5 text-sm leading-relaxed text-slate-300">
							{featured.description}
						</p>
						<div class="border-t border-white/10 pt-4">
							<p class="mb-2 text-xs font-bold tracking-wider text-brand-blue uppercase">
								Especificações Técnicas:
							</p>
							<ul class="grid grid-cols-1 gap-2 text-xs text-slate-400 sm:grid-cols-2">
								{#each featured.specs as spec (spec)}
									<li class="flex items-start gap-2">
										<span class="font-bold text-brand-blue">•</span>
										<span>{spec}</span>
									</li>
								{/each}
							</ul>
						</div>
						<div class="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
							<span class="font-mono text-[11px] text-slate-400">Padrão Aura Climatização</span>
							<button
								type="button"
								onclick={() => quoteModal.open('instalacao')}
								class="text-xs font-semibold text-brand-blue transition-colors hover:text-white"
							>
								Solicitar estudo similar →
							</button>
						</div>
					</div>
				</div>
			{/if}

			<!-- Secondary Stacked Cases: 5 Cols -->
			<div class="flex flex-col gap-8 lg:col-span-5">
				{#each projectsData.slice(1) as project (project.id)}
					<div
						class="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-[#087FC4]/50"
					>
						<div class="relative aspect-[16/9] overflow-hidden bg-slate-900">
							<img
								src={project.image}
								alt={project.imageAlt}
								width="800"
								height="450"
								loading="eager"
								decoding="async"
								class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent opacity-80"
							></div>
							<div class="absolute top-3 left-3">
								<span
									class="inline-flex rounded-md border border-white/10 bg-[#0B1220]/85 px-2.5 py-0.5 text-[11px] font-semibold text-slate-300 backdrop-blur-xs"
								>
									{project.category}
								</span>
							</div>
						</div>
						<div class="flex flex-1 flex-col justify-between p-5 sm:p-6">
							<div>
								<h3
									class="mb-2 font-heading text-base font-bold text-white transition-colors group-hover:text-brand-blue sm:text-lg"
								>
									{project.title}
								</h3>
								<p class="mb-3 text-xs leading-relaxed text-slate-300">
									{project.description}
								</p>
								<ul class="space-y-1 border-t border-white/10 pt-2.5 text-xs text-slate-400">
									{#each project.specs as spec (spec)}
										<li class="flex items-start gap-1.5">
											<span class="font-bold text-brand-blue">•</span>
											<span>{spec}</span>
										</li>
									{/each}
								</ul>
							</div>
							<div class="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
								<span class="font-mono text-[10px] text-slate-400">Aplicação Técnica</span>
								<button
									type="button"
									onclick={() => quoteModal.open('instalacao')}
									class="text-xs font-semibold text-brand-blue transition-colors hover:text-white"
								>
									Consultar →
								</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Transparent disclaimer -->
		<p class="mt-10 text-center text-xs text-slate-400">
			* Imagens e descrições demonstrativas para ilustrar o padrão de engenharia e instalação
			proposto pela Aura Climatização.
		</p>
	</div>
</section>
