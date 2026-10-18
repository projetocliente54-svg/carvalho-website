export interface DifferentialItem {
	number: string;
	title: string;
	description: string;
}

export const differentialsData: DifferentialItem[] = [
	{
		number: '01',
		title: 'Avaliação antes da execução',
		description:
			'Análise cuidadosa das condições do local, da fiação elétrica e das rotas de tubulação antes de iniciar qualquer trabalho.'
	},
	{
		number: '02',
		title: 'Indicação de soluções adequadas',
		description:
			'Orientação técnica para selecionar a capacidade térmica e o modelo condizentes com a rotina e dimensões do espaço.'
	},
	{
		number: '03',
		title: 'Atenção à infraestrutura',
		description:
			'Uso de materiais apropriados, inclinação correta do dreno para evitar goteiras e isolamento térmico sem falhas.'
	},
	{
		number: '04',
		title: 'Organização durante o serviço',
		description:
			'Respeito ao patrimônio do cliente, proteção de pisos e móveis, e limpeza do espaço ao término de cada intervenção.'
	},
	{
		number: '05',
		title: 'Comunicação clara sobre o orçamento',
		description:
			'Discriminação transparente de todos os itens, sem termos técnicos confusos nem cobranças ocultas posteriores.'
	},
	{
		number: '06',
		title: 'Orientações após a instalação',
		description:
			'Instruções práticas sobre o manuseio das funções do controle, intervalos de limpeza dos filtros e economia de energia.'
	}
];
