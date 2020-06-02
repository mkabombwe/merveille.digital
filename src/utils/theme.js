import { createMuiTheme } from '@material-ui/core'

export default createMuiTheme({
	palette: {
		primary: {
			main: '#FFF',
		},
		secondary: {
			main: '#53D769',
		},
		tertiary: {
			main: '#FF4E4E',
		},
		quaternary: {
			main: '#FFB01C',
		},
		quinary: {
			main: '#CBD3DB',
		},
		senary: {
			main: '#DBE0E6',
		},
		background: {
			light: '#FFF',
			main: '#F5F5F5',
			dark: '#EEE',
		},
	},
	boxShadow: {
		main: '0 1px 3px rgba(0,0,0,0.12)',
		deep: '0 3px 6px rgba(0,0,0,0.16)',
		deeper: '0 14px 28px rgba(0,0,0,0.25)',
	},
	overrides: {
		MuiCssBaseline: {
		  '@global': {
			body: {
			  color: '#000',
			},
		  },
		},
	  },
})
