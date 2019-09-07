const firebase = require('firebase');
require('firebase/firestore');

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

const getRootPath = () => {
  if (process.env.NODE_ENV === 'production')
    return 'production';
  else if (process.env.NODE_ENV === 'test')
    return 'test';
  else if (process.env.NODE_ENV === 'development')
    return 'development';
  else 
    return 'elsweyr';
}

exports.getRootPath = getRootPath;
exports.firestore = firebase.firestore();
