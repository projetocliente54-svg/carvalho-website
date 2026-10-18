<script lang="ts">
	import { differentialsData } from '#lib/data/differentials';
</script>

<section id="diferenciais" class="border-t border-slate-200/60 bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Left Header Block -->
			<div class="flex flex-col items-start lg:sticky lg:top-28 lg:col-span-5">
				<div
					class="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
					<span>Padrões de Trabalho</span>
				</div>

				<h2
					class="mb-5 font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
				>
					Os detalhes também fazem parte do serviço.
				</h2>

				<p class="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg">
					A forma como o serviço é realizado é tão importante quanto o equipamento escolhido. Nossos
					procedimentos foram desenhados para proteger seu imóvel e garantir funcionamento contínuo.
				</p>

				<!-- Small assurance highlight box -->
				<div class="w-full rounded-2xl border border-slate-200/80 bg-surface-alt p-5">
					<p class="mb-1 text-xs font-bold tracking-wider text-navy-950 uppercase">
						Compromisso com o seu patrimônio
					</p>
					<p class="text-xs leading-relaxed text-slate-600">
						Trabalhamos com contenção de resíduos, calçados protegidos e respeito rigoroso às normas
						de condomínios e horários comerciais.
					</p>
				</div>
			</div>

			<!-- Right Grid of 6 Differentials (2x3) -->
			<div class="lg:col-span-7">
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
					{#each differentialsData as item (item.number)}
						<div
							class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs transition-all duration-200 hover:border-brand-blue/60 hover:shadow-md sm:p-7"
						>
							<div>
								<div class="mb-4 flex items-center justify-between">
									<span
										class="font-heading text-2xl font-extrabold text-slate-300 transition-colors group-hover:text-brand-blue"
									>
										{item.number}
									</span>
									<span
										class="h-2 w-2 rounded-full bg-slate-200 transition-colors group-hover:bg-brand-blue"
									></span>
								</div>

								<h3 class="mb-2 font-heading text-lg leading-snug font-bold text-navy-950">
									{item.title}
								</h3>

								<p class="text-xs leading-relaxed text-slate-600 sm:text-sm">
									{item.description}
								</p>
							</div>

							<div
								class="mt-6 flex items-center border-t border-slate-100 pt-3 text-[11px] font-semibold text-slate-500 transition-colors group-hover:text-brand-blue"
							>
								<span>Padrão Aura de Execução</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
