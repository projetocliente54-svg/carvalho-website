/**
 * Trabalhos realizados e avaliações.
 *
 * Insira aqui SOMENTE material real e verificado da Carvalho Refrigeração.
 * Enquanto as listas estiverem vazias, o site mostra um convite para o Instagram
 * e um espaço de avaliações sem conteúdo fictício.
 */

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

export const reviews: Review[] = [];

export const reviewSummary: ReviewSummary | null = null;

/** Destaques publicados no Instagram oficial (verificados em 20/10/2026). */
export const instagramHighlights = ['Instalação', 'Manutenção', 'Higienização', 'Febrava Rio 26'];
