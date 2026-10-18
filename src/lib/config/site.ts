export interface SiteConfig {
	name: string;
	legalName: string;
	tagline: string;
	shortDescription: string;
	longDescription: string;
	url: string;
	domain: string;
	locale: string;
	city: string;
	state: string;
	region: string;
	contact: {
		phone: string;
		phoneFormatted: string;
		whatsapp: string;
		whatsappFormatted: string;
		whatsappMessage: string;
		email: string;
		scheduleHours: string;
		businessDays: string;
	};
	navigation: Array<{
		name: string;
		href: string;
	}>;
	servicesNav: Array<{
		name: string;
		href: string;
		id: string;
	}>;
	social: {
		instagram?: string;
		linkedin?: string;
	};
}

export const siteConfig: SiteConfig = {
	name: 'AURA CLIMATIZAÇÃO',
	legalName: 'Aura Climatização & Engenharia Térmica',
	tagline: 'Conforto térmico com precisão técnica e acabamento arquitetônico',
	shortDescription:
		'Instalação planejada, manutenção preventiva e assistência técnica de ar-condicionado para residências e empresas.',
	longDescription:
		'Projetamos, instalamos e cuidamos de sistemas de climatização para ambientes residenciais e comerciais com rigor técnico, organização e respeito à rotina do cliente.',
	url: 'https://auraclimatizacao.com.br',
	domain: 'auraclimatizacao.com.br',
	locale: 'pt-BR',
	city: 'São Paulo',
	state: 'SP',
	region: 'Região Metropolitana e Cidades Vizinhas',
	contact: {
		phone: '5511999990000',
		phoneFormatted: '(11) 99999-0000',
		whatsapp: '5511999990000',
		whatsappFormatted: '(11) 99999-0000',
		whatsappMessage:
			'Olá! Gostaria de solicitar um orçamento para climatização com a Aura Climatização.',
		email: 'contato@auraclimatizacao.com.br',
		scheduleHours: '08:00 às 18:00',
		businessDays: 'Segunda a sexta-feira'
	},
	navigation: [
		{ name: 'Início', href: '#inicio' },
		{ name: 'Serviços', href: '#servicos' },
		{ name: 'Soluções', href: '#solucoes' },
		{ name: 'Processo', href: '#processo' },
		{ name: 'Projetos', href: '#projetos' },
		{ name: 'Dúvidas', href: '#faq' },
		{ name: 'Contato', href: '#contato' }
	],
	servicesNav: [
		{ name: 'Instalação de Ar-Condicionado', href: '#servicos', id: 'instalacao' },
		{ name: 'Manutenção Preventiva', href: '#servicos', id: 'manutencao' },
		{ name: 'Assistência Técnica', href: '#servicos', id: 'assistencia' },
		{ name: 'Projetos de Climatização', href: '#servicos', id: 'projetos' }
	],
	social: {
		instagram: 'https://instagram.com',
		linkedin: 'https://linkedin.com'
	}
};

export function getWhatsAppUrl(customMessage?: string): string {
	const message = encodeURIComponent(customMessage || siteConfig.contact.whatsappMessage);
	return `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`;
}
