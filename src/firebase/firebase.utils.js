import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "swingly-db.firebaseapp.com",
  databaseURL: "https://swingly-db.firebaseio.com",
  projectId: "swingly-db",
  storageBucket: "",
  messagingSenderId: "1014000885289",
  appId: "1:1014000885289:web:c0e28bb2973386e6"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Only for GoogleAuth:
// Make sure to enable Sign-in methods for Google on your account
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Always promt popup on sign up/in.
// Possible error onClick (restricted_client): Change name of consent screen.
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
