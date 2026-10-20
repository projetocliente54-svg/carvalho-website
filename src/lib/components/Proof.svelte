<script lang="ts">
	import { siteConfig, whatsappUrl } from '#lib/config/site';
	import { works, reviews, reviewSummary, instagramHighlights } from '#lib/data/proof';
	import { reveal } from '#lib/actions/reveal';
	import InstallationsCarousel from './InstallationsCarousel.svelte';

	const dateFormat = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' });
	const formatDate = (iso: string) => dateFormat.format(new Date(`${iso}T12:00:00`));
	const reviewLink = siteConfig.social.googleReview ?? siteConfig.social.googleMaps;
</script>

{#snippet stars(rating: number)}
	<span class="flex gap-0.5 text-[#F5B301]" role="img" aria-label="Nota {rating} de 5">
		{#each [1, 2, 3, 4, 5] as n (n)}
			<svg
				class="h-4 w-4 {n > rating ? 'opacity-25' : ''}"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
				><path
					d="m10 1.5 2.6 5.5 6 .7-4.4 4.1 1.1 6L10 14.9l-5.3 2.9 1.1-6L1.4 7.7l6-.7L10 1.5Z"
				/></svg
			>
		{/each}
	</span>
{/snippet}

<section id="trabalhos" class="bg-white py-20 sm:py-28" aria-labelledby="trabalhos-titulo">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 lg:grid-cols-12 lg:items-end" use:reveal>
			<div class="lg:col-span-7">
				<p class="eyebrow text-brand">Trabalhos realizados</p>
				<h2
					id="trabalhos-titulo"
					class="mt-4 text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-[3.6rem]"
				>
					Instalações reais. Cuidado em cada detalhe.
				</h2>
			</div>
			<p class="text-lg leading-relaxed text-slate-ink lg:col-span-5 lg:pb-2">
				Conheça um pouco do trabalho da Carvalho Refrigeração em diferentes ambientes.
			</p>
		</div>

		{#if works.length > 0}
			<div class="mt-12 lg:mt-14" use:reveal={80}>
				<InstallationsCarousel
					items={works}
					label="Fotos de instalações da Carvalho Refrigeração"
				/>
			</div>
		{/if}

		<div class="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
			<!-- Quem atende + Instagram -->
			<div class="lg:col-span-7" use:reveal>
				<div
					class="relative grid h-full overflow-hidden rounded-[1.75rem] bg-ink text-white sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]"
				>
					<figure class="relative min-h-[20rem] sm:min-h-full">
						<img
							src="/img/equipe-feira-480.webp"
							srcset="/img/equipe-feira-480.webp 480w, /img/equipe-feira-720.webp 720w"
							sizes="(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 100vw"
							width="720"
							height="900"
							alt="Dois profissionais sorrindo e fazendo sinal de positivo em uma feira do setor de climatização, diante de estandes de fabricantes de ar-condicionado"
							loading="lazy"
							decoding="async"
							class="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
						/>
						<figcaption
							class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-14 text-xs text-white/80"
						>
							Em feira do setor de refrigeração e climatização
						</figcaption>
					</figure>

					<div class="relative flex flex-col justify-between p-8 sm:p-9">
						<svg
							class="airflow pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full opacity-50"
							viewBox="0 0 720 200"
							preserveAspectRatio="none"
							fill="none"
							aria-hidden="true"
						>
							<path
								d="M0 150C180 90 300 190 460 130s200-90 260-80"
								stroke="#1676D2"
								stroke-opacity=".45"
							/>
						</svg>

						<div class="relative">
							<div class="flex items-center gap-3">
								<img
									src={siteConfig.brand.logo}
									width="44"
									height="44"
									alt=""
									loading="lazy"
									class="h-11 w-11 rounded-full ring-2 ring-steel/50 ring-offset-2 ring-offset-ink"
								/>
								<div>
									<p class="font-heading font-bold">{siteConfig.name}</p>
									<p class="text-sm text-mist">{siteConfig.social.instagramHandle}</p>
								</div>
							</div>
							<h3 class="mt-7 text-2xl leading-tight font-bold">
								Atendimento direto e atualização constante no setor.
							</h3>
							<p class="mt-3 leading-relaxed text-mist">
								No Instagram você acompanha os serviços realizados e a rotina de trabalho da
								Carvalho.
							</p>
							<ul class="mt-6 flex flex-wrap gap-2" aria-label="Destaques do Instagram">
								{#each instagramHighlights as highlight (highlight)}
									<li
										class="rounded-full border border-white/12 px-3.5 py-1.5 text-sm text-white/85"
									>
										{highlight}
									</li>
								{/each}
							</ul>
						</div>

						<a
							href={siteConfig.social.instagram}
							target="_blank"
							rel="noopener"
							class="group relative mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper"
						>
							Ver mais no Instagram
							<svg
								class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"><path stroke-linecap="round" d="M7 17 17 7m0 0H9m8 0v8" /></svg
							>
						</a>
					</div>
				</div>
			</div>

			<!-- Avaliações do Google -->
			<div class="lg:col-span-5" use:reveal={120}>
				<div class="flex h-full flex-col rounded-[1.75rem] border border-line bg-paper p-8 sm:p-10">
					<div class="flex items-center justify-between gap-4">
						<h3 class="text-xl font-bold">Avaliações no Google</h3>
						<svg class="h-6 w-6 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
							<path
								fill="#4285F4"
								d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8a10 10 0 0 1-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.1Z"
							/>
							<path
								fill="#34A853"
								d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.9-12.3-9.1H4.3v5.7A22 22 0 0 0 24 46Z"
							/>
							<path
								fill="#FBBC05"
								d="M11.7 28.2a13.2 13.2 0 0 1 0-8.4v-5.7H4.3a22 22 0 0 0 0 19.8l7.4-5.7Z"
							/>
							<path
								fill="#EA4335"
								d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3A22 22 0 0 0 4.3 14.1l7.4 5.7c1.7-5.2 6.6-9.1 12.3-9.1Z"
							/>
						</svg>
					</div>

					{#if reviewSummary}
						<div class="mt-6 flex items-center gap-3">
							<span class="font-heading text-4xl font-extrabold tabular-nums">
								{reviewSummary.rating.toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
							</span>
							<div>
								{@render stars(Math.round(reviewSummary.rating))}
								<p class="mt-1 text-xs text-slate-ink">
									{reviewSummary.count} avaliações no Google
								</p>
							</div>
						</div>
					{/if}

					{#if reviews.length > 0}
						<ul class="mt-6 divide-y divide-line">
							{#each reviews.slice(0, 3) as review (review.author + review.text)}
								<li class="py-5 first:pt-0">
									<blockquote>
										{@render stars(review.rating)}
										<p class="mt-3 leading-relaxed text-ink/85">“{review.text}”</p>
										<footer class="mt-3 text-sm text-slate-ink">
											<cite class="font-semibold text-ink not-italic">{review.author}</cite>
											{#if review.date}· {formatDate(review.date)}{/if}
											{#if review.url}
												· <a
													href={review.url}
													target="_blank"
													rel="noopener"
													class="underline underline-offset-2 hover:text-brand">ver no Google</a
												>
											{/if}
										</footer>
									</blockquote>
								</li>
							{/each}
						</ul>
					{:else}
						<div class="mt-8 flex flex-1 flex-col">
							<svg
								class="h-10 w-10 text-steel"
								viewBox="0 0 40 40"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								aria-hidden="true"
								><path d="M8 26c0-7 3-12 9-14M23 26c0-7 3-12 9-14" stroke-linecap="round" /><circle
									cx="12"
									cy="27"
									r="4"
								/><circle cx="27" cy="27" r="4" /></svg
							>
							<p class="mt-5 text-lg leading-relaxed text-ink/85">
								Já foi atendido pela Carvalho? Conte como foi a sua experiência — ela ajuda outros
								moradores de Paraty a escolher com segurança.
							</p>
						</div>
					{/if}

					<div class="mt-8 border-t border-line pt-6">
						{#if reviewLink}
							<a
								href={reviewLink}
								target="_blank"
								rel="noopener"
								class="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-strong"
							>
								{siteConfig.social.googleReview ? 'Avaliar no Google' : 'Ver todas no Google'}
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									aria-hidden="true"><path stroke-linecap="round" d="M7 17 17 7m0 0H9m8 0v8" /></svg
								>
							</a>
						{:else}
							<a
								href={whatsappUrl('avaliacao')}
								target="_blank"
								rel="noopener"
								class="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-strong"
							>
								Enviar meu comentário pelo WhatsApp
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									aria-hidden="true"
									><path stroke-linecap="round" d="M5 12h14m0 0-6-6m6 6-6 6" /></svg
								>
							</a>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
