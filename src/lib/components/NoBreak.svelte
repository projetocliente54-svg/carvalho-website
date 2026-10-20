<script lang="ts">
	// Evita que títulos quebrem palavras compostas no hífen ("ar-" / "condicionado").
	let { text }: { text: string } = $props();

	const parts = $derived(text.split(/(\S+-\S+)/));
</script>

{#each parts as part, i (i)}{#if i % 2 === 1}<span class="whitespace-nowrap">{part}</span
		>{:else}{part}{/if}{/each}
