import { siteOrigin } from '#lib/config/site';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin(url.origin)}/sitemap.xml\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
