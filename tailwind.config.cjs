const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Barlow', 'sans-serif'],
		},
		fontWeight: {
			light: 200,
			normal: 400,
			bold: 700
		},
		extend: {
			colors: {
				gray: colors.zinc
			}
		}
	},

	plugins: []
};

module.exports = config;