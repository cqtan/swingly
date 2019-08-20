import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "swingly-db.firebaseapp.com",
  databaseURL: "https://swingly-db.firebaseio.com",
  projectId: "swingly-db",
  storageBucket: "",
  messagingSenderId: "1014000885289",
  appId: "1:1014000885289:web:c0e28bb2973386e6"
};

firebase.initializeApp(config);




export const auth = firebase.auth();
export const firestore = firb.firestore();