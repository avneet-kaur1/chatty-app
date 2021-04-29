import React, { useState } from 'react'
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block',
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
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

function ForgotPassword(props) {
    const { classes } = props

    const [email, setEmail] = useState('')

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ReportProblemIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Find your account
       			</Typography>
                <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email"> Enter Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            autoComplete="off"
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={onForgotPassword}
                        className={classes.submit}>
                        Submit
          			</Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/HomePage"
                        className={classes.submit}>
                        Home
          			</Button>

                </form>
            </Paper>
        </main>
    )

    async function onForgotPassword() {
        try {
            await firebase.ForgotPassword(email)
            props.history.replace('/SignIn')
            console.log("--------------", email)
        }
        catch (error) {
            alert(error.message)
        }
    }

}

export default withRouter(withStyles(styles)(ForgotPassword))