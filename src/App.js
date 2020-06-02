import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
// Pages
import Home from './pages/home'
// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
// Utils
import './App.scss'
import theme from './utils/theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<CssBaseline />
				<Navigation />
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	)
}

export default App
