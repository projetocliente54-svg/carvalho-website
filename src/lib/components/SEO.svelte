<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig, siteOrigin } from '#lib/config/site';
	import { faqs, services } from '#lib/data/content';
	import { reviewSummary } from '#lib/data/proof';

	const origin = $derived(siteOrigin(page.url.origin));
	const canonical = $derived(`${origin}${page.url.pathname}`);
	const ogImage = $derived(`${origin}${siteConfig.seo.ogImage}`);

	// Somente dados confirmados. Endereço, horário e nota entram apenas quando configurados.
	const business = $derived({
		'@context': 'https://schema.org',
		'@type': 'HVACBusiness',
		'@id': `${origin}/#empresa`,
		name: siteConfig.name,
		description: siteConfig.seo.description,
		url: `${origin}/`,
		image: ogImage,
		logo: `${origin}/brand/carvalho-logo.png`,
		telephone: `+${siteConfig.contact.whatsapp}`,
		sameAs: [siteConfig.social.instagram, siteConfig.social.googleMaps].filter(Boolean),
		address: {
			'@type': 'PostalAddress',
			...(siteConfig.contact.address && {
				streetAddress: siteConfig.contact.address.streetAddress,
				...(siteConfig.contact.address.postalCode && {
					postalCode: siteConfig.contact.address.postalCode
				})
			}),
			addressLocality: siteConfig.city,
			addressRegion: siteConfig.regionCode,
			addressCountry: 'BR'
		},
		areaServed: { '@type': 'City', name: `${siteConfig.city}, ${siteConfig.regionCode}` },
		...(reviewSummary && {
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: reviewSummary.rating,
				reviewCount: reviewSummary.count
			}
		}),
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Serviços e venda de ar-condicionado',
			itemListElement: [
				...services.map((service) => ({
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: `${service.title} de ar-condicionado em ${siteConfig.city}`,
						description: service.description
					}
				})),
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: `Venda de ar-condicionado em ${siteConfig.city}`,
						description: 'Consulta de aparelhos disponíveis com orientação na escolha.'
					}
				}
			]
		}
	});

	const faqPage = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: { '@type': 'Answer', text: faq.answer }
		}))
	};

	const toScript = (data: object) =>
		`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</` +
		'script>';

	const jsonLd = $derived(toScript(business) + toScript(faqPage));
</script>

<svelte:head>
	<title>{siteConfig.seo.title}</title>
	<meta name="description" content={siteConfig.seo.description} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={canonical} />
	<meta name="geo.region" content="BR-{siteConfig.regionCode}" />
	<meta name="geo.placename" content={siteConfig.city} />

	<meta property="og:type" content="website" />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content={siteConfig.name} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={siteConfig.seo.title} />
	<meta property="og:description" content={siteConfig.seo.description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={siteConfig.seo.ogImageAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={siteConfig.seo.title} />
	<meta name="twitter:description" content={siteConfig.seo.description} />
	<meta name="twitter:image" content={ogImage} />

	<link
		rel="preload"
		as="image"
		href="/img/instalacao-detalhe-1024.webp"
		imagesrcset="/img/instalacao-detalhe-640.webp 640w, /img/instalacao-detalhe-1024.webp 1024w"
		imagesizes="(min-width: 1280px) 500px, (min-width: 1024px) 38vw, 100vw"
		fetchpriority="high"
	/>

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLd}
</svelte:head>
