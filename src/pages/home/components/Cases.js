import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Container } from '@material-ui/core'
import Case from './Case'

const cases = [
	{
		name: 'Frederik Hector',
		img: require('../../../images/fh.png'),
		link: 'https://www.frederikhector.com',
	},
	{
		name: 'Jabbie Jewels Sweden',
		img: require('../../../images/jjs.png'),
		link: 'https://www.jabbiejewelssweden.com',
	},
	{
		name: 'Lars Møller',
		img: require('../../../images/lm.png'),
		link: 'https://www.lars-moller.dk',
	},
	{
		name: 'Scandin-Africa',
		img: require('../../../images/sa.png'),
		link: 'https://www.scandin-africa.com',
	},
	{
		name: 'Café Baco',
		img: require('../../../images/baco.png'),
		link: 'https://www.cafebaco.dk',
	},
	{
		name: 'Bergur Nielsen',
		img: require('../../../images/bgn.png'),
		link: 'http://bergurnielsen.com',
	},
]

const useStyles = makeStyles(theme => ({
	root: {
		marginTop: theme.spacing(10),
		marginBottom: theme.spacing(10),
	},
	title: {
		fontFamily: 'Circularstd, sans-serif',
		fontSize: '2em',
	},
}))

export default function Cases() {
	const classes = useStyles()

	return (
		<Container>
			<div className={classes.root}>
				<h3 className={classes.title}>Previous projetcs</h3>
				<Grid container spacing={8}>
					{cases &&
						cases.map((item, index) => (
							<Case
								key={index}
								img={item.img}
								to={item.link}
								title={item.name}
							/>
						))}
				</Grid>
			</div>
		</Container>
	)
}
