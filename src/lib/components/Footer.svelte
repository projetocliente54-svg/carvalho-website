<script lang="ts">
	import { siteConfig, getWhatsAppUrl } from '#lib/config/site';
	import { quoteModal, type ServiceType } from '#lib/state/quoteModal.svelte';

	const currentYear = new Date().getFullYear();
	const whatsappUrl = getWhatsAppUrl();
</script>

<footer class="border-t border-white/10 bg-[#070C15] pt-16 pb-12 text-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div
			class="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12"
		>
			<!-- Col 1: Brand Info (5 cols) -->
			<div class="flex flex-col items-start lg:col-span-5">
				<!-- Brand Logo -->
				<a
					href="#inicio"
					class="mb-5 flex items-center gap-2.5 rounded-lg p-0.5 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
				>
					<div
						class="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white"
					>
						<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M4 14C5.5 14 7 12.5 8.5 10.5C10 8.5 12 7 14.5 7C17 7 19 8.5 19 11"
								stroke="#087FC4"
								stroke-width="2.2"
								stroke-linecap="round"
							/>
							<path
								d="M4 9C5 9 6 8 7 6.8C8 5.6 9.5 4.5 11.5 4.5C14 4.5 15.5 6 16 7.5"
								stroke="#38BDF8"
								stroke-width="1.8"
								stroke-linecap="round"
							/>
							<circle cx="19" cy="6" r="1.5" fill="#38BDF8" />
						</svg>
					</div>
					<div class="flex flex-col">
						<span
							class="font-heading text-lg leading-none font-extrabold tracking-tight text-white"
						>
							AURA
						</span>
						<span class="mt-0.5 text-[9px] font-bold tracking-[0.22em] text-slate-400 uppercase">
							Climatização
						</span>
					</div>
				</a>

				<p class="mb-6 max-w-sm text-xs leading-relaxed text-slate-400 sm:text-sm">
					{siteConfig.shortDescription} Atendimento técnico qualificado, processos com rigor de engenharia
					e cuidado com cada detalhe do seu imóvel.
				</p>

				<div class="flex items-center gap-3">
					<button
						type="button"
						onclick={() => quoteModal.open('instalacao')}
						class="rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/15"
					>
						Solicitar Orçamento
					</button>

					<a
						href={whatsappUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-2 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-900/60"
					>
						<svg class="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.944.555 3.765 1.518 5.31L2 22l4.825-1.488c1.488.877 3.23 1.385 5.206 1.385 5.536 0 10.031-4.494 10.031-10.031C22.062 6.494 17.567 2 12.031 2zm5.797 14.152c-.242.678-1.411 1.297-1.956 1.382-.544.084-1.229.12-1.994-.127-1.848-.596-3.327-1.688-4.57-3.056-1.503-1.654-2.228-3.528-2.228-5.066 0-1.554.809-2.31 1.107-2.617.298-.307.652-.384.869-.384.218 0 .435.002.625.011.202.01.47-.077.734.558.274.658.932 2.274 1.013 2.439.081.165.136.357.027.575-.108.218-.163.355-.325.545-.163.19-.344.423-.491.568-.163.16-.334.335-.144.66.19.326.845 1.391 1.812 2.253 1.246 1.109 2.296 1.452 2.622 1.615.326.163.516.136.706-.081.19-.218.814-.949 1.031-1.275.218-.326.435-.272.734-.163.299.108 1.899.897 2.225 1.06.326.163.543.245.625.381.082.137.082.788-.16 1.466z"
							/>
						</svg>
						<span>WhatsApp</span>
					</a>
				</div>
			</div>

			<!-- Col 2: Navegação (2 cols) -->
			<div class="lg:col-span-2">
				<p class="mb-4 text-xs font-bold tracking-wider text-slate-400 uppercase">Navegação</p>
				<ul class="space-y-2.5 text-xs text-slate-400 sm:text-sm">
					{#each siteConfig.navigation as item (item.name)}
						<li>
							<a href={item.href} class="transition-colors hover:text-white">
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Col 3: Serviços (2 cols) -->
			<div class="lg:col-span-2">
				<p class="mb-4 text-xs font-bold tracking-wider text-slate-400 uppercase">Serviços</p>
				<ul class="space-y-2.5 text-xs text-slate-400 sm:text-sm">
					{#each siteConfig.servicesNav as service (service.id)}
						<li>
							<button
								type="button"
								onclick={() => quoteModal.open(service.id as ServiceType)}
								class="text-left transition-colors hover:text-white"
							>
								{service.name}
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Col 4: Contato & Informações Técnicas (3 cols) -->
			<div class="lg:col-span-3">
				<p class="mb-4 text-xs font-bold tracking-wider text-slate-400 uppercase">
					Atendimento & Horários
				</p>
				<div class="space-y-3 text-xs text-slate-400">
					<div>
						<span class="block font-semibold text-slate-400">Região de Atuação:</span>
						<span>{siteConfig.city} / {siteConfig.state} — {siteConfig.region}</span>
					</div>

					<div>
						<span class="block font-semibold text-slate-400">Horário Comercial:</span>
						<span>{siteConfig.contact.businessDays}</span>
						<span class="block">{siteConfig.contact.scheduleHours}</span>
					</div>

					<div>
						<span class="block font-semibold text-slate-400">Canal Direto:</span>
						<a href={whatsappUrl} class="text-brand-blue hover:underline">
							{siteConfig.contact.whatsappFormatted}
						</a>
					</div>

					<div>
						<span class="block font-semibold text-slate-400">E-mail Técnico:</span>
						<span class="font-mono text-slate-400">{siteConfig.contact.email}</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom bar: Disclaimer, Privacy, Copyright -->
		<div
			class="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 md:flex-row"
		>
			<div>
				<p>© {currentYear} {siteConfig.name}. Todos os direitos reservados.</p>
				<p class="mt-1 text-[11px] text-slate-400">
					Empresa fictícia criada para demonstração de projeto institucional de alto padrão.
				</p>
			</div>

			<div class="flex items-center gap-6 text-[11px] text-slate-400">
				<a href="#faq" class="transition-colors hover:text-slate-400">Termos de Atendimento</a>
				<span class="text-slate-400">•</span>
				<a href="#inicio" class="transition-colors hover:text-slate-400">Voltar ao topo ↑</a>
			</div>
		</div>
	</div>
</footer>
