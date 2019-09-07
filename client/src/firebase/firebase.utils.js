import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

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

export const getRootPath = () => {
  if (process.env.NODE_ENV === 'production')
    return 'production';
  else if (process.env.NODE_ENV === 'test')
    return 'test';
  else {
    return 'development';
  }
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.app().functions('europe-west1');

// Only for GoogleAuth:
// Make sure to enable Sign-in methods for Google on your account
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();


export default firebase;
