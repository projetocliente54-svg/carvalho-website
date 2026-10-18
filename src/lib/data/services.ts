export interface ServiceItem {
	id: string;
	number: string;
	title: string;
	shortDescription: string;
	fullDescription: string;
	highlights: string[];
	bestFor: string;
	icon: 'installation' | 'maintenance' | 'support' | 'project';
}

export const servicesData: ServiceItem[] = [
	{
		id: 'instalacao',
		number: '01',
		title: 'Instalação de ar-condicionado',
		shortDescription:
			'Instalação planejada, com atenção ao posicionamento do equipamento, à infraestrutura e ao acabamento.',
		fullDescription:
			'Execução técnica em conformidade com as recomendações dos fabricantes, utilizando bomba de vácuo, isolamento térmico de qualidade superior e teste rigoroso de estanqueidade para garantir eficiência máxima e longa vida útil ao sistema.',
		highlights: [
			'Dimensionamento adequado da carga térmica',
			'Passagem e isolamento da tubulação frigorígena',
			'Vácuo na linha e teste de estanqueidade',
			'Acabamento limpo e proteção do ambiente'
		],
		bestFor: 'Novos ambientes residenciais, apartamentos, casas e salas comerciais.',
		icon: 'installation'
	},
	{
		id: 'manutencao',
		number: '02',
		title: 'Manutenção preventiva',
		shortDescription:
			'Cuidados periódicos para acompanhar o funcionamento do sistema, preservar o desempenho e identificar possíveis necessidades.',
		fullDescription:
			'Higienização técnica completa das serpentinas, filtros e bandejas de dreno, além de checagem elétrica, medição de pressão do fluido refrigerante e inspeção de consumo energético.',
		highlights: [
			'Limpeza profunda e desinfecção com produtos neutros',
			'Inspeção e desobstrução da linha de dreno',
			'Verificação de pressões e conexões elétricas',
			'Prevenção de odores, ácaros e fungos no ar'
		],
		bestFor: 'Equipamentos em uso contínuo residencial ou comercial.',
		icon: 'maintenance'
	},
	{
		id: 'assistencia',
		number: '03',
		title: 'Assistência técnica',
		shortDescription:
			'Avaliação técnica para investigar falhas, ruídos, perda de rendimento e outros problemas de funcionamento.',
		fullDescription:
			'Diagnóstico criterioso para identificar a causa raiz de anomalias: desde vazamentos de fluido até falhas em placas eletrônicas, sensores e motores ventiladores.',
		highlights: [
			'Diagnóstico técnico presencial com instrumental adequado',
			'Localização precisa de vazamentos e teste de pressão',
			'Substituição de componentes e recarga responsável',
			'Relatório claro sobre o estado real do aparelho'
		],
		bestFor: 'Aparelhos com baixo rendimento, ruídos anormais ou mensagens de erro.',
		icon: 'support'
	},
	{
		id: 'projetos',
		number: '04',
		title: 'Projetos de climatização',
		shortDescription:
			'Planejamento de soluções considerando as características do ambiente, o uso do espaço e as necessidades do cliente.',
		fullDescription:
			'Estudo integrado com projetos de arquitetura e reformas: definição de pontos de espera, rotas de dreno por gravidade, posicionamento de condensadoras em áreas técnicas e compatibilização elétrica.',
		highlights: [
			'Integração direta com arquitetura e design de interiores',
			'Dimensionamento térmico por ambiente e insolação',
			'Definição estratégica de pontos de dreno e força',
			'Compatibilização visual sem comprometer a ventilação'
		],
		bestFor: 'Reformas, construções novas e readequação de espaços corporativos.',
		icon: 'project'
	}
];
