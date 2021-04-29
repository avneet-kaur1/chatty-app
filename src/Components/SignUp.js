import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image1 from '../Image/img1.jpg';
import { BottomNavigation } from '@material-ui/core';
import { Formik } from 'formik';
import firebase from '../firebase';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
    </Typography>
  );
}


function SignUp() {

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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },

  }));

  const classes = useStyles();

  const signUpWithEmailPassword =()=> {
    var email = "test@example.com";
    var password = "hunter2";
   
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
       
        var user = userCredential.user;
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    
      });
    
  }

  // const handleSubmitFirebase = (values) => {
  //   console.log(values);
  //   let user = firebase.database.ref('Users').push({

  //     firstName: values.firstName,
  //     lastName: values.lastName,
  //     email: values.email,
  //     password: values.password

  //   });

  //   console.log(">>>>>>>>>>>>>", user)

  // }


  return (
    <div style={{ backgroundImage: `url(${Image1})` }}>
      <Grid>
        <AppBar position="absolute">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}>
            </Typography>
            <Button color="inherit" href="Home">Home</Button>
          </Toolbar>
        </AppBar>
      </Grid>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        validate={values => {
          const errors = {};

          if (!values.firstName) {
            errors.firstName = 'Required';
          } else if (
            !/^[a-zA-Z]*$/.test(values.firstName)
          ) {
            errors.firstName = 'Invalid Name';
          };

          if (!values.lastName) {
            errors.lastName = 'Required';
          } else if (
            !/^[a-zA-Z]*$/.test(values.lastName)
          ) {
            errors.lastName = 'Invalid Name';
          };

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          };
          
          if (!values.password) {
            errors.password = 'Required';
          } else if (
            !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)
          ) {
            errors.password = 'Invalid password ';
          };


          // console.log("--------->>>>",values)
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm({ values: '' })
          signUpWithEmailPassword(values);

        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (

            <Container componnt="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockRoundedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>



                <form className={classes.form} onSubmit={handleSubmit} Validate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={values.firstName}
                        onChange={handleChange}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        value={values.lastName}
                        onChange={handleChange}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleChange}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Grid>

                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign Up
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="SignIn" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </form>


              </div>
              <Box mt={8}>
                <Copyright />
              </Box>
            </Container>
          )
        }
      </Formik>
    </div>
  );
}

export default SignUp