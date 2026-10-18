export type ServiceType = 'instalacao' | 'manutencao' | 'assistencia' | 'projetos' | '';
export type PropertyType = 'residencial' | 'comercial' | '';

class QuoteModalStore {
	isOpen = $state(false);
	initialService = $state<ServiceType>('');
	initialType = $state<PropertyType>('');

	open(service: ServiceType = '', type: PropertyType = '') {
		this.initialService = service;
		this.initialType = type;
		this.isOpen = true;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	}

	close() {
		this.isOpen = false;
		if (typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	}
}

export const quoteModal = new QuoteModalStore();
