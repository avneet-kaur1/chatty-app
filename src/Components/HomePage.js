import React from 'react'
import { Typography, Paper, Avatar, Button, Grid } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from '../firebase'

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 25,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.primary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})






function HomePage(props) {
	const { classes } = props

	return (

		<main className={classes.main}>
			<Grid>
				<AppBar position="absolute">
					<Toolbar>
						<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography className={classes.title}>

						</Typography>

					</Toolbar>
				</AppBar>
			</Grid>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<HomeIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Hey!
				</Typography>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="Primary"
					component={Link}
					to="/Register"
					className={classes.submit}>
					Register
          		</Button>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="Primary"
					component={Link}
					to="/SignIn"
					className={classes.submit}>
					Sign In
          		</Button>
			</Paper>
		</main>
	)
}

export default withStyles(styles)(HomePage)
