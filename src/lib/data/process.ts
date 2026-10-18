export interface ProcessStep {
	step: string;
	title: string;
	shortDescription: string;
	detail: string;
}

export const processSteps: ProcessStep[] = [
	{
		step: '01',
		title: 'Entendimento da necessidade',
		shortDescription:
			'Conversamos sobre o ambiente, o uso do espaço e o que você precisa resolver.',
		detail: 'Ouvimos suas prioridades de conforto, metragem aproximada e características do imóvel.'
	},
	{
		step: '02',
		title: 'Avaliação',
		shortDescription: 'Identificamos as condições relevantes para orientar a solução.',
		detail:
			'Analisamos insolação, pontos elétricos disponíveis, rota do dreno e posicionamento ideal da condensadora.'
	},
	{
		step: '03',
		title: 'Proposta',
		shortDescription: 'Apresentamos os serviços recomendados e as condições do orçamento.',
		detail:
			'Escopo detalhado com materiais especificados, prazos acordados e total transparência comercial.'
	},
	{
		step: '04',
		title: 'Execução',
		shortDescription:
			'Realizamos o serviço acordado com atenção aos detalhes e à organização do ambiente.',
		detail:
			'Instalação com proteção do piso e mobiliário, aspiração de poeira e procedimentos técnicos rigorosos.'
	},
	{
		step: '05',
		title: 'Orientação final',
		shortDescription:
			'Explicamos os cuidados necessários e as recomendações para o uso do sistema.',
		detail:
			'Entrega com testes operacionais na sua presença, orientações de uso eficiente e cronograma de cuidados.'
	}
];
