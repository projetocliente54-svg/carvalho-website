import type { WhatsAppIntent } from '#lib/config/site';

export interface Service {
	id: string;
	title: string;
	description: string;
	cta: string;
	intent: WhatsAppIntent;
}

export const services: Service[] = [
	{
		id: 'instalacao',
		title: 'Instalação',
		description:
			'Instalação de ar-condicionado com atenção ao posicionamento, à infraestrutura e ao acabamento.',
		cta: 'Quero orçamento para instalação',
		intent: 'instalacao'
	},
	{
		id: 'manutencao',
		title: 'Manutenção',
		description:
			'Avaliação do funcionamento do aparelho e identificação do que precisa de cuidado.',
		cta: 'Quero orçamento para manutenção',
		intent: 'manutencao'
	},
	{
		id: 'higienizacao',
		title: 'Higienização',
		description:
			'Limpeza do aparelho para contribuir com o bom funcionamento e a qualidade do ar no ambiente.',
		cta: 'Quero orçamento para higienização',
		intent: 'higienizacao'
	},
	{
		id: 'assistencia',
		title: 'Assistência técnica',
		description: 'Avaliação de falhas de funcionamento, ruídos, vazamentos e perda de desempenho.',
		cta: 'Relatar um problema no aparelho',
		intent: 'assistencia'
	}
];

export interface Faq {
	question: string;
	answer: string;
}

export const faqs: Faq[] = [
	{
		question: 'A Carvalho Refrigeração vende ar-condicionado?',
		answer:
			'Sim. Além dos serviços, a Carvalho vende aparelhos de ar-condicionado em Paraty. Consulte pelo WhatsApp os modelos disponíveis e receba orientação para escolher o equipamento adequado ao ambiente.'
	},
	{
		question: 'Quais serviços de ar-condicionado a Carvalho faz?',
		answer: 'Instalação, manutenção, higienização e assistência técnica de ar-condicionado.'
	},
	{
		question: 'Como peço um orçamento?',
		answer:
			'Pelo WhatsApp (24) 99279-1630. Conte qual serviço você precisa, o tipo de aparelho e o bairro — com essas informações a Carvalho orienta o próximo passo.'
	},
	{
		question: 'Onde a Carvalho atende?',
		answer:
			'A Carvalho Refrigeração é de Paraty, RJ. Se você está em outra localidade, pergunte pelo WhatsApp se o atendimento é possível.'
	}
];
