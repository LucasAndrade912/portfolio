/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#B443DA',
				secondary: '#FFC751',
			},
			fontFamily: {
				lato: ['Lato', 'serif'],
				oswald: ['Oswald', 'serif'],
			},
		},
	},
	plugins: [],
}
