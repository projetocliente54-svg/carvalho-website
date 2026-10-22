import type { Handle } from '@sveltejs/kit/hooks';

/** Cabeçalhos básicos de segurança nas respostas geradas pelo Worker (HTML, robots, sitemap). */
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('X-Frame-Options', 'SAMEORIGIN');
	return response;
};
