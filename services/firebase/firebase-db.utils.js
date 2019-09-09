const firebase = require('firebase');
const fs = require('fs');
const path = require('path');
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

const getEnvironment = () => {
  if (process.env.NODE_ENV === 'production')
    return 'production';
  else if (process.env.NODE_ENV === 'test')
    return 'test';
  else if (process.env.NODE_ENV === 'development')
    return 'development';
  else 
    return 'elsweyr';
}

const createMockData = data => {
  const mockData = data.reduce((prev, current) => {
    const newDocRef = firebase.firestore().collection(`${getEnvironment()}/else/where`).doc();
    prev[newDocRef.id] = {
      ...current,
      id: newDocRef.id
    };

    return prev;
  }, {});
  
  console.log('Mock data created!');
  
  return mockData;
}

const writeObjToJson = (obj, filename) => {
  const jsonContent = JSON.stringify(obj);
  const filePath = path.join(__dirname, filename);
  
  fs.writeFile(filePath, jsonContent, 'utf8', (error) => {
    if (!error)
      return console.log('JSON file has been written!');
    else
      return console.log('JSON write error: ', error);
  });
}

const loadJsonToObj = async filename => {
  const filePath = path.join(__dirname, filename);

  await fs.readFile(filePath, 'utf8', (error, data) => {
    if (!error) {
      const parsedData = JSON.parse(data);
      console.log('Data keys length: ', Object.keys(parsedData).length);
      
      return parsedData;
    } else {
      throw new Error(`Read file error for file ${filePath}: ` + error);
    }
  });
}

exports.getEnvironment = getEnvironment;
exports.createMockData = createMockData;
exports.writeObjToJson = writeObjToJson;
exports.loadJsonToObj = loadJsonToObj;
exports.firestore = firebase.firestore();
