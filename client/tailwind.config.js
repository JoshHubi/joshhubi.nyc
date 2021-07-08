module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './static/index.html'],
	darkMode: false,
	theme: {
		fontFamily: {
			'sans': 'Karla, sans-serif',
			'crimson': 'Crimson Text, sans-serif'
		},
		extend: {
			colors: {
				'dark': '#161616',
				'purple': '#3d5afe'
			}
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
