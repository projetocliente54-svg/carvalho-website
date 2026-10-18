<script lang="ts">
	import { processSteps } from '#lib/data/process';
</script>

<section id="processo" class="border-t border-slate-200/60 bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 max-w-3xl sm:mb-20">
			<div
				class="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
				<span>Metodologia Transparente</span>
			</div>
			<h2
				class="mb-4 font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
			>
				Do primeiro contato à climatização funcionando.
			</h2>
			<p class="text-base leading-relaxed text-slate-600 sm:text-lg">
				Um fluxo planejado para que você tenha clareza de prazos, escopo e execução técnica em cada
				etapa.
			</p>
		</div>

		<!-- 5-Step Progress Flow -->
		<div class="relative">
			<!-- Horizontal connecting line for desktop -->
			<div
				class="absolute top-7 right-8 left-8 z-0 hidden h-px bg-slate-200 lg:block"
				aria-hidden="true"
			></div>

			<!-- Grid of 5 Steps -->
			<div class="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
				{#each processSteps as step (step.step)}
					<div class="group flex flex-col">
						<!-- Number node -->
						<div class="mb-5 flex items-center gap-3">
							<div
								class="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-50 font-heading text-lg font-extrabold text-brand-blue shadow-xs transition-all duration-200 group-hover:border-brand-blue group-hover:bg-blue-50/50"
							>
								{step.step}
							</div>
							<div class="h-px flex-1 bg-slate-100 lg:hidden"></div>
						</div>

						<!-- Step Details -->
						<h3
							class="mb-2 font-heading text-base font-bold text-navy-950 transition-colors group-hover:text-brand-blue"
						>
							{step.title}
						</h3>
						<p class="mb-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
							{step.shortDescription}
						</p>
						<p class="text-[11px] leading-normal text-slate-500">
							{step.detail}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Guarantee / Commitment statement -->
		<div
			class="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-surface-alt p-6 sm:flex-row sm:items-center sm:p-7"
		>
			<div class="flex items-center gap-3">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-brand-blue"
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
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<div>
					<p class="text-sm font-bold text-navy-950">Sem imprevistos no orçamento</p>
					<p class="text-xs text-slate-500">
						Todo o escopo técnico é explicado e acordado antes de qualquer intervenção física.
					</p>
				</div>
			</div>

			<a
				href="#faq"
				class="text-xs font-semibold whitespace-nowrap text-brand-blue transition-colors hover:text-navy-950"
			>
				Ver dúvidas frequentes sobre o atendimento →
			</a>
		</div>
	</div>
</section>
