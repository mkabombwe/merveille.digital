import React from 'react'
import { makeStyles, Container, Grid } from '@material-ui/core'
import bgtest from '../images/bgtest.jpg'

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),
	},
	image: {
		background: '#000 no-repeat center center',
        height: 200,
        backgroundSize: 'cover'
	},
}))

function ImageGrid() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={8}>
				<Grid item xs={12} md={6}>
					<div
						className={classes.image}
						style={{ backgroundImage: `url(${bgtest})` }}
					>
						kek
					</div>
				</Grid>

				<Grid item xs={12} md={6}>
					<div
						className={classes.image}
						style={{ backgroundImage: `url(${bgtest})` }}
					>
						kek
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default ImageGrid
