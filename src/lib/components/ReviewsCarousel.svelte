<script lang="ts">
	import type { Review } from '#lib/data/proof';
	import Stars from './Stars.svelte';

	let { items, label }: { items: Review[]; label: string } = $props();

	/** Tempo de cada avaliação na tela; a barra de progresso usa o mesmo valor. */
	const DURATION = 6000;
	const stageId = 'carrossel-avaliacoes';

	let root: HTMLElement | undefined = $state();
	let index = $state(0);
	let direction = $state<1 | -1>(1);
	let userPaused = $state(false);
	let hovered = $state(false);
	let keyboardFocus = $state(false);
	let inView = $state(false);
	let pageHidden = $state(false);
	let reduceMotion = $state(false);
	/** Avaliações cujo texto passou do limite de linhas e ganham o link para a versão completa. */
	let clamped = $state<boolean[]>([]);

	const autoplay = $derived(items.length > 1 && !reduceMotion && !userPaused);
	const running = $derived(autoplay && inView && !hovered && !keyboardFocus && !pageHidden);

	const pad = (n: number) => String(n).padStart(2, '0');
	const dateFormat = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' });
	const formatDate = (iso: string) =>
		iso.length === 4 ? iso : dateFormat.format(new Date(`${iso.slice(0, 7)}-15T12:00:00`));
	const initials = (name: string) =>
		name
			.split(/\s+/)
			.filter(Boolean)
			.slice(0, 2)
			.map((part) => part[0].toUpperCase())
			.join('');

	function goTo(i: number, dir: 1 | -1 = i >= index ? 1 : -1) {
		direction = dir;
		index = (i + items.length) % items.length;
	}

	const next = () => goTo(index + 1, 1);
	const prev = () => goTo(index - 1, -1);

	function onKeydown(event: KeyboardEvent) {
		const moves: Record<string, () => void> = {
			ArrowLeft: prev,
			ArrowRight: next,
			Home: () => goTo(0, -1),
			End: () => goTo(items.length - 1, 1)
		};
		if (!(event.key in moves)) return;
		event.preventDefault();
		moves[event.key]();
	}

	// Pausa só com foco de teclado: o toque em uma seta não deve travar o carrossel no celular.
	function onFocusIn(event: FocusEvent) {
		keyboardFocus = (event.target as HTMLElement).matches(':focus-visible');
	}

	function onFocusOut(event: FocusEvent) {
		if (!root?.contains(event.relatedTarget as Node | null)) keyboardFocus = false;
	}

	// Deslizar o dedo para os lados troca de avaliação.
	let swipeStart: { x: number; y: number } | null = null;

	function onPointerDown(event: PointerEvent) {
		if (event.pointerType !== 'mouse') swipeStart = { x: event.clientX, y: event.clientY };
	}

	function onPointerUp(event: PointerEvent) {
		if (!swipeStart) return;
		const dx = event.clientX - swipeStart.x;
		const dy = event.clientY - swipeStart.y;
		swipeStart = null;
		if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev)();
	}

	function measureClamp() {
		const texts = root?.querySelectorAll<HTMLElement>('[data-review-text]') ?? [];
		clamped = [...texts].map((p) => p.scrollHeight > p.clientHeight + 1);
	}

	$effect(() => {
		const media = matchMedia('(prefers-reduced-motion: reduce)');
		const syncMotion = () => (reduceMotion = media.matches);
		const syncVisibility = () => (pageHidden = document.hidden);
		syncMotion();
		syncVisibility();
		media.addEventListener('change', syncMotion);
		document.addEventListener('visibilitychange', syncVisibility);

		const io = new IntersectionObserver(([entry]) => (inView = entry.isIntersecting), {
			threshold: 0.35
		});
		if (root) io.observe(root);

		const ro = new ResizeObserver(measureClamp);
		if (root) ro.observe(root);

		return () => {
			ro.disconnect();
			media.removeEventListener('change', syncMotion);
			document.removeEventListener('visibilitychange', syncVisibility);
			io.disconnect();
		};
	});
