import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase, user } }) => {
	if (user) {
		const { data: services } = await supabase.from('services').select().eq('id_auth', user.id);
		return { services: services };
	}
	return null;
};

export const actions: Actions = {};
