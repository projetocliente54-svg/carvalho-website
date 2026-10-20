import type { Action } from 'svelte/action';

let observer: IntersectionObserver | undefined;

function getObserver(): IntersectionObserver {
	observer ??= new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer?.unobserve(entry.target);
				}
			}
		},
		{ rootMargin: '0px 0px -40px 0px', threshold: 0.05 }
	);
	return observer;
}

/** Marca o elemento para entrar suavemente ao aparecer na tela. `delay` em ms. */
export const reveal: Action<HTMLElement, number | undefined> = (node, delay = 0) => {
	node.dataset.reveal = '';
	if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	const io = getObserver();
	io.observe(node);
	return {
		destroy() {
			io.unobserve(node);
		}
	};
};
