<script lang="ts">
	import { quoteModal, type ServiceType, type PropertyType } from '#lib/state/quoteModal.svelte';
	import { siteConfig, getWhatsAppUrl } from '#lib/config/site';

	let propertyType = $state<PropertyType>('residencial');
	let serviceType = $state<ServiceType>('instalacao');
	let approximateArea = $state('');
	let hasEquipment = $state<'sim' | 'nao' | 'orientacao'>('orientacao');
	let name = $state('');
	let phone = $state('');
	let email = $state('');
	let notes = $state('');

	let errors = $state<{ name?: string; phone?: string }>({});
	let isSubmitted = $state(false);

	$effect(() => {
		if (quoteModal.isOpen) {
			if (quoteModal.initialService) {
				serviceType = quoteModal.initialService;
			}
			if (quoteModal.initialType) {
				propertyType = quoteModal.initialType;
			}
			isSubmitted = false;
			errors = {};
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape' && quoteModal.isOpen) {
			quoteModal.close();
		}
	}

	function validate(): boolean {
		const newErrors: { name?: string; phone?: string } = {};
		if (!name.trim()) {
			newErrors.name = 'Por favor, informe seu nome.';
		}
		const cleanPhone = phone.replace(/\D/g, '');
		if (cleanPhone.length < 10) {
			newErrors.phone = 'Informe um telefone com DDD válido.';
		}
		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function getFormattedMessage(): string {
		const serviceNames: Record<string, string> = {
			instalacao: 'Instalação de Ar-Condicionado',
			manutencao: 'Manutenção Preventiva',
			assistencia: 'Assistência Técnica',
			projetos: 'Projeto de Climatização'
		};
		const equipmentOptions: Record<string, string> = {
			sim: 'Já possui o equipamento',
			nao: 'Não possui (precisa de recomendação)',
			orientacao: 'Precisa de orientação técnica'
		};

		return [
			`*Solicitação de Orçamento — ${siteConfig.name}*`,
			`• Nome: ${name.trim()}`,
			`• Telefone: ${phone.trim()}`,
			email ? `• E-mail: ${email.trim()}` : null,
			`• Tipo de Ambiente: ${propertyType === 'residencial' ? 'Residencial' : 'Comercial'}`,
			`• Serviço: ${serviceNames[serviceType] || serviceType}`,
			approximateArea ? `• Área/Ambientes: ${approximateArea.trim()}` : null,
			`• Equipamento: ${equipmentOptions[hasEquipment]}`,
			notes ? `• Detalhes adicionais: ${notes.trim()}` : null
		]
			.filter(Boolean)
			.join('\n');
	}

	function handleWhatsAppSubmit() {
		if (!validate()) return;
		const msg = getFormattedMessage();
		const url = getWhatsAppUrl(msg);
		window.open(url, '_blank', 'noopener,noreferrer');
		quoteModal.close();
	}

	function handleDirectSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!validate()) return;
		isSubmitted = true;
	}
</script>

<svelte:window onkeydown={handleKeyDown} />

