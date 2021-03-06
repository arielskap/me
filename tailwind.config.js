const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
		`./**/*.tsx`,
	],
  darkMode: false, // or 'media' or 'class'
  theme: {
		colors: {
			primary: '#09173C',
			secondary: '#0d0439',
			transparent: 'transparent',
      current: 'currentColor',
      ...colors
		},
    extend: {
      animation: {
				slideOutUp: `slideOutUp .50s ease-in-out`,
				slideInDown: `slideInDown .75s ease-in-out`,
			},
      keyframes: {
        slideOutUp: {
					from: {
						opacity: 1,
						transform: `translate3d(0, 0, 0)`,
					},
					to: {
						opacity: 0,
						visibility: `hidden`,
						transform: `translate3d(0, -100%, 0)`
					}
				},
				slideInDown: {
					from: {
						transform: `translate3d(0, -100%, 0)`,
						visibility: `visible`
					},
					to: {
						transform: `translate3d(0, 0, 0)`
					}
				},
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
