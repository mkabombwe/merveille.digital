import React from 'react'
import { makeStyles, Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		background: theme.palette.primary.main,
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
		fontFamily: 'Circularstd, sans-serif',
	},
	title: {
		fontSize: '2em',
	},
	emailTitle: {
        fontSize: '1.5em',
        marginBottom: 15
    },
	email: {
		textDecoration: 'none',
		color: '#555',
		paddingBottom: 8,
        borderBottom: '2px solid #555',
        fontSize: '1.5em'
	},
}))
function ContactMe() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Container>
				<Grid container direction="column">
					<h3 className={classes.title}>What to get in contact?</h3>
					<p className={classes.emailTitle}>E-mail adress</p>
					<span>
						<a href="mailto:mkabombwe@gmail.com" className={classes.email}>
							mkabombwe@gmail.com
						</a>
					</span>
				</Grid>
			</Container>
		</div>
	)
}

export default ContactMe