{#if quoteModal.isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
	>
		<!-- Backdrop Button -->
		<button
			type="button"
			aria-label="Fechar janela"
			class="fixed inset-0 cursor-default border-none bg-[#0B1220]/80 backdrop-blur-sm transition-opacity"
			onclick={() => quoteModal.close()}
		></button>

		<!-- Dialog Panel -->
		<div
			class="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
		>
			<!-- Header -->
			<div
				class="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white/95 px-6 py-5 backdrop-blur-md"
			>
				<div>
					<div class="flex items-center gap-2">
						<span class="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
						<span class="text-xs font-semibold tracking-wider text-slate-500 uppercase"
							>Atendimento Técnico</span
						>
					</div>
					<h3 id="modal-title" class="mt-1 text-xl font-bold text-navy-950 sm:text-2xl">
						Solicitar Orçamento
					</h3>
					<p class="mt-0.5 text-xs text-slate-500">
						Entendemos o seu ambiente para recomendar a melhor solução térmica.
					</p>
				</div>
				<button
					type="button"
					class="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none"
					aria-label="Fechar modal"
					onclick={() => quoteModal.close()}
				>
					<svg
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<!-- Body Content -->
			<div class="px-6 py-6 sm:px-8">
				{#if isSubmitted}
					<div class="py-8 text-center">
						<div
							class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50"
						>
							<svg
								class="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2.5"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<h4 class="mt-4 text-xl font-bold text-navy-950">Solicitação Registrada</h4>
						<p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
							Recebemos seus dados para a avaliação técnica. Nossa equipe retornará o contato em
							horário comercial com as orientações para o seu espaço.
						</p>
						<div class="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
							<button
								type="button"
								class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 sm:w-auto"
								onclick={handleWhatsAppSubmit}
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.944.555 3.765 1.518 5.31L2 22l4.825-1.488c1.488.877 3.23 1.385 5.206 1.385 5.536 0 10.031-4.494 10.031-10.031C22.062 6.494 17.567 2 12.031 2zm5.797 14.152c-.242.678-1.411 1.297-1.956 1.382-.544.084-1.229.12-1.994-.127-1.848-.596-3.327-1.688-4.57-3.056-1.503-1.654-2.228-3.528-2.228-5.066 0-1.554.809-2.31 1.107-2.617.298-.307.652-.384.869-.384.218 0 .435.002.625.011.202.01.47-.077.734.558.274.658.932 2.274 1.013 2.439.081.165.136.357.027.575-.108.218-.163.355-.325.545-.163.19-.344.423-.491.568-.163.16-.334.335-.144.66.19.326.845 1.391 1.812 2.253 1.246 1.109 2.296 1.452 2.622 1.615.326.163.516.136.706-.081.19-.218.814-.949 1.031-1.275.218-.326.435-.272.734-.163.299.108 1.899.897 2.225 1.06.326.163.543.245.625.381.082.137.082.788-.16 1.466z"
									/>
								</svg>
								Adiantar conversa pelo WhatsApp
							</button>
							<button
								type="button"
								class="w-full rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 sm:w-auto"
								onclick={() => quoteModal.close()}
							>
								Fechar janela
							</button>
						</div>
					</div>
				{:else}
					<form onsubmit={handleDirectSubmit} class="space-y-6">
						<!-- Tipo de Espaço -->
						<div>
							<span class="mb-2 block text-xs font-bold tracking-wider text-slate-600 uppercase">
								1. Tipo de Ambiente
							</span>
							<div class="grid grid-cols-2 gap-3">
								<label
									class="relative flex cursor-pointer flex-col rounded-xl border p-3.5 transition-all {propertyType ===
									'residencial'
										? 'border-brand-blue bg-blue-50/40 ring-1 ring-brand-blue'
										: 'border-slate-200 hover:border-slate-300'}"
								>
									<input
										type="radio"
										name="propertyType"
										value="residencial"
										bind:group={propertyType}
										class="sr-only"
									/>
									<span class="text-sm font-semibold text-navy-950">Residencial</span>
									<span class="mt-0.5 text-xs text-slate-500">Casa, apartamento ou cobertura</span>
								</label>

								<label
									class="relative flex cursor-pointer flex-col rounded-xl border p-3.5 transition-all {propertyType ===
									'comercial'
										? 'border-brand-blue bg-blue-50/40 ring-1 ring-brand-blue'
										: 'border-slate-200 hover:border-slate-300'}"
								>
									<input
										type="radio"
										name="propertyType"
										value="comercial"
										bind:group={propertyType}
										class="sr-only"
									/>
									<span class="text-sm font-semibold text-navy-950">Comercial</span>
									<span class="mt-0.5 text-xs text-slate-500">Escritório, loja ou consultório</span>
								</label>
							</div>
						</div>

						<!-- Serviço Desejado -->
						<div>
							<span class="mb-2 block text-xs font-bold tracking-wider text-slate-600 uppercase">
								2. Serviço Principal
							</span>
							<div class="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
								<label
									class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-xs transition-colors {serviceType ===
									'instalacao'
										? 'border-brand-blue bg-blue-50/30'
										: 'border-slate-200 hover:border-slate-300'}"
								>
									<input
										type="radio"
										name="service"
										value="instalacao"
										bind:group={serviceType}
										class="mt-0.5 text-brand-blue focus:ring-brand-blue"
									/>
									<div>
										<span class="block font-semibold text-navy-950">Instalação</span>
										<span class="text-slate-500">Nova instalação com vácuo e teste</span>
									</div>
								</label>

								<label
									class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-xs transition-colors {serviceType ===
									'manutencao'
										? 'border-brand-blue bg-blue-50/30'
										: 'border-slate-200 hover:border-slate-300'}"
								>
									<input
										type="radio"
										name="service"
										value="manutencao"
										bind:group={serviceType}
										class="mt-0.5 text-brand-blue focus:ring-brand-blue"
									/>
									<div>
										<span class="block font-semibold text-navy-950">Manutenção Preventiva</span>
										<span class="text-slate-500">Higienização profunda e revisão</span>
									</div>
								</label>

								<label
									class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-xs transition-colors {serviceType ===
									'assistencia'
										? 'border-brand-blue bg-blue-50/30'
										: 'border-slate-200 hover:border-slate-300'}"
								>
									<input
										type="radio"
										name="service"
										value="assistencia"
										bind:group={serviceType}
										class="mt-0.5 text-brand-blue focus:ring-brand-blue"
									/>
									<div>
										<span class="block font-semibold text-navy-950">Assistência Técnica</span>
										<span class="text-slate-500">Falha, vazamento ou baixo rendimento</span>
									</div>
								</label>

								<label
									class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 text-xs transition-colors {serviceType ===
									'projetos'
										? 'border-brand-blue bg-blue-50/30'
										: 'border-slate-200 hover:border-slate-300'}"
								>
									<input
										type="radio"
										name="service"
										value="projetos"
										bind:group={serviceType}
										class="mt-0.5 text-brand-blue focus:ring-brand-blue"
									/>
									<div>
										<span class="block font-semibold text-navy-950">Projeto de Climatização</span>
										<span class="text-slate-500">Planejamento para reformas e obras</span>
									</div>
								</label>
							</div>
						</div>

						<!-- Detalhes do Local -->
						<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<div>
								<label for="area" class="mb-1 block text-xs font-semibold text-slate-700">
									Metragem ou ambientes (aprox.)
								</label>
								<input
									id="area"
									type="text"
									bind:value={approximateArea}
									placeholder="Ex.: 25 m² ou 2 quartos e sala"
									class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy-950 placeholder-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
								/>
							</div>

							<div>
								<label for="equipment" class="mb-1 block text-xs font-semibold text-slate-700">
									Situação do aparelho
								</label>
								<select
									id="equipment"
									bind:value={hasEquipment}
									class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-navy-950 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
								>
									<option value="orientacao">Preciso de orientação para escolher</option>
									<option value="nao">Ainda não comprei o aparelho</option>
									<option value="sim">Já possuo o equipamento</option>
								</select>
							</div>
						</div>

						<!-- Dados de Contato -->
						<div class="border-t border-slate-100 pt-2">
							<span class="mb-3 block text-xs font-bold tracking-wider text-slate-600 uppercase">
								3. Seus Dados de Contato
							</span>
							<div class="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
								<div>
									<label for="name" class="mb-1 block text-xs font-semibold text-slate-700">
										Nome completo *
									</label>
									<input
										id="name"
										type="text"
										bind:value={name}
										placeholder="Seu nome"
										class="w-full rounded-lg border {errors.name
											? 'border-red-400 bg-red-50/20'
											: 'border-slate-200'} px-3 py-2 text-sm text-navy-950 placeholder-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
									/>
									{#if errors.name}
										<p class="mt-1 text-xs text-red-500">{errors.name}</p>
									{/if}
								</div>

								<div>
									<label for="phone" class="mb-1 block text-xs font-semibold text-slate-700">
										WhatsApp / Telefone com DDD *
									</label>
									<input
										id="phone"
										type="tel"
										bind:value={phone}
										placeholder="(11) 90000-0000"
										class="w-full rounded-lg border {errors.phone
											? 'border-red-400 bg-red-50/20'
											: 'border-slate-200'} px-3 py-2 text-sm text-navy-950 placeholder-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
									/>
									{#if errors.phone}
										<p class="mt-1 text-xs text-red-500">{errors.phone}</p>
									{/if}
								</div>
							</div>

							<div class="mt-3">
								<label for="email" class="mb-1 block text-xs font-semibold text-slate-700">
									E-mail (opcional)
								</label>
								<input
									id="email"
									type="email"
									bind:value={email}
									placeholder="voce@exemplo.com.br"
									class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy-950 placeholder-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
								/>
							</div>

							<div class="mt-3">
								<label for="notes" class="mb-1 block text-xs font-semibold text-slate-700">
									Observações adicionais (opcional)
								</label>
								<textarea
									id="notes"
									rows="2"
									bind:value={notes}
									placeholder="Conte se há restrições de condomínio, tubulação já existente ou urgência..."
									class="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy-950 placeholder-slate-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 focus:outline-none"
								></textarea>
							</div>
						</div>

						<!-- Actions -->
						<div
							class="flex flex-col items-center justify-end gap-3 border-t border-slate-100 pt-4 sm:flex-row"
						>
							<button
								type="button"
								class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none sm:w-auto"
								onclick={handleWhatsAppSubmit}
							>
								<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.944.555 3.765 1.518 5.31L2 22l4.825-1.488c1.488.877 3.23 1.385 5.206 1.385 5.536 0 10.031-4.494 10.031-10.031C22.062 6.494 17.567 2 12.031 2zm5.797 14.152c-.242.678-1.411 1.297-1.956 1.382-.544.084-1.229.12-1.994-.127-1.848-.596-3.327-1.688-4.57-3.056-1.503-1.654-2.228-3.528-2.228-5.066 0-1.554.809-2.31 1.107-2.617.298-.307.652-.384.869-.384.218 0 .435.002.625.011.202.01.47-.077.734.558.274.658.932 2.274 1.013 2.439.081.165.136.357.027.575-.108.218-.163.355-.325.545-.163.19-.344.423-.491.568-.163.16-.334.335-.144.66.19.326.845 1.391 1.812 2.253 1.246 1.109 2.296 1.452 2.622 1.615.326.163.516.136.706-.081.19-.218.814-.949 1.031-1.275.218-.326.435-.272.734-.163.299.108 1.899.897 2.225 1.06.326.163.543.245.625.381.082.137.082.788-.16 1.466z"
									/>
								</svg>
								Enviar via WhatsApp
							</button>

							<button
								type="submit"
								class="inline-flex w-full items-center justify-center rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-navy-950 focus-visible:outline-none sm:w-auto"
							>
								Registrar solicitação
							</button>
						</div>
					</form>
				{/if}
			</div>
		</div>
	</div>
{/if}
