import React from 'react'
import './styles.css'
import HomePage from './Components/HomePage'
import SignIn from './Components/SignIn'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ForgotPassword from './Components/ForgotPassword'
import Design from './Components/Design'
import Home1 from './Components/Home1';


const theme = createMuiTheme()

export default function App() {

	return (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/" component={Home1} />
					<Route exact path="/SignIn" component={SignIn} />
					<Route exact path="/ForgotPassword" component={ForgotPassword} />
					<Route exact path="/Register" component={Register} />
					<Route exact path="/Dashboard" component={Dashboard} />
				</Switch>
			</Router>
		</MuiThemeProvider>
		// <Design/>
		// <Home1/>
	);
}

// import React, { useState, useEffect } from 'react'
// import './App.css';
// import { BrowserRouter, Route } from 'react-router-dom';
// import firebase from './firebase';
// // import auth from './firebase';
// import Home from './Components/Home';
// // import SignIn from './Components/SignIn';
// import Profile from './Components/Profile';
// import SignUp from './Components/SignUp';
// import ForgotPassword from './Components/ForgotPassword';
// import Login from './Components/Login';
// import SignIn from './Components/SignIn';


// function App() {

//   // const [user, setUser] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [emailError, setEmailError] = useState("");
//   // const [passwordError, setPasswordError] = useState("");
//   // const [hasAccount, setHasAccount] = useState(false);

//   // const clearInputs = () => {
//   //   setEmail('');
//   //   setPassword('');
//   // }

//   // const clearErrors = () => {
//   //   setEmailError('');
//   //   setPasswordError('');
//   // }

//   // const handleLogin = () => {
//   //   clearErrors();
//   //   firebase
//   //     .auth()
//   //     .SignInWithEmailandPassword(email, password)
//   //     .catch(error => {
//   //       switch (error.code) {
//   //         case "auth/ invalid - email":
//   //         case "auth/ user - disabled":
//   //         case "auth/ user - not - found":
//   //           setEmailError(error.message);
//   //           break;
//   //         case "auth/wrong-password":
//   //           setPasswordError(error.message);
//   //           break;
//   //       }
//   //     })
//   // };

//   // const handleSignup = () => {
//   //   clearErrors();
//   //   firebase
//   //     .auth()
//   //     .CreateUserWithEmailandPassword(email, password)
//   //     .catch(error => {
//   //       switch (error.code) {
//   //         case "auth/email-already-inuse":
//   //         case "auth/invalid-email":

//   //           setEmailError(error.message);
//   //           break;
//   //         case "auth/weak-password":
//   //           setPasswordError(error.message);
//   //           break;
//   //       }
//   //     })
//   // };

//   // const handleLogout = () => {
//   //   firebase.auth().signOut();
//   // };

//   // const authListener = () => {
//   //   firebase.auth().onAuthStateChanged((user) => {
//   //     if (user) {
//   //       clearInputs();
//   //       setUser(user);
//   //     } else {
//   //       setUser(" ");
//   //     }
//   //   })
//   // };

//   // useEffect(() => {
//   //   authListener();
//   // }, []);


//   return (
//       <BrowserRouter>
//         <Route path="/Home" component={Home} />
//         <Route path="/SignIn" component={SignIn} />
//         <Route path="/Profile" component={Profile} />
//         <Route path="/SignUp" component={SignUp} />
//         <Route path="/ForgotPassword" component={ForgotPassword} />
//       </BrowserRouter>
//   );
// }

// export default App;
