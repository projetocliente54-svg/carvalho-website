<script lang="ts">
	import { siteConfig } from '#lib/config/site';
	import { faqData } from '#lib/data/faq';

	const title = `${siteConfig.name} | Instalação e Manutenção de Ar-Condicionado`;
	const description = siteConfig.shortDescription;
	const canonicalUrl = siteConfig.url;
	const ogImageUrl = `${siteConfig.url}/images/hero-tech.jpg`;

	// Structured data: HVACBusiness using Schema.org
	const hvacBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'HVACBusiness',
		name: siteConfig.name,
		legalName: siteConfig.legalName,
		description: siteConfig.longDescription,
		url: siteConfig.url,
		telephone: `+${siteConfig.contact.phone}`,
		email: siteConfig.contact.email,
		image: ogImageUrl,
		priceRange: '$$',
		address: {
			'@type': 'PostalAddress',
			addressLocality: siteConfig.city,
			addressRegion: siteConfig.state,
			addressCountry: 'BR'
		},
		areaServed: {
			'@type': 'AdministrativeArea',
			name: siteConfig.region
		},
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '08:00',
				closes: '18:00'
			}
		],
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Serviços de Climatização',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Instalação de Ar-Condicionado Split',
						description:
							'Instalação técnica com vácuo, isolamento térmico e teste de estanqueidade.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Manutenção Preventiva e Higienização',
						description:
							'Higienização profunda, limpeza de bandejas de dreno e verificação de pressões.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Assistência Técnica de Refrigeração',
						description: 'Diagnóstico de falhas, ruídos e correção de vazamento de fluido.'
					}
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Projetos e Infraestrutura de Climatização',
						description:
							'Planejamento de carga térmica e pontos de espera para reformas e novas obras.'
					}
				}
			]
		}
	};

	// Structured data: FAQPage
	const faqPageSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqData.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	};

	const jsonLdHtml =
		`<script type="application/ld+json">${JSON.stringify(hvacBusinessSchema)}</` +
		`script><script type="application/ld+json">${JSON.stringify(faqPageSchema)}</` +
		`script>`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content={siteConfig.name} />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />

	<!-- JSON-LD Structured Data -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html jsonLdHtml}
</svelte:head>
