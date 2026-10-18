export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export const faqData: FAQItem[] = [
	{
		id: 'faq-1',
		question: 'Como saber qual ar-condicionado é adequado para meu ambiente?',
		answer:
			'A escolha depende do cálculo de carga térmica, que leva em consideração a metragem quadrada do espaço, a incidência de sol (manhã ou tarde), a quantidade média de pessoas presentes, o número de aparelhos eletrônicos ligados e o tipo de iluminação. Uma avaliação técnica prévia evita a compra de um equipamento com potência insuficiente (que trabalhará forçado sem resfriar direito) ou superdimensionado (que consome energia em excesso sem controlar bem a umidade).'
	},
	{
		id: 'faq-2',
		question: 'O que deve ser avaliado antes da instalação?',
		answer:
			'Antes da instalação, é fundamental verificar a capacidade do circuito elétrico e a presença de disjuntor compatível, a viabilidade de passagem e caimento da tubulação de dreno (para evitar refluxo de água), a distância e desnível entre a unidade interna (evaporadora) e a externa (condensadora), além da estrutura da parede para sustentação e facilidade de acesso para futuras manutenções.'
	},
	{
		id: 'faq-3',
		question: 'Com que frequência devo fazer a manutenção preventiva?',
		answer:
			'Para ambientes residenciais com uso moderado, a higienização dos filtros deve ser feita pelo próprio morador quinzenalmente ou mensalmente, e uma manutenção técnica preventiva completa é recomendada a cada 6 a 12 meses. Em ambientes comerciais ou com alta circulação, o intervalo técnico costuma ser menor (trimestral ou semestral), conforme a intensidade de uso e as exigências sanitárias locais.'
	},
	{
		id: 'faq-4',
		question: 'A instalação pode ser feita em qualquer parede?',
		answer:
			'Nem toda parede é indicada. É necessário que a parede suporte o peso e as vibrações do aparelho, não tenha passagem de tubulações hidráulicas ou vigas estruturais onde será feita a furação, e permita a saída do dreno com inclinação mínima descendente. Além disso, a unidade evaporadora não deve ficar bloqueada por móveis altos ou cortinas, permitindo a circulação livre do ar.'
	},
	{
		id: 'faq-5',
		question: 'Quando é necessário solicitar assistência técnica?',
		answer:
			'Você deve chamar um técnico especializado quando notar que o aparelho demora excessivamente para resfriar, apresenta gotejamento de água na parte interna, emite ruídos estranhos de vibração ou estalos, exala odores fortes ao ser ligado, ou quando o visor exibir códigos de erro piscando. Continuar usando o aparelho com falhas pode danificar peças críticas, como o compressor.'
	},
	{
		id: 'faq-6',
		question: 'A Aura atende residências e empresas?',
		answer:
			'Sim. Oferecemos soluções planejadas tanto para casas, coberturas e apartamentos residenciais quanto para escritórios, consultórios, lojas e espaços comerciais de pequeno a médio porte, adaptando os horários e o plano de execução às necessidades de cada rotina.'
	},
	{
		id: 'faq-7',
		question: 'Como solicitar um orçamento?',
		answer:
			'Você pode clicar no botão "Solicitar orçamento" aqui no site para preencher as informações básicas do seu espaço, ou entrar em contato direto pelo nosso canal no WhatsApp. Entendemos a sua demanda e orientamos os próximos passos de forma ágil e transparente.'
	},
	{
		id: 'faq-8',
		question: 'O que devo informar ao pedir uma avaliação?',
		answer:
			'Para agilizar seu atendimento, é útil informar o tipo de imóvel (casa, apartamento ou sala comercial), a metragem aproximada do cômodo, se o local já possui tubulação embutida pré-existente ou se será uma instalação do zero, e se você já possui o equipamento ou precisa de recomendação para compra.'
	}
];
