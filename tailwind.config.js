/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
		extend: {},
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography'),],
};
