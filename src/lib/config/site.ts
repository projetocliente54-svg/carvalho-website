/**
 * Configuração central da Carvalho Refrigeração.
 *
 * Todos os dados comerciais, links e textos de SEO saem daqui.
 * Campos marcados com `PENDENTE` ainda não foram confirmados em fonte oficial
 * e ficam fora do site (e dos dados estruturados) enquanto estiverem `null`.
 *
 * Fontes verificadas em 20/10/2026:
 * - Instagram oficial @carvalho_refrigeracao__ (bio: técnico de ar-condicionado,
 *   vendas de ar-condicionado, instalação, manutenção, higienização, Paraty-RJ).
 * - O link de WhatsApp da bio (wa.me/message/U7IY66VZUAOPD1) aponta para
 *   +55 24 99279-1630 — o mesmo número da ficha pública da empresa.
 */

export interface PostalAddress {
	streetAddress: string;
	neighborhood: string;
	city: string;
	region: string;
	postalCode: string | null;
}

export interface NavItem {
	label: string;
	href: `#${string}`;
}

export type WhatsAppIntent =
	| 'orcamento'
	| 'instalacao'
	| 'manutencao'
	| 'higienizacao'
	| 'assistencia'
	| 'manutencaoHigienizacao'
	| 'equipamentos'
	| 'marcas'
	| 'ajudaEscolher'
	| 'duvidas'
	| 'avaliacao';

export interface SiteConfig {
	name: string;
	city: string;
	region: string;
	regionCode: string;
	/**
	 * URL pública definitiva, sem barra final (ex.: 'https://www.carvalhorefrigeracao.com.br').
	 * PENDENTE: enquanto for `null`, canonical, sitemap e robots usam a origem da requisição.
	 */
	url: string | null;
	contact: {
		/** Somente dígitos, com DDI e DDD. */
		whatsapp: string;
		phoneDisplay: string;
		/** PENDENTE: endereço só aparece em diretório de terceiros (Av. Roberto Silveira, 843 — Centro). */
		address: PostalAddress | null;
		/** PENDENTE: horário de atendimento não divulgado no perfil oficial. */
		openingHours: string | null;
	};
	social: {
		instagram: string;
		instagramHandle: string;
		/** PENDENTE: URL do perfil oficial no Google Maps. */
		googleMaps: string | null;
		/** PENDENTE: link "Escrever avaliação" do Perfil da Empresa no Google. */
		googleReview: string | null;
	};
	brand: {
		/** Substitua pelo arquivo original em alta resolução quando disponível. */
		logo: string;
		logoSize: number;
	};
	seo: {
		title: string;
		description: string;
		ogImage: string;
		ogImageAlt: string;
		themeColor: string;
	};
	navigation: NavItem[];
	whatsappMessages: Record<WhatsAppIntent, string>;
}

const fromSite = 'Olá! Vim pelo site da Carvalho Refrigeração';

export const siteConfig: SiteConfig = {
	name: 'Carvalho Refrigeração',
	city: 'Paraty',
	region: 'Rio de Janeiro',
	regionCode: 'RJ',
	url: null,
	contact: {
		whatsapp: '5524992791630',
		phoneDisplay: '(24) 99279-1630',
		address: null,
		openingHours: null
	},
	social: {
		instagram: 'https://www.instagram.com/carvalho_refrigeracao__/',
		instagramHandle: '@carvalho_refrigeracao__',
		googleMaps: null,
		googleReview: null
	},
	brand: {
		logo: '/brand/carvalho-logo.webp',
		logoSize: 100
	},
	seo: {
		title: 'Carvalho Refrigeração | Ar-Condicionado em Paraty, RJ',
		description:
			'Instalação, manutenção, higienização e venda de ar-condicionado em Paraty, RJ. Fale com a Carvalho Refrigeração pelo WhatsApp e consulte serviços e aparelhos disponíveis.',
		ogImage: '/og-carvalho.jpg',
		ogImageAlt:
			'Carvalho Refrigeração — ar-condicionado em Paraty, RJ, com foto de split instalado',
		themeColor: '#080A0D'
	},
	navigation: [
		{ label: 'Início', href: '#inicio' },
		{ label: 'Serviços', href: '#servicos' },
		{ label: 'Equipamentos', href: '#equipamentos' },
		{ label: 'Instalações', href: '#trabalhos' },
		{ label: 'Contato', href: '#contato' }
	],
	whatsappMessages: {
		orcamento: `${fromSite} e gostaria de solicitar um orçamento.`,
		instalacao: `${fromSite} e quero orçamento para instalação de ar-condicionado.`,
		manutencao: `${fromSite} e quero orçamento para manutenção de ar-condicionado.`,
		higienizacao: `${fromSite} e quero orçamento para higienização de ar-condicionado.`,
		assistencia: `${fromSite}. Meu ar-condicionado está com problema e preciso de assistência técnica.`,
		manutencaoHigienizacao: `${fromSite} e preciso de manutenção ou higienização do meu ar-condicionado.`,
		equipamentos:
			'Olá! Conheci o site da Carvalho Refrigeração e gostaria de consultar os modelos de ar-condicionado disponíveis para compra. Podem me ajudar?',
		marcas: `${fromSite} e quero consultar os modelos de ar-condicionado Midea e Aufit e a disponibilidade.`,
		ajudaEscolher: [
			`${fromSite} e quero ajuda para escolher um ar-condicionado.`,
			'',
			'Ambiente (quarto, sala, loja...):',
			'Tamanho aproximado (m²):',
			'Recebe sol da tarde?',
			'Já tem ponto de instalação?'
		].join('\n'),
		duvidas: `${fromSite} e tenho uma dúvida.`,
		avaliacao: `${fromSite}. Já fui atendido(a) e gostaria de deixar um comentário sobre o serviço.`
	}
};

/** Link wa.me com a mensagem codificada; o visitante revisa o texto antes de enviar. */
export function whatsappUrl(intent: WhatsAppIntent = 'orcamento'): string {
	const text = encodeURIComponent(siteConfig.whatsappMessages[intent]);
	return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}

/** URL base usada em canonical, Open Graph, sitemap e robots. */
export function siteOrigin(requestOrigin: string): string {
	return (siteConfig.url ?? requestOrigin).replace(/\/$/, '');
}
