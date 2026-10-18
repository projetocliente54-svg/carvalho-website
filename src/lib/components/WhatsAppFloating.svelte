<script lang="ts">
	import { getWhatsAppUrl } from '#lib/config/site';

	const whatsappUrl = getWhatsAppUrl();

	let isHovered = $state(false);
</script>

<div class="fixed right-6 bottom-6 z-40 flex items-center">
	<!-- Tooltip pill on hover/focus -->
	{#if isHovered}
		<div
			class="animate-in fade-in slide-in-from-right-2 mr-3 hidden items-center rounded-xl border border-white/10 bg-navy-950 px-3.5 py-2 text-xs font-semibold text-white shadow-lg duration-150 sm:flex"
			role="tooltip"
		>
			<span>Orçamento via WhatsApp</span>
			<div class="ml-2 h-2 w-2 animate-pulse rounded-full bg-emerald-400"></div>
		</div>
	{/if}

	<!-- WhatsApp floating button -->
	<a
		href={whatsappUrl}
		target="_blank"
		rel="noopener noreferrer"
		aria-label="Falar com a Aura Climatização pelo WhatsApp"
		class="relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-emerald-600 focus-visible:ring-4 focus-visible:ring-emerald-300 focus-visible:outline-none active:scale-95"
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
		onfocus={() => (isHovered = true)}
		onblur={() => (isHovered = false)}
	>
		<!-- Notification pulse ring -->
		<span class="absolute -top-1 -right-1 flex h-4 w-4">
			<span
				class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"
			></span>
			<span class="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-400"
			></span>
		</span>

		<svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
			<path
				d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.944.555 3.765 1.518 5.31L2 22l4.825-1.488c1.488.877 3.23 1.385 5.206 1.385 5.536 0 10.031-4.494 10.031-10.031C22.062 6.494 17.567 2 12.031 2zm5.797 14.152c-.242.678-1.411 1.297-1.956 1.382-.544.084-1.229.12-1.994-.127-1.848-.596-3.327-1.688-4.57-3.056-1.503-1.654-2.228-3.528-2.228-5.066 0-1.554.809-2.31 1.107-2.617.298-.307.652-.384.869-.384.218 0 .435.002.625.011.202.01.47-.077.734.558.274.658.932 2.274 1.013 2.439.081.165.136.357.027.575-.108.218-.163.355-.325.545-.163.19-.344.423-.491.568-.163.16-.334.335-.144.66.19.326.845 1.391 1.812 2.253 1.246 1.109 2.296 1.452 2.622 1.615.326.163.516.136.706-.081.19-.218.814-.949 1.031-1.275.218-.326.435-.272.734-.163.299.108 1.899.897 2.225 1.06.326.163.543.245.625.381.082.137.082.788-.16 1.466z"
			/>
		</svg>
	</a>
</div>
