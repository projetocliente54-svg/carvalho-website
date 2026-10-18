export interface SolutionBlock {
	type: 'residential' | 'commercial';
	eyebrow: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	highlights: string[];
	ctaText: string;
	quoteType: 'residencial' | 'comercial';
}

export const solutionsData: SolutionBlock[] = [
	{
		type: 'residential',
		eyebrow: 'SOLUÇÕES RESIDENCIAIS',
		title: 'Conforto para viver bem em cada ambiente.',
		description:
			'Quartos, salas e espaços integrados pedem soluções que respeitem a rotina da casa. A escolha do equipamento e o planejamento da instalação ajudam a construir um ambiente mais confortável.',
		image: '/images/residential-living.jpg',
		imageAlt: 'Ambiente residencial moderno e iluminado com conforto térmico equilibrado',
		highlights: [
			'Instalação em residências e apartamentos',
			'Avaliação do ambiente e nível de ruído',
			'Manutenção preventiva para saúde da família'
		],
		ctaText: 'Conhecer soluções residenciais',
		quoteType: 'residencial'
	},
	{
		type: 'commercial',
		eyebrow: 'SOLUÇÕES COMERCIAIS & CORPORATIVAS',
		title: 'Climatização alinhada à rotina do seu negócio.',
		description:
			'Escritórios, lojas e ambientes de atendimento exigem atenção ao uso do espaço e às necessidades de operação. Planejamos os serviços para atender às características de cada ambiente.',
		image: '/images/commercial-office.jpg',
		imageAlt: 'Sala de reuniões corporativa com climatização integrada e fluxo de ar contínuo',
		highlights: [
			'Escritórios, consultórios e salas comerciais',
			'Lojas e espaços de atendimento ao público',
			'Manutenção planejada com horários flexíveis'
		],
		ctaText: 'Solicitar avaliação comercial',
		quoteType: 'comercial'
	}
];
