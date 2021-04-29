import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

var Config = {
  apiKey: "AIzaSyD-vKgQYEMKeSDCmTVmApsmRKcyz4rllAg",
  authDomain: "chat-app-99a39.firebaseapp.com",
  databaseURL: "https://chat-app-99a39-default-rtdb.firebaseio.com",
  projectId: "chat-app-99a39",
  storageBucket: "chat-app-99a39.appspot.com",
  messagingSenderId: "53957632026",
  appId: "1:53957632026:web:2efa758398a18f714fb1a3",
  measurementId: "G-V5C7BT1T7M"
};

if (!firebase.apps.length) {
	firebase.initializeApp(Config)
 }else {
	firebase.app(); // if already initialized, use that one
 }

const auth = firebase.auth()
const db = firebase.firestore()

class Firebase { 
  SignIn(email, password) {
    console.log(firebase.auth.Auth.Persistence.LOCAL);
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      // New sign-in will be persisted with session persistence.
      auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
    
  }

  // ForgotPassword(email) {
    
  // }

  logout() {
    return auth.signOut()
  }

  async Register(name, email, password) {
    await auth.createUserWithEmailAndPassword(email, password)
    return auth.currentUser.updateProfile({
      displayName: name
    })
  }

  // addQuote(quote) {
  //   if (!auth.currentUser) {
  //     return alert('Not authorized')
  //   }

  //   return db.doc(`Users/${auth.currentUser.uid}`).set({
  //     quote
  //   })
  // }

  isInitialized() {
    return new Promise(resolve => {
      auth.onAuthStateChanged(resolve)
    })
  }

  getCurrentUsername() {
    console.log(auth.currentUser)
    return auth.currentUser && auth.currentUser.displayName
  }

  // async getCurrentUserQuote() {
  //   const quote = await db.doc(`Users/${auth.currentUser.uid}`).get()
  //   return quote.get('quote')
  // }
}

export default new Firebase()