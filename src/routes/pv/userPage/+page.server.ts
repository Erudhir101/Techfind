import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, url }) => {
	const user = url.searchParams.get('user');
	const { data: usuario } = await supabase.from('profile').select().eq('id', user).single();
	return { usuario: usuario };
};
