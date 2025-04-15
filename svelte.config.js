import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		alias: {
			$img: 'src/lib/images'
		},
		adapter: adapter()
	}
};

export default config;
