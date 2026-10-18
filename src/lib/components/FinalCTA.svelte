<script lang="ts">
	import { quoteModal } from '#lib/state/quoteModal.svelte';
	import { getWhatsAppUrl, siteConfig } from '#lib/config/site';

	const whatsappLink = getWhatsAppUrl();
</script>

<section id="contato" class="relative overflow-hidden bg-[#0B1220] py-20 text-white lg:py-28">
	<!-- Subtle architectural gradient / light accents -->
	<div
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#123A63]/40 via-transparent to-transparent"
	></div>
	<div
		class="pointer-events-none absolute right-1/4 -bottom-32 h-80 w-80 rounded-full bg-[#087FC4]/20 blur-3xl"
	></div>

	<div class="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
		<!-- Eyebrow -->
		<div
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-bold tracking-wider text-[#38BDF8] uppercase"
		>
			<span class="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
			<span>Atendimento Técnico & Orçamento</span>
		</div>

		<!-- Title -->
		<h2
			class="mx-auto mb-6 max-w-3xl font-heading text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
		>
			Seu próximo ambiente merece uma climatização bem planejada.
		</h2>

		<!-- Text -->
		<p class="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
			Conte um pouco sobre o espaço e o serviço que você precisa. Vamos entender a sua necessidade e
			orientar os próximos passos.
		</p>

		<!-- Dual CTA buttons -->
		<div class="mx-auto mb-12 flex max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
			<button
				type="button"
				onclick={() => quoteModal.open('instalacao')}
				class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#087FC4] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#076fae] hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#087FC4] focus-visible:outline-none sm:w-auto"
			>
				<span>Solicitar orçamento</span>
				<svg
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2.5"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</button>

			<a
				href={whatsappLink}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:w-auto"
			>
				<svg class="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.944.555 3.765 1.518 5.31L2 22l4.825-1.488c1.488.877 3.23 1.385 5.206 1.385 5.536 0 10.031-4.494 10.031-10.031C22.062 6.494 17.567 2 12.031 2zm5.797 14.152c-.242.678-1.411 1.297-1.956 1.382-.544.084-1.229.12-1.994-.127-1.848-.596-3.327-1.688-4.57-3.056-1.503-1.654-2.228-3.528-2.228-5.066 0-1.554.809-2.31 1.107-2.617.298-.307.652-.384.869-.384.218 0 .435.002.625.011.202.01.47-.077.734.558.274.658.932 2.274 1.013 2.439.081.165.136.357.027.575-.108.218-.163.355-.325.545-.163.19-.344.423-.491.568-.163.16-.334.335-.144.66.19.326.845 1.391 1.812 2.253 1.246 1.109 2.296 1.452 2.622 1.615.326.163.516.136.706-.081.19-.218.814-.949 1.031-1.275.218-.326.435-.272.734-.163.299.108 1.899.897 2.225 1.06.326.163.543.245.625.381.082.137.082.788-.16 1.466z"
					/>
				</svg>
				<span>Falar pelo WhatsApp</span>
			</a>
		</div>

		<!-- Direct Contact Info Banner -->
		<div
			class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-xs text-slate-400"
		>
			<div class="flex items-center gap-2">
				<span class="text-slate-400">Atendimento:</span>
				<span class="font-medium text-white"
					>{siteConfig.contact.businessDays}, {siteConfig.contact.scheduleHours}</span
				>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-slate-400">Região:</span>
				<span class="font-medium text-white">{siteConfig.region}</span>
			</div>
			<div class="flex items-center gap-2">
				<span class="text-slate-400">Retorno médio:</span>
				<span class="font-medium text-emerald-400">Em até 2 horas úteis</span>
			</div>
		</div>
	</div>
</section>
