/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '2px',
				sm: '2px',
				lg: '1px',
				xl: '2px',
				'2xl': '2px',
			},
		},

		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				raleway: ['Raleway', 'sans-serif'],
				Jost:['Jost','sans-serif']
			},
			colors: {
				'light-gray': '#afb4bf',
				'dark-blue': '#0E2737',
				primary: '#216AC4',
				secondary: '#616976',
				success: '#1DC3B2',
				warning: '#F76705',
				danger: '#D53839',
			},
		},
		screens: {
				xs: { max: "425px" },
			  },
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require("daisyui"),
	],
};
