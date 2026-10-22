<script lang="ts">
	import { whatsappUrl } from '#lib/config/site';
	import { services } from '#lib/data/content';
	import { reveal } from '#lib/actions/reveal';
	import NoBreak from './NoBreak.svelte';
</script>

<section id="servicos" class="bg-paper py-20 sm:py-28" aria-labelledby="servicos-titulo">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 lg:grid-cols-12 lg:items-end" use:reveal>
			<div class="lg:col-span-7">
				<p class="eyebrow text-brand">Serviços em Paraty</p>
				<h2
					id="servicos-titulo"
					class="mt-4 text-[clamp(1.875rem,9.8vw,2.25rem)] leading-[1.02] font-extrabold sm:text-5xl lg:text-[3.6rem]"
				>
					<NoBreak text="Instalação e cuidado com o seu ar-condicionado." />
				</h2>
			</div>
			<p class="text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:pb-2">
				Da instalação de um aparelho novo à manutenção do que você já usa, a Carvalho ajuda você a
				encontrar o serviço certo para cada necessidade.
			</p>
		</div>

		<div class="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
			<div class="lg:col-span-5" use:reveal>
				<figure
					class="group relative overflow-hidden rounded-[1.5rem] bg-graphite lg:sticky lg:top-28"
				>
					<img
						src="/img/higienizacao-bolsa-coletora-1000.webp"
						srcset="/img/higienizacao-bolsa-coletora-640.webp 640w, /img/higienizacao-bolsa-coletora-1000.webp 1000w"
						sizes="(min-width: 1024px) 38vw, 92vw"
						width="1000"
						height="904"
						loading="lazy"
						decoding="async"
						alt="Evaporadora aberta durante a higienização, com a bolsa coletora azul instalada sob o aparelho"
						class="aspect-[4/5] w-full object-cover object-[50%_40%] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] max-lg:aspect-[16/11]"
					/>
					<figcaption
						class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-16 text-sm text-white/85"
					>
						<span>Higienização com bolsa coletora instalada sob o aparelho</span>
						<span class="eyebrow shrink-0 text-[0.65rem] text-sky">Foto real</span>
					</figcaption>
				</figure>
			</div>

			<ol class="border-t border-line lg:col-span-7">
				{#each services as service, i (service.id)}
					<li class="border-b border-line" use:reveal={i * 70}>
						<article
							id={service.id}
							class="group grid gap-x-8 gap-y-3 py-8 sm:grid-cols-[4.5rem_1fr] sm:py-10"
						>
							<span
								class="font-heading text-sm font-semibold text-slate-ink tabular-nums transition-colors group-hover:text-brand sm:pt-2"
								aria-hidden="true">0{i + 1}</span
							>
							<div>
								<h3 class="text-2xl font-bold sm:text-[1.9rem]">{service.title}</h3>
								<p class="mt-3 max-w-lg leading-relaxed text-slate-ink">{service.description}</p>
								<a
									href={whatsappUrl(service.intent)}
									target="_blank"
									rel="noopener"
									class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-strong"
								>
									{service.cta}
									<svg
										class="h-4 w-4 transition-transform group-hover:translate-x-1"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										aria-hidden="true"
										><path stroke-linecap="round" d="M5 12h14m0 0-6-6m6 6-6 6" /></svg
									>
									<span class="sr-only">(abre o WhatsApp)</span>
								</a>
							</div>
						</article>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
