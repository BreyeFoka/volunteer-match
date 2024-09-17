// tailwind.config.js
module.exports = {
	content: [
	  './app/**/*.{js,ts,jsx,tsx}',
	  './pages/**/*.{js,ts,jsx,tsx}',
	  './components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#0070f3',
		  secondary: '#ff4081',
		  accent: '#4caf50',
		  background: '#f4f4f4',
		  textPrimary: '#333333',
		  textSecondary: '#777777',
		},
		fontFamily: {
		  sans: ['Inter', 'sans-serif'], // Primary font
		  serif: ['Playfair Display', 'serif'], // Headers
		  poppins: ['Poppins', 'sans-serif'], // Poppins for more general use
		},
	  },
	},
	plugins: [],
  };
  