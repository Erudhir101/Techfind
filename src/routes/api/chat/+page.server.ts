import type { Actions } from './$types';

interface FormData {
	segment: string;
	product: string;
	'contract-regime': 'freelancer' | 'clt' | 'pj';
	'work-regime': 'hibrido' | 'remoto' | 'presencial';
	'start-date': string;
	'client-message': string;
}

export const load = () => {
	return {};
};

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		return {
			segment: form.get('segment') as string,
			product: form.get('product') as string,
			contract_regime: form.get('contract-regime') as string,
			work_regime: form.get('work-regime') as string,
			start_date: form.get('start-date') as string,
			client_message: form.get('client-message') as string,
			resposta: `
características:
valor da hora: 5/10
disponibilidade: 7/10
segmentação de negócio: 7/10
tipo de produto/serviço: 6/10
regime de contratação: 6/10
regime de trabalho: 7/10
prazo de início: 6/10
tags:
node: 7/10
python: 8/10
java: 7/10
react: 7/10
javascript: 8/10
typescript: 7/10
backend: 8/10
fullstack: 7/10
engenheiro de software: 7/10
`
		};
	}
} satisfies Actions;
// FormData {
//   segment: 'asdfasdfasd',
//   product: 'asdfasdfasd',
//   'contract-regime': 'freelancer',
//   'work-regime': 'hibrido',
//   'start-date': '2024-11-28',
//   'client-message': 'asdffasdfasdf'
// }
