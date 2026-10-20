/**
 * Trabalhos realizados e avaliações.
 *
 * Insira aqui SOMENTE material real e verificado da Carvalho Refrigeração.
 * Enquanto as listas estiverem vazias, o site mostra um convite para o Instagram
 * e um espaço de avaliações sem conteúdo fictício.
 */

export interface Work {
	/** Caminho em /static, ex.: '/img/trabalhos/instalacao-centro.webp' */
	src: string;
	width: number;
	height: number;
	alt: string;
	/** Legenda curta, ex.: 'Instalação de split em apartamento' */
	caption: string;
}

/** Copie as avaliações do perfil oficial no Google Maps sem alterar o texto. */
export interface Review {
	author: string;
	text: string;
	/** Nota de 1 a 5 */
	rating: 1 | 2 | 3 | 4 | 5;
	/** ISO (AAAA-MM-DD), quando disponível */
	date: string | null;
	url: string | null;
}

/** Resumo exibido somente se copiado da ficha oficial no Google. */
export interface ReviewSummary {
	rating: number;
	count: number;
}

export const works: Work[] = [];

export const reviews: Review[] = [];

export const reviewSummary: ReviewSummary | null = null;

/** Destaques publicados no Instagram oficial (verificados em 20/10/2026). */
export const instagramHighlights = ['Instalação', 'Manutenção', 'Higienização', 'Febrava Rio 26'];
