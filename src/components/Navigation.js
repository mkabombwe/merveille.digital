import React from 'react'
import { AppBar, Toolbar, makeStyles, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	root: {
		boxShadow: 'none',
		fontFamily: "'Circularstd book', sans-serif",
	},
	logo: {
		fontFamily: "'Circularstd book', sans-serif",
		fontWeight: 900,
		textDecoration: 'none',
		color: '#000',
		fontSize: '2em',
		userSelect: 'none',
	},
	link: {
		fontWeight: 500,
		color: '#000',
		marginLeft: theme.spacing(2),
		paddingBottom: 10,
		borderBottom: '0px solid transparent',
		transition: 'all 200ms ease',
		textDecoration: 'none',
		fontSize: '1.25em',
		'&:hover': {
			paddingBottom: 8,
			borderBottom: '2px solid #000',
		},
	},
}))

function Navigation() {
	const classes = useStyles()
	return (
		<AppBar className={classes.root} color="primary" position="static">
			<Container>
				<Toolbar disableGutters>
					<Grid
						container
						direction="row"
						justify="space-between"
						alignItems="center"
					>
						<Link to="/" className={classes.logo}>
							merveille
						</Link>
						<div>
							<Grid
								container
								direction="row"
								justify="flex-start"
								alignItems="center"
							>
								<Grid item>
									<a href="mailto:mkabombwe@gmail.com" className={classes.link}>
										contact
									</a>
								</Grid>
							</Grid>
						</div>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Navigation
