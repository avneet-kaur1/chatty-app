import React, { useEffect, useState } from 'react'
import { Typography, Paper, Avatar, CircularProgress, Button, Container, Grid, Input, TextField } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
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
		marginTop: theme.spacing.unit * 8,
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



function Dashboard(props) {
	const { classes } = props;




	useEffect(() => {

		console.log(firebase.getCurrentUsername());

	}, [])




	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Typography component="h1" variant="h5">
					{firebase.getCurrentUsername()}
				</Typography>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					onClick={logout}
					className={classes.submit}>
					Logout
          		</Button>
				<br/>
				<Container>
					<form>
					<TextField id="outlined-basic" label="sEarch" variant="outlined" fullWidth/>
					</form>
				
				</Container>

			</Paper>

		</main>
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Dashboard))