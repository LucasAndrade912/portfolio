/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#B443DA',
                secondary: '#FFC751',
                overlay: 'rgba(0, 0, 0, .7)',
            },
            fontFamily: {
                lato: ['Lato', 'serif'],
                oswald: ['Oswald', 'serif'],
            },
            padding: {
                22: '5.5rem',
            },
        },
    },
    plugins: [],
}
