import React from 'react'
import { makeStyles, Container, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		boxShadow: 'none',
		fontFamily: "'Circularstd book', sans-serif",
		background: theme.palette.primary.main,
	},
	logo: {
		fontFamily: "'Circularstd book', sans-serif",
		fontWeight: 900,
		textDecoration: 'none',
		color: '#000',
		fontSize: '2em',
		userSelect: 'none',
	},
	linksGrid: {
		justifyContent: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'flex-start',
			marginTop: theme.spacing(2)
		}
	},
	link: {
		fontWeight: 500,
		color: '#000',
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

function Footer() {
	const classes = useStyles()

	return (
		<footer className={classes.root}>
			<Container>
				<Grid
					container
					direction="row"
					justify="space-between"
					alignItems="center"
				>
					<Grid item xs={12} sm={6}>
						<Link to="/" className={classes.logo}>
							merveille
						</Link>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid
							container
							direction="row"
							alignItems="center"
							className={classes.linksGrid}
							spacing={2}
						>
							<Grid item>
								<a
									href="https://www.linkedin.com/in/merveille-kabombwe-a94301b6/"
									className={classes.link}
								>
									LinkedIn
								</a>
							</Grid>
							<Grid item>
								<a href="https://github.com/mkabombwe" className={classes.link}>
									GitHub
								</a>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</footer>
	)
}

export default Footer
