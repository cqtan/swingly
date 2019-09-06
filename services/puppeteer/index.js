const express = require('express');
const router = express.Router();
const { firestore } = require('../firebase/firebase-db.utils');

router.get('/simple', (req, res) => {
  const text = `simplest test works!`;
  res.send(text);
});

router.post('/test/:text', (req, res) => {
  let text = req.params.text;
  text = `Your ${text} has been modified!`;
  res.send(text);
});

router.post('/store/:text', async (req, res) => {
  let text = req.params.text;
  let rootPath = '';
  
  text = `Your ${text} has been stored!`;

  if (process.env.NODE_ENV === 'production')
    rootPath = 'production';
  else if (process.env.NODE_ENV === 'test')
    rootPath = 'test';
  else if (process.env.NODE_ENV === 'development')
    rootPath = 'development';
  else 
    rootPath = 'somewhere-over-the-rainbow';

  try {
    const newDocRef = firestore.collection(`${rootPath}/data/text`).doc();
    console.log("-----db set!");

    let dummyData = {
      id: newDocRef.id,
      text: text
    };

    await newDocRef.set({
      dummyData
    });
    console.log("____Set!");
    res.send(text);

  } catch (error) {
    console.log("-----What?", error);
    res.send(error);
  }

});

module.exports = router;