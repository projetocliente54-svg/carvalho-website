<script lang="ts">
	import { siteConfig, whatsappUrl } from '#lib/config/site';
	import { services } from '#lib/data/content';
	import BrandMark from './BrandMark.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-white/8 bg-ink pt-14 pb-24 text-sm text-mist sm:pb-14">
	<div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
		<div class="md:col-span-5">
			<BrandMark size={52} />
			<p class="mt-5 max-w-sm leading-relaxed">
				Instalação, manutenção, higienização, assistência técnica e venda de ar-condicionado em
				{siteConfig.city}, {siteConfig.regionCode}.
			</p>
		</div>

		<nav class="md:col-span-3" aria-label="Serviços">
			<p class="eyebrow text-[0.65rem] text-white">Serviços</p>
			<ul class="mt-4 space-y-2.5">
				{#each services as service (service.id)}
					<li>
						<a href="#{service.id}" class="hover:text-white">{service.title} de ar-condicionado</a>
					</li>
				{/each}
				<li><a href="#equipamentos" class="hover:text-white">Venda de ar-condicionado</a></li>
			</ul>
		</nav>

		<div class="md:col-span-4">
			<p class="eyebrow text-[0.65rem] text-white">Contato</p>
			<ul class="mt-4 space-y-2.5">
				<li>
					<a
						href={whatsappUrl('orcamento')}
						target="_blank"
						rel="noopener"
						class="hover:text-white"
					>
						WhatsApp {siteConfig.contact.phoneDisplay}
					</a>
				</li>
				<li>
					<a
						href={siteConfig.social.instagram}
						target="_blank"
						rel="noopener"
						class="hover:text-white"
					>
						Instagram {siteConfig.social.instagramHandle}
					</a>
				</li>
				<li>{siteConfig.city}, {siteConfig.region}</li>
			</ul>
		</div>
	</div>

	<div
		class="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-white/8 px-4 pt-6 text-xs sm:flex-row sm:justify-between sm:px-6 lg:px-8"
	>
		<p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
		<a href="#inicio" class="hover:text-white">Voltar ao topo ↑</a>
	</div>
</footer>
