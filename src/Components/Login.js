import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import firebase from '../firebase';
import "firebase/auth";


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
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
}));

const Login = (props) => {
    const classes = useStyles();
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleChange,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {/* Log In */}
                </Typography>

                <form className={classes.form} validate>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        type="text"
                        autoFocus
                        required
                        value={email}
                        onChange={handleChange}
                        hyperText={emailError}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        type='password'
                        required
                        value={password}
                        onChange={handleChange}
                        hyperText={passwordError}
                    />
                    <Grid>
                        {hasAccount ? (
                            <>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                                <Link  onClick={() => setHasAccount (!hasAccount)} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </>
                        ) : (
                                <>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                        onClick={handleSignup}
                                    >
                                        Signup
                                    </Button>
                                    <Link onClick={() => setHasAccount (!hasAccount)} variant="body2">
                                        Already have an account? Login
                                    </Link>
                                </>
                            )
                        }
                    </Grid>

                    {/* <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                  </Button>
                    
                    <Grid container>

                        <Grid item xs>
                            <Link href="/ForgotPassword" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>

                        <Grid item >
                            <Link href="/SignUp" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>  
                        </Grid>

                    </Grid> */}
                </form>
            </div>

        </Container>
    )
}


export default Login;