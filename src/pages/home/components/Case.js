import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
		cursor: 'pointer'
	},
	image: {
		background: '#000 no-repeat top center',
		backgroundSize: 'cover',
		textDecoration: 'none',
		color: 'inherit',
	},
	overlay: {
		width: '100%',
		height: '100%',
		background: 'rgba(0,0,0,0.85)',
		transition: 'all 200ms ease',
		'&:hover': {
			opacity: 0,
		},
	},
	content: {
		minHeight: 400,
		color: theme.palette.primary.main,
		fontFamily: "'Circularstd book', sans-serif",
		fontSize: '2em',
		textTransform: 'uppercase',
		textAlign: 'center'
	},
}))

export default function Case({ img, to, title }) {
	const classes = useStyles()

	return (
		<Grid item xs={12} sm={6} lg={4}>
			<a href={to} className={classes.link}>
				<div
					className={classes.image}
					style={{ backgroundImage: `url(${img})` }}
				>
					<div className={classes.overlay}>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
							className={classes.content}
						>
							{title}
						</Grid>
					</div>
				</div>
			</a>
		</Grid>
	)
}
