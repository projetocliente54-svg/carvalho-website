/**
 * Trabalhos realizados e avaliações.
 *
 * Insira aqui SOMENTE material real e verificado da Carvalho Refrigeração.
 * Enquanto as listas estiverem vazias, o site mostra um convite para o Instagram
 * e um espaço de avaliações sem conteúdo fictício.
 */

import { siteConfig } from '#lib/config/site';

export interface Work {
	/** Arquivo menor (480 px de largura) em /static. */
	src: string;
	/** Versões disponíveis para o navegador escolher (480w e 800w). */
	srcset: string;
	width: number;
	height: number;
	/** Descreve só o que aparece na foto — sem cliente, endereço ou dado não confirmado. */
	alt: string;
}

/**
 * Avaliação copiada da ficha oficial no Google Maps, sem alterar o texto.
 * Atualização manual: o site não consulta o Google automaticamente.
 */
export interface Review {
	/** Nome público exibido no Google. */
	author: string;
	/** Foto pública do perfil salva em /static/img/avaliacoes; `null` mostra as iniciais. */
	avatar: string | null;
	text: string;
	/** Nota de 1 a 5 */
	rating: 1 | 2 | 3 | 4 | 5;
	/**
	 * AAAA, AAAA-MM ou AAAA-MM-DD, quando disponível. O Google só mostra datas relativas
	 * ("7 meses atrás"); nesse caso use apenas o ano, que é o que dá para afirmar com certeza.
	 */
	date: string | null;
	/** Página no Google Maps onde a avaliação pode ser conferida. */
	url: string | null;
}

/** Resumo exibido somente se copiado da ficha oficial no Google. */
export interface ReviewSummary {
	rating: number;
	count: number;
}

/** Fotos de instalações enviadas pela Carvalho (recorte 4:5). */
export const works: Work[] = [
	{
		src: '/img/instalacoes/01-split-janela-verde-480.webp',
		srcset:
			'/img/instalacoes/01-split-janela-verde-480.webp 480w, /img/instalacoes/01-split-janela-verde-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Split instalado no alto da parede, acima de uma janela com vista para a mata'
	},
	{
		src: '/img/instalacoes/02-condensadora-fachada-480.webp',
		srcset:
			'/img/instalacoes/02-condensadora-fachada-480.webp 480w, /img/instalacoes/02-condensadora-fachada-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Condensadora LG fixada em suporte na fachada, ao lado de janelas de madeira'
	},
	{
		src: '/img/instalacoes/03-split-acabamento-480.webp',
		srcset:
			'/img/instalacoes/03-split-acabamento-480.webp 480w, /img/instalacoes/03-split-acabamento-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Split Samsung com a tubulação embutida em canaleta branca até a caixa de ligação'
	},
	{
		src: '/img/instalacoes/04-condensadora-varanda-480.webp',
		srcset:
			'/img/instalacoes/04-condensadora-varanda-480.webp 480w, /img/instalacoes/04-condensadora-varanda-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Condensadora LG instalada sob o forro de madeira da varanda, acima da porta'
	},
	{
		src: '/img/instalacoes/05-split-comercial-480.webp',
		srcset:
			'/img/instalacoes/05-split-comercial-480.webp 480w, /img/instalacoes/05-split-comercial-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Split Electrolux instalado em sala comercial com estantes de aço'
	},
	{
		src: '/img/instalacoes/06-condensadora-externa-480.webp',
		srcset:
			'/img/instalacoes/06-condensadora-externa-480.webp 480w, /img/instalacoes/06-condensadora-externa-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Condensadora em suporte na quina de um prédio, com a tubulação isolada'
	},
	{
		src: '/img/instalacoes/07-split-quarto-480.webp',
		srcset:
			'/img/instalacoes/07-split-quarto-480.webp 480w, /img/instalacoes/07-split-quarto-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Split instalado no canto de um quarto, próximo ao teto'
	},
	{
		src: '/img/instalacoes/08-condensadora-porta-480.webp',
		srcset:
			'/img/instalacoes/08-condensadora-porta-480.webp 480w, /img/instalacoes/08-condensadora-porta-800.webp 800w',
		width: 800,
		height: 1000,
		alt: 'Condensadora Hitachi instalada em suportes acima de uma porta de vidro'
	}
];

/** Aba "Avaliações" da ficha oficial — o Maps não expõe um link fixo para cada avaliação. */
const googleReviews = siteConfig.social.googleMaps;

/**
 * 5 de 23 avaliações da ficha oficial (todas 5 estrelas), copiadas em 21/10/2026.
 * Todas apareciam como "7 meses atrás". Fotos: perfis públicos do Google, 96 px.
 */
export const reviews: Review[] = [
	{
		author: 'Victor Caetano',
		avatar: '/img/avaliacoes/victor-caetano.webp',
		text: 'Excelente profissional! Tenho uma instalação feita pela Carvalho Refrigeração a 4 anos e até hoje não tive problemas nenhum. Mantenho a higienização conforme recomendada por ele e meu ar está sempre em ótimo estado de funcionamento! ❄️❄️',
		rating: 5,
		date: '2026',
		url: googleReviews
	},
	{
		author: 'Manassés Dantas',
		avatar: '/img/avaliacoes/manasses-dantas.webp',
		text: 'Empresa extremamente profissional e comprometida com a qualidade dos serviços prestados. A instalação e manutenção de ar-condicionado foram realizadas com excelência e atenção aos detalhes. A equipe demonstrou conhecimento técnico, organização e transparência em todas as etapas do atendimento. Recomendo fortemente para quem busca um serviço confiável e de alto padrão.',
		rating: 5,
		date: '2026',
		url: googleReviews
	},
	{
		author: 'Isabelle Ramiro',
		avatar: '/img/avaliacoes/isabelle-ramiro.webp',
		text: 'Excelente atendimento, profissionais que realmente entendem do assunto e soluções que deixam qualquer ambiente bem mais confortável. Seja pra instalar, fazer manutenção ou limpeza, dá pra ver que tudo é feito com muito cuidado e responsabilidade.',
		rating: 5,
		date: '2026',
		url: googleReviews
	},
	{
		author: 'Lucas Nascimento',
		avatar: '/img/avaliacoes/lucas-nascimento.webp',
		text: 'Profissional de primeira! fez a instalação de um Ar condicionado 9.000 Btus na minha casa e ficou excelente! Recomendo sempre',
		rating: 5,
		date: '2026',
		url: googleReviews
	},
	{
		author: 'Marcela Belchior',
		avatar: '/img/avaliacoes/marcela-belchior.webp',
		text: 'Empresa excelente! Atendimento excepcional e um serviço feito com muita maestria e com uma qualidade sem igual. Indico de olhos fechados.',
		rating: 5,
		date: '2026',
		url: googleReviews
	}
];

/** Ficha oficial no Google em 21/10/2026. */
export const reviewSummary: ReviewSummary | null = { rating: 5, count: 23 };

/** Destaques publicados no Instagram oficial (verificados em 20/10/2026). */
export const instagramHighlights = ['Instalação', 'Manutenção', 'Higienização', 'Febrava Rio 26'];
