<script lang="ts">
	import { faqData } from '#lib/data/faq';
	import { quoteModal } from '#lib/state/quoteModal.svelte';

	let openItemIds = $state<Record<string, boolean>>({
		'faq-1': true // First question open by default for immediate discoverability
	});

	function toggleItem(id: string) {
		openItemIds = {
			...openItemIds,
			[id]: !openItemIds[id]
		};
	}
</script>

<section id="faq" class="border-t border-slate-200/60 bg-surface-alt py-20 lg:py-28">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mx-auto mb-16 max-w-2xl text-center">
			<div
				class="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-wider text-brand-blue uppercase"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
				<span>Esclarecimento Técnico</span>
			</div>

			<h2
				class="mb-4 font-heading text-3xl leading-tight font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-5xl"
			>
				Dúvidas frequentes sobre climatização.
			</h2>

			<p class="text-base leading-relaxed text-slate-600">
				Respostas objetivas e tecnicamente responsáveis para orientar suas decisões de instalação e
				manutenção.
			</p>
		</div>

		<!-- Accordion List -->
		<div class="space-y-3.5">
			{#each faqData as item (item.id)}
				{@const isOpen = !!openItemIds[item.id]}

				<div
					class="rounded-2xl border bg-white transition-all duration-200 {isOpen
						? 'border-brand-blue/60 shadow-xs'
						: 'border-slate-200/90 hover:border-slate-300'}"
				>
					<button
						type="button"
						id={`btn-${item.id}`}
						aria-controls={`panel-${item.id}`}
						aria-expanded={isOpen}
						class="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none sm:px-7 sm:py-6"
						onclick={() => toggleItem(item.id)}
					>
						<span class="pr-2 font-heading text-base font-bold text-navy-950 sm:text-lg">
							{item.question}
						</span>

						<div
							class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 {isOpen
								? 'rotate-180 bg-brand-blue text-white'
								: 'bg-slate-100 text-slate-500 hover:bg-slate-200'}"
							aria-hidden="true"
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

					{#if isOpen}
						<div
							id={`panel-${item.id}`}
							role="region"
							aria-labelledby={`btn-${item.id}`}
							class="animate-in fade-in-50 border-t border-slate-100 px-6 pt-1 pb-6 text-sm leading-relaxed text-slate-600 duration-200 sm:px-7 sm:pb-7 sm:text-base"
						>
							{item.answer}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Direct Help Footer Banner -->
		<div class="mt-12 rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-xs">
			<p class="text-sm font-semibold text-navy-950">
				Ainda tem dúvidas sobre o seu ambiente específico?
			</p>
			<p class="mt-1 text-xs text-slate-500">
				Nossa equipe analisa as características do seu espaço sem custo de avaliação inicial.
			</p>
			<div class="mt-4 flex items-center justify-center gap-3">
				<button
					type="button"
					onclick={() => quoteModal.open('instalacao')}
					class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue transition-colors hover:text-navy-950"
				>
					<span>Enviar mensagem para a equipe</span>
					<svg
						class="h-3.5 w-3.5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>
