import React from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';

export default function Design() {
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            style={{ minHeight: "100vh" }}
            spacing={5}
        >
            <Grid item>
                <Typography variant="h5" color="primary">
                    ------
        </Typography>
            </Grid>
            <Grid item style={{ border: "0.2px solid gray" }}>
                <Loginn />
            </Grid>
        </Grid>
    );
}

const Loginn = () => {
    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <Typography variant="h5" color="primary" style={{ marginBottom: "1em" }}>
                Login
        </Typography>

            <TextField
                variant="outlined"
                label="Email"
                fullWidth
                style={{ marginBottom: "2em" }}
            />
            <TextField
                variant="outlined"
                label="Password"
                fullWidth
                style={{ marginBottom: "2em" }}
            />
            <Button size="large" variant="contained" color="primary" style={{ marginBottom: "1em" }}>
                LOGIN
            </Button>
            <Link variant="body2">
                {"Don't have an account? Sign Up"}
            </Link>
        </Grid>
    );
};


