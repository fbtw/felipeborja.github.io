const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/pages/**/*.tsx',
		'./src/components/**/*.tsx',
		'./src/utils/**/*.tsx',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'blue-start': '#1d5c96',
				'blue-stop': '#12395d',

				'purple-start': '#f2bc94',
				'purple-middle': '#7db0de',
				'purple-stop': '#7db0de',

				'off-black': '#0e387a',
				'off-white': '#9facfa',

				'Sapphire Blue':'#0e387a',
				'Blue Gray':'#9facfa',

				'Deep Forest Green':'#0f4d19' ,
				'Dark Sea Green': '#6fc27c',

				'Beige': '#f2bc94',
				'Navy': '#00154f',
				'Yellow': '#f4af1b',

				'Light Blue':'#7db0de',
				'Medium Blue':'#1d5c96',
				'Dark Blue':'#12395d',

grey: {
					0: '#FFFFFF',
					100: '#FCFCFC',
					200: '#F7F7FC',
					300: '#EFF0F7',
					400: '#D9DBE9',
					500: '#A0A3BD',
					600: '#6E7191',
					700: '#4E4B66',
					800: '#262338',
					900: '#14142B',
				},
			},
			fontFamily: {
				sans: ["'Basier Circle'", ...fontFamily.sans],
			},
			listStyleType: {
				disc: 'disc',
				decimal: 'decimal',
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.grey.900'),
						a: {
							color: theme('colors.grey.900'),
							'&:hover': {
								color: theme('colors.grey.700'),
							},
							code: { color: theme('colors.blue.400') },
						},
						'h2,h3,h4': {
							'scroll-margin-top': spacing[32],
						},
						thead: {
							borderBottomColor: theme('colors.grey.200'),
						},
						code: { color: theme('colors.pink.500') },
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false,
					},
				},
				dark: {
					css: {
						color: theme('colors.grey.200'),
						a: {
							color: theme('colors.blue.400'),
							'&:hover': {
								color: theme('colors.blue.600'),
							},
							code: { color: theme('colors.blue.400') },
						},
						blockquote: {
							borderLeftColor: theme('colors.grey.700'),
							color: theme('colors.grey.300'),
						},
						'h2,h3,h4': {
							color: theme('colors.grey.100'),
							'scroll-margin-top': spacing[32],
						},
						hr: { borderColor: theme('colors.grey.700') },
						ol: {
							li: {
								'&:before': { color: theme('colors.grey.500') },
							},
						},
						ul: {
							li: {
								'&:before': { backgroundColor: theme('colors.grey.500') },
							},
						},
						strong: { color: theme('colors.grey.100') },
						thead: {
							color: theme('colors.grey.100'),
							borderBottomColor: theme('colors.grey.600'),
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.grey.700'),
							},
						},
					},
				},
			}),
		},
	},
	variants: {
		typography: ['dark'],
	},
	plugins: [require('@tailwindcss/typography')],
};
