<script lang="ts">
	import { siteConfig } from '#lib/config/site';

	let { size = 44, showText = true }: { size?: number; showText?: boolean } = $props();
</script>

<span class="flex items-center gap-3">
	<img
		src={siteConfig.brand.logo}
		width={size}
		height={size}
		alt={showText ? '' : siteConfig.name}
		class="shrink-0 rounded-full ring-1 ring-white/10"
		style="width: {size}px; height: {size}px"
	/>
	{#if showText}
		<span class="flex flex-col leading-none">
			<span
				class="font-heading text-[1.05rem] font-extrabold tracking-[0.06em] text-white uppercase [font-stretch:112%]"
			>
				Carvalho
			</span>
			<span class="mt-1 text-[0.62rem] font-medium tracking-[0.3em] text-steel uppercase">
				Refrigeração
			</span>
		</span>
	{/if}
</span>
