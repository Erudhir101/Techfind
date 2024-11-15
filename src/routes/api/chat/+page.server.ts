import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		// console.log(form);
		return form;
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
