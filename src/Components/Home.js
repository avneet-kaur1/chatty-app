import { AppBar, Container, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image1 from '../Image/img1.jpg'

const useStyles = makeStyles((theme) => ({
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

function Home() {
    const classes = useStyles();
    return (
        <Container>
            <Grid>
                <Grid>
                    <AppBar position="absolute">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.title}>

                            </Typography>
                            <Button color="inherit" href="SignIn">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>
            {/* <div>
                <img src={Image1} alt="background" width="100%" height="100%" position="absolute"/>
            </div> */}

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={6}>
                    {/* <Paper className={classes.paper}>
                    <Link href="SignUp" variant="body2">
                            Click here to create account ! Sign Up
                        </Link>
                        </Paper> */}
                </Grid>
            </Grid>

        </Container >
    );
}

export default Home;