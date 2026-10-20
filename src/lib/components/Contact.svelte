<script lang="ts">
	import { siteConfig, whatsappUrl, type WhatsAppIntent } from '#lib/config/site';
	import { faqs } from '#lib/data/content';
	import { reveal } from '#lib/actions/reveal';
	import WhatsAppIcon from './WhatsAppIcon.svelte';
	import NoBreak from './NoBreak.svelte';

	interface Path {
		label: string;
		title: string;
		description: string;
		intent: WhatsAppIntent;
		featured?: boolean;
	}

	const paths: Path[] = [
		{
			label: 'Solicitar serviço',
			title: 'Orçamento de instalação',
			description: 'Para instalar um aparelho novo em casa ou na sua empresa.',
			intent: 'instalacao',
			featured: true
		},
		{
			label: 'Solicitar serviço',
			title: 'Manutenção ou higienização',
			description: 'Para o aparelho que você já usa e precisa de cuidado ou limpeza.',
			intent: 'manutencaoHigienizacao'
		},
		{
			label: 'Consultar equipamentos',
			title: 'Comprar um ar-condicionado',
			description: 'Consulte os modelos disponíveis e receba orientação para escolher.',
			intent: 'equipamentos',
			featured: true
		},
		{
			label: 'Falar com a Carvalho',
			title: 'Dúvidas gerais',
			description: 'Não sabe qual serviço pedir? Explique a situação e receba orientação.',
			intent: 'duvidas'
		}
	];
</script>

<section
	id="contato"
	class="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28"
	aria-labelledby="contato-titulo"
>
	<div
		class="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/16 blur-[120px]"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl" use:reveal>
			<p class="eyebrow text-steel">Contato · {siteConfig.city}, {siteConfig.regionCode}</p>
			<h2
				id="contato-titulo"
				class="mt-4 text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-[3.6rem]"
			>
				<NoBreak text="Precisa instalar, cuidar ou comprar um ar-condicionado?" />
			</h2>
			<p class="mt-6 text-lg leading-relaxed text-mist">
				Conte à Carvalho o que você precisa e receba orientação sobre o próximo passo. Escolha um
				assunto: o WhatsApp abre com a mensagem pronta para você revisar e enviar.
			</p>
		</div>

		<ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
			{#each paths as path, i (path.intent)}
				<li use:reveal={i * 70}>
					<a
						href={whatsappUrl(path.intent)}
						target="_blank"
						rel="noopener"
						class="group flex h-full flex-col rounded-2xl border p-5 transition-colors sm:p-6 {path.featured
							? 'border-brand/60 bg-brand/12 hover:bg-brand/20'
							: 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'}"
					>
						<span class="eyebrow text-[0.65rem] {path.featured ? 'text-sky' : 'text-mist'}">
							{path.label}
						</span>
						<span class="mt-4 font-heading text-xl font-bold"><NoBreak text={path.title} /></span>
						<span class="mt-2 text-sm leading-relaxed text-mist">{path.description}</span>
						<span
							class="mt-auto flex items-center gap-2 pt-4 text-sm font-semibold sm:pt-6 {path.featured
								? 'text-white'
								: 'text-white/85'}"
						>
							<WhatsAppIcon class="h-4 w-4 text-[#25D366]" />
							Abrir conversa
							<svg
								class="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"><path stroke-linecap="round" d="M5 12h14m0 0-6-6m6 6-6 6" /></svg
							>
						</span>
					</a>
				</li>
			{/each}
		</ul>

		<div class="mt-16 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-12">
			<div class="lg:col-span-4" use:reveal>
				<h3 class="text-2xl font-bold">Canais oficiais</h3>
				<dl class="mt-6 space-y-5 text-sm">
					<div>
						<dt class="text-mist">WhatsApp</dt>
						<dd class="mt-1">
							<a
								href={whatsappUrl('orcamento')}
								target="_blank"
								rel="noopener"
								class="font-heading text-2xl font-bold tabular-nums hover:text-sky"
							>
								{siteConfig.contact.phoneDisplay}
							</a>
						</dd>
					</div>
					<div>
						<dt class="text-mist">Instagram</dt>
						<dd class="mt-1">
							<a
								href={siteConfig.social.instagram}
								target="_blank"
								rel="noopener"
								class="text-base hover:text-sky"
							>
								{siteConfig.social.instagramHandle}
							</a>
						</dd>
					</div>
					<div>
						<dt class="text-mist">Localização</dt>
						<dd class="mt-1 text-base">
							{#if siteConfig.contact.address}
								{siteConfig.contact.address.streetAddress} — {siteConfig.contact.address
									.neighborhood}<br />
							{/if}
							{siteConfig.city}, {siteConfig.region}
							{#if siteConfig.social.googleMaps}
								<a
									href={siteConfig.social.googleMaps}
									target="_blank"
									rel="noopener"
									class="mt-1 block text-sky hover:underline"
								>
									Ver no Google Maps
								</a>
							{/if}
						</dd>
					</div>
					{#if siteConfig.contact.openingHours}
						<div>
							<dt class="text-mist">Horário</dt>
							<dd class="mt-1 text-base">{siteConfig.contact.openingHours}</dd>
						</div>
					{/if}
				</dl>
			</div>

			<div class="lg:col-span-8" use:reveal={100}>
				<h3 class="text-2xl font-bold">Perguntas frequentes</h3>
				<div class="mt-6 divide-y divide-white/10 border-y border-white/10">
					{#each faqs as faq (faq.question)}
						<details class="group">
							<summary
								class="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-heading text-lg font-semibold [&::-webkit-details-marker]:hidden"
							>
								<span><NoBreak text={faq.question} /></span>
								<span
									class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 transition-transform duration-300 group-open:rotate-45"
									aria-hidden="true"
								>
									<svg
										class="h-3.5 w-3.5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2.2"><path stroke-linecap="round" d="M12 5v14M5 12h14" /></svg
									>
								</span>
							</summary>
							<p class="max-w-2xl pb-6 leading-relaxed text-mist">{faq.answer}</p>
						</details>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
