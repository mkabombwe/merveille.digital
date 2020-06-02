import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(10),
		backgroundColor: theme.palette.primary.main,
	},
	title: {
		fontFamily: 'Circularstd, sans-serif',
		fontSize: 60,
		fontWeight: 700,
		[theme.breakpoints.down('xs')]: {
			fontSize: 50,
		},
	},
	text: {
		fontFamily: "'Circularstd book', sans-serif",
		fontSize: 22,
		fontWeight: 300,
	},
}))

function Hero() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Grid container direction="column">
					<Grid item xs={12} md={6}>
						<h1 className={classes.title}>
							Hey there!
							<br />
							I'm Merveille, I code stuff.
						</h1>
					</Grid>
					<Grid item xs={12} md={6}>
						<p className={classes.text}>
							I love spending time on new creative ideas and working with
							companies and customers with new projects. I can help you with
							developing the app you always wanted, an e-shop to start help you
							grow your shop or a platform for your business needs. But enough
							about me, how can i help you?
						</p>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default Hero
