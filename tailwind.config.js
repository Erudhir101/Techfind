/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				principal: {
					1: '#f1f1f1',
					2: '#ffe8b4',
					3: '#ffc145',
					4: '#ff9500',
					5: '#ff6800',
					6: '#d96318'
				},
				zinc: {
					10: '#f1f1f1'
				}
			}
		}
	},
	plugins: []
};
