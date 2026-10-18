export interface ProjectItem {
	id: string;
	title: string;
	category: string;
	subtitle: string;
	description: string;
	image: string;
	imageAlt: string;
	specs: string[];
}

export const projectsData: ProjectItem[] = [
	{
		id: 'projeto-residencial',
		title: 'Instalação residencial em sala de estar',
		category: 'Exemplo Demonstrativo — Residencial',
		subtitle: 'Integração estética e conforto acústico para área de convivência',
		description:
			'Estudo demonstrativo de climatização para sala de estar integrada à varanda. O posicionamento do equipamento priorizou o fluxo de ar uniforme, preservando o alinhamento arquitetônico da marcenaria e garantindo operação silenciosa para descanso.',
		image: '/images/project-residential.jpg',
		imageAlt: 'Fotografia demonstrativa de sala de estar moderna com climatização suave',
		specs: [
			'Posicionamento centralizado sem vento direto nos sofás',
			'Dreno direcionado para área de serviço por gravidade',
			'Isolamento acústico na fixação do suporte'
		]
	},
	{
		id: 'projeto-corporativo',
		title: 'Climatização de ambiente corporativo',
		category: 'Exemplo Demonstrativo — Comercial',
		subtitle: 'Estabilidade térmica e renovação de ar para escritório',
		description:
			'Configuração demonstrativa para sala de reuniões e espaço colaborativo de trabalho. Foco no equilíbrio de temperatura para múltiplos ocupantes e equipamentos eletrônicos em funcionamento simultâneo.',
		image: '/images/project-commercial.jpg',
		imageAlt: 'Ambiente de trabalho corporativo iluminado e com temperatura climatizada',
		specs: [
			'Dimensionamento calculado com margem para equipamentos',
			'Controle de fluxo de ar direcionável',
			'Plano de higienização periódica recomendado'
		]
	},
	{
		id: 'projeto-infraestrutura',
		title: 'Instalação e infraestrutura de sistema de climatização',
		category: 'Exemplo Demonstrativo — Infraestrutura Técnica',
		subtitle: 'Preparação embutida com testes rigorosos de pressão e estanqueidade',
		description:
			'Demonstração de infraestrutura embutida durante reforma civil: passagem de linha frigorígena em cobre, cabeamento blindado e tubo de dreno rígido com isolamento térmico integral para prevenir condensação em forros de gesso.',
		image: '/images/project-infrastructure.jpg',
		imageAlt: 'Infraestrutura técnica de climatização com tubulações organizadas e protegidas',
		specs: [
			'Tubulação de cobre com isolamento térmico elastomérico',
			'Teste de estanqueidade com nitrogênio sob pressão',
			'Caixa de passagem embutida com saída nivelada'
		]
	}
];
