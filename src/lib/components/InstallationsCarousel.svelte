<script lang="ts">
	import type { Work } from '#lib/data/proof';

	let { items, label }: { items: Work[]; label: string } = $props();

	const trackId = 'carrossel-instalacoes';
	let track: HTMLUListElement | undefined = $state();
	let index = $state(0);
	let progress = $state(0);
	let atStart = $state(true);
	let atEnd = $state(false);
	let frame = 0;

	const pad = (n: number) => String(n).padStart(2, '0');
	// No fim da trilha vários slides ficam visíveis; o contador mostra o último.
	const shown = $derived(atEnd ? items.length : index + 1);

	function measure() {
		frame = 0;
		if (!track) return;
		const max = track.scrollWidth - track.clientWidth;
		const left = track.scrollLeft;
		atStart = left <= 2;
		atEnd = left >= max - 2;
		progress = max > 0 ? left / max : 1;
		// Slide mais próximo da borda esquerda visível.
		const slides = [...track.children] as HTMLElement[];
		const origin = slides[0]?.offsetLeft ?? 0;
		let nearest = 0;
		slides.forEach((slide, i) => {
			const distance = Math.abs(slide.offsetLeft - origin - left);
			if (distance < Math.abs(slides[nearest].offsetLeft - origin - left)) nearest = i;
		});
		index = nearest;
	}

	function onScroll() {
		frame ||= requestAnimationFrame(measure);
	}

	function goTo(i: number) {
		if (!track) return;
		const slides = [...track.children] as HTMLElement[];
		const target = slides[Math.max(0, Math.min(i, slides.length - 1))];
		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		track.scrollTo({
			left: target.offsetLeft - (slides[0]?.offsetLeft ?? 0),
			behavior: reduce ? 'auto' : 'smooth'
		});
	}

	function onKeydown(event: KeyboardEvent) {
		const moves: Record<string, number> = {
			ArrowLeft: index - 1,
			ArrowRight: index + 1,
			Home: 0,
			End: items.length - 1
		};
		if (!(event.key in moves)) return;
		event.preventDefault();
		goTo(moves[event.key]);
	}

	$effect(() => {
		measure();
		const ro = new ResizeObserver(() => measure());
		if (track) ro.observe(track);
		return () => {
			ro.disconnect();
			cancelAnimationFrame(frame);
		};
	});
</script>

{#snippet arrow(direction: 'prev' | 'next')}
	<button
		type="button"
		class="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-35"
		aria-controls={trackId}
		aria-label={direction === 'prev' ? 'Foto anterior' : 'Próxima foto'}
		disabled={direction === 'prev' ? atStart : atEnd}
		onclick={() => goTo(direction === 'prev' ? index - 1 : index + 1)}
	>
		<svg
			class="h-5 w-5 {direction === 'prev' ? 'rotate-180' : ''}"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"><path stroke-linecap="round" d="M5 12h14m0 0-6-6m6 6-6 6" /></svg
		>
	</button>
{/snippet}

<div role="region" aria-roledescription="carrossel" aria-label={label}>
	<!-- Trilha rolável: precisa de foco e setas do teclado (WCAG 2.1.1) -->
	<!-- svelte-ignore a11y_no_noninteractive_tabindex, a11y_no_noninteractive_element_interactions -->
	<ul
		id={trackId}
		bind:this={track}
		onscroll={onScroll}
		onkeydown={onKeydown}
		tabindex="0"
		aria-label="{label} — use as setas do teclado para navegar"
		class:fade-edge={!atEnd}
		class="-mx-4 no-scrollbar flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:scroll-px-0 lg:gap-5 lg:px-0"
	>
		{#each items as item, i (item.src)}
			<li
				class="w-[78%] shrink-0 snap-start sm:w-[44%] lg:w-[calc((100%-3.75rem)/3.5)]"
				role="group"
				aria-roledescription="slide"
				aria-label="{i + 1} de {items.length}"
			>
				<figure class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper">
					<img
						src={item.src}
						srcset={item.srcset}
						sizes="(min-width: 1280px) 340px, (min-width: 1024px) 27vw, (min-width: 640px) 44vw, 78vw"
						width={item.width}
						height={item.height}
						alt={item.alt}
						loading="lazy"
						decoding="async"
						draggable="false"
						class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
					/>
					<span
						class="absolute top-4 left-4 rounded-full bg-ink/55 px-2.5 py-1 font-heading text-xs font-semibold text-white tabular-nums backdrop-blur"
						aria-hidden="true">{pad(i + 1)}</span
					>
				</figure>
			</li>
		{/each}
	</ul>

	<div class="mt-7 flex items-center gap-5">
		<p class="font-heading text-sm font-semibold text-ink tabular-nums" aria-hidden="true">
			{pad(shown)} <span class="text-slate-ink/60">/ {pad(items.length)}</span>
		</p>
		<div class="h-px flex-1 bg-line" aria-hidden="true">
			<div
				class="h-px origin-left bg-ink transition-transform duration-300 motion-reduce:transition-none"
				style="transform: scaleX({Math.max(progress, 1 / items.length)})"
			></div>
		</div>
		<div class="flex gap-2">
			{@render arrow('prev')}
			{@render arrow('next')}
		</div>
	</div>
	<p class="sr-only" aria-live="polite">Foto {shown} de {items.length}</p>
</div>