</script>

{#snippet googleMark(size: string)}
	<svg class="{size} shrink-0" viewBox="0 0 48 48" aria-hidden="true">
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
{/snippet}

{#snippet arrow(dir: 'prev' | 'next')}
	<button
		type="button"
		class="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
		aria-controls={stageId}
		aria-label={dir === 'prev' ? 'Avaliação anterior' : 'Próxima avaliação'}
		onclick={dir === 'prev' ? prev : next}
	>
		<svg
			class="h-[1.125rem] w-[1.125rem] {dir === 'prev' ? 'rotate-180' : ''}"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			aria-hidden="true"><path stroke-linecap="round" d="M5 12h14m0 0-6-6m6 6-6 6" /></svg
		>
	</button>
{/snippet}

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<section
	bind:this={root}
	class="flex min-w-0 flex-1 flex-col"
	aria-roledescription="carrossel"
	aria-label={label}
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	onfocusin={onFocusIn}
	onfocusout={onFocusOut}
	onkeydown={onKeydown}
>
	<!-- Deslizar é atalho para o toque; as setas continuam sendo o controle principal -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		id={stageId}
		class="stage grid min-w-0 flex-1 touch-pan-y grid-cols-[minmax(0,1fr)]"
		aria-live={running ? 'off' : 'polite'}
		onpointerdown={onPointerDown}
		onpointerup={onPointerUp}
		onpointercancel={() => (swipeStart = null)}
	>
		{#each items as review, i (review.author + review.text)}
			{@const active = i === index}
			<figure
				class="slide relative flex flex-col rounded-2xl border border-line/80 bg-white p-5 shadow-[0_1px_2px_rgb(8_10_13/0.04),0_12px_32px_-14px_rgb(8_10_13/0.14)] sm:p-6"
				class:is-active={active}
				style={active ? `--enter: ${direction * 18}px` : `--leave: ${direction * -18}px`}
				role="group"
				aria-roledescription="avaliação"
				aria-label="{i + 1} de {items.length}"
				aria-hidden={!active}
				inert={!active}
			>
				<figcaption class="flex items-center gap-3.5 pr-7 sm:pr-16">
					{#if review.avatar}
						<img
							src={review.avatar}
							width="96"
							height="96"
							alt=""
							loading="lazy"
							decoding="async"
							referrerpolicy="no-referrer"
							class="h-12 w-12 shrink-0 rounded-full bg-paper object-cover ring-1 ring-line"
						/>
					{:else}
						<span
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink font-heading text-[0.95rem] font-bold tracking-wide text-white"
							aria-hidden="true">{initials(review.author)}</span
						>
					{/if}
					<div class="min-w-0">
						<cite
							class="block font-heading text-[1.05rem] leading-tight font-bold break-words text-ink not-italic"
							>{review.author}</cite
						>
						<div class="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
							<Stars rating={review.rating} size="h-[0.95rem] w-[0.95rem]" />
							{#if review.date}
								<span class="text-[0.8125rem] text-slate-ink first-letter:uppercase"
									>{formatDate(review.date)}</span
								>
							{/if}
						</div>
					</div>
				</figcaption>

				<blockquote class="mt-4">
					<!-- Limite de linhas para caber no espaço do card; o texto integral fica no Google -->
					<p
						data-review-text
						class="line-clamp-7 text-base leading-[1.65] text-pretty text-ink/85 lg:line-clamp-4 xl:line-clamp-5"
					>
						{review.text}
					</p>
				</blockquote>

				{#if review.url && clamped[i]}
					<a
						href={review.url}
						target="_blank"
						rel="noopener"
						class="mt-3 inline-flex w-fit items-center gap-1 text-sm font-semibold text-ink underline-offset-4 hover:text-brand hover:underline"
					>
						Ler avaliação completa<span class="sr-only"> de {review.author} no Google</span>
						<svg
							class="h-3.5 w-3.5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"><path stroke-linecap="round" d="M7 17 17 7m0 0H9m8 0v8" /></svg
						>
					</a>
				{/if}

				<!-- Origem da avaliação -->
				<span
					class="absolute top-5 right-5 inline-flex items-center gap-1.5 text-xs font-medium text-slate-ink sm:top-6 sm:right-6"
				>
					{@render googleMark('h-3.5 w-3.5')}
					<span class="max-sm:sr-only">Google</span>
				</span>
			</figure>
		{/each}
	</div>

	{#if items.length > 1}
		<div class="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-4">
			<p
				class="shrink-0 font-heading text-sm font-semibold text-ink tabular-nums"
				aria-hidden="true"
			>
				{pad(index + 1)}&nbsp;<span class="text-slate-ink/60">/&nbsp;{pad(items.length)}</span>
			</p>

			<!-- Uma faixa por avaliação; a atual se preenche durante o tempo em que fica na tela -->
			<div
				class="order-first flex basis-full gap-1.5 sm:order-none sm:flex-1 sm:basis-auto"
				aria-hidden="true"
			>
				{#each items, i (i)}
					<span class="relative h-[3px] flex-1 overflow-hidden rounded-full bg-line">
						{#if i < index || (i === index && !autoplay)}
							<span class="absolute inset-0 rounded-full bg-ink"></span>
						{:else if i === index}
							<span
								class="fill absolute inset-0 rounded-full bg-ink"
								style="--duration: {DURATION}ms; animation-play-state: {running
									? 'running'
									: 'paused'}"
								onanimationend={next}
							></span>
						{/if}
					</span>
				{/each}
			</div>

			<div class="flex shrink-0 items-center gap-1.5">
				{#if !reduceMotion}
					<button
						type="button"
						class="flex h-11 w-9 items-center justify-center rounded-full text-slate-ink transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
						aria-controls={stageId}
						aria-label={userPaused
							? 'Retomar passagem automática das avaliações'
							: 'Pausar passagem automática das avaliações'}
						onclick={() => (userPaused = !userPaused)}
					>
						{#if userPaused}
							<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
								><path
									d="M8 5.5v13a1 1 0 0 0 1.5.9l10.4-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5Z"
								/></svg
							>
						{:else}
							<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
								><rect x="6" y="5" width="4" height="14" rx="1" /><rect
									x="14"
									y="5"
									width="4"
									height="14"
									rx="1"
								/></svg
							>
						{/if}
					</button>
				{/if}
				{@render arrow('prev')}
				{@render arrow('next')}
			</div>
		</div>
	{/if}
</section>

<style>
	/* Todas as avaliações na mesma célula: a altura segue a mais longa e nada pula na troca */
	.stage > :global(.slide) {
		grid-area: 1 / 1;
		opacity: 0;
		visibility: hidden;
		transform: translateX(var(--leave, 0));
		transition:
			opacity 0.5s cubic-bezier(0.2, 0.7, 0.2, 1),
			transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1),
			visibility 0s linear 0.5s;
	}

	.stage > :global(.slide.is-active) {
		opacity: 1;
		visibility: visible;
		transform: none;
		transition: none;
		animation: enter 0.65s cubic-bezier(0.2, 0.7, 0.2, 1) 0.1s both;
	}

	@keyframes enter {
		from {
			opacity: 0;
			transform: translateX(var(--enter, 0));
		}
	}

	.fill {
		transform-origin: left;
		animation: fill var(--duration) linear forwards;
	}

	@keyframes fill {
		from {
			transform: scaleX(0);
		}
		to {
			transform: scaleX(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stage > :global(.slide),
		.stage > :global(.slide.is-active) {
			transform: none;
			transition: none;
			animation: none;
		}
	}
</style>
