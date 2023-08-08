import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				circularstd: ['CircularStd', ...fontFamily.sans],
				'circularstd-book': ['Circularstd book', ...fontFamily.sans]
			}
		}
	},
	plugins: []
} satisfies Config
