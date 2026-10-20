<script lang="ts">
	import { whatsappUrl } from '#lib/config/site';
	import { reveal } from '#lib/actions/reveal';
	import WhatsAppIcon from './WhatsAppIcon.svelte';
	import NoBreak from './NoBreak.svelte';

	const checklist = [
		'Qual é o ambiente: quarto, sala, loja ou escritório',
		'O tamanho aproximado, em metros quadrados',
		'Se o local recebe sol da tarde',
		'Se já existe ponto de instalação'
	];
</script>

<section
	id="equipamentos"
	class="relative isolate overflow-hidden bg-graphite text-white"
	aria-labelledby="equipamentos-titulo"
>
	<div class="grid grid-cols-1 lg:min-h-[44rem] lg:grid-cols-2">
		<figure class="group relative min-h-[22rem] overflow-hidden sm:min-h-[28rem]">
			<img
				src="/img/ambiente-1200.webp"
				srcset="/img/ambiente-800.webp 800w, /img/ambiente-1200.webp 1200w"
				sizes="(min-width: 1024px) 50vw, 100vw"
				width="1200"
				height="900"
				loading="lazy"
				decoding="async"
				alt="Sala de estar iluminada com sofá, poltronas e plantas — um ambiente para climatizar"
				class="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.03]"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-graphite/70"
				aria-hidden="true"
			></div>
			<span
				class="eyebrow absolute top-6 left-6 rounded-full border border-white/20 bg-ink/50 px-3.5 py-1.5 text-[0.65rem] text-white backdrop-blur"
			>
				Venda de equipamentos
			</span>
		</figure>

		<div class="relative flex items-center px-4 py-16 sm:px-10 sm:py-20 lg:px-12 xl:px-20">
			<svg
				class="airflow pointer-events-none absolute right-0 bottom-0 -z-10 h-72 w-[40rem] opacity-50"
				viewBox="0 0 640 280"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M0 220C160 160 260 260 400 200s180-120 240-110"
					stroke="#1676D2"
					stroke-opacity=".4"
				/>
				<path
					d="M0 250C170 200 280 280 420 230s170-100 220-90"
					stroke="#7B9CC6"
					stroke-opacity=".25"
				/>
			</svg>

			<div class="max-w-xl" use:reveal>
				<p class="eyebrow text-sky">Comprar ar-condicionado em Paraty</p>
				<h2
					id="equipamentos-titulo"
					class="mt-4 text-4xl leading-[1.02] font-extrabold sm:text-5xl lg:text-[2.9rem] xl:text-[3.4rem]"
				>
					<NoBreak text="Procurando um ar-condicionado novo?" />
				</h2>
				<p class="mt-6 text-lg leading-relaxed text-mist">
					A escolha do aparelho certo começa pelas necessidades do ambiente. Fale com a Carvalho
					para consultar os modelos disponíveis e receber orientação antes de comprar.
				</p>

				<div class="mt-9 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
					<p class="text-sm font-semibold text-white">
						Para indicar o aparelho, conte para a gente:
					</p>
					<ul class="mt-4 grid gap-3 text-sm text-mist">
						{#each checklist as item (item)}
							<li class="flex gap-3">
								<svg
									class="mt-0.5 h-4 w-4 shrink-0 text-sky"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.2"
									aria-hidden="true"><path stroke-linecap="round" d="m5 12.5 4.5 4.5L19 7.5" /></svg
								>
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
					<a
						href={whatsappUrl('equipamentos')}
						target="_blank"
						rel="noopener"
						class="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-5 py-4 text-[0.95rem] font-semibold text-white transition-colors hover:bg-brand-strong sm:px-7 sm:whitespace-nowrap"
					>
						<WhatsAppIcon />
						Consultar equipamentos pelo WhatsApp
					</a>
					<a
						href={whatsappUrl('ajudaEscolher')}
						target="_blank"
						rel="noopener"
						class="inline-flex items-center justify-center rounded-full border border-white/18 px-7 py-4 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5 sm:whitespace-nowrap"
					>
						Quero ajuda para escolher
					</a>
				</div>
				<p class="mt-5 text-sm text-mist/80">
					Modelos, marcas e valores variam conforme a disponibilidade — consulte as opções
					atualizadas direto com a Carvalho.
				</p>
			</div>
		</div>
	</div>
</section>
