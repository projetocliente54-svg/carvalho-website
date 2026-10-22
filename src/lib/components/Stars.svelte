<script lang="ts">
	let { rating, size = 'h-4 w-4' }: { rating: number; size?: string } = $props();
</script>

<span class="flex gap-0.5 text-[#F5B301]" role="img" aria-label="Nota {rating} de 5">
	{#each [1, 2, 3, 4, 5] as n (n)}
		<svg
			class="{size} {n > rating ? 'opacity-25' : ''}"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
			><path
				d="m10 1.5 2.6 5.5 6 .7-4.4 4.1 1.1 6L10 14.9l-5.3 2.9 1.1-6L1.4 7.7l6-.7L10 1.5Z"
			/></svg
		>
	{/each}
</span>
