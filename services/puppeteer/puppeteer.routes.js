const express = require('express');
const router = express.Router();
const { firestore, getRootPath } = require('../firebase/firebase-db.utils');
const { scrapeEvents, formatEvents } = require('./puppeteer.utils');

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
  
  text = `Your ${text} has been stored!`;

  try {
    const newDocRef = firestore.collection(`${getRootPath()}/data/text`).doc();

    let dummyData = {
      id: newDocRef.id,
      text: text
    };

    await newDocRef.set({
      dummyData
    });
    console.log("/store/:text SUCCESS!");
    res.send(text);

  } catch (error) {
    console.log(error);
    res.send(error);
  }

});

router.post('/sample/:amount', async (req, res) => {
  const amount = req.params.amount;
  if (amount < 1) {
    res.status(500).send('Please enter a number larger than 0');
  }

  try {
    let events = [];
    let counter = 0;

    while (events.length < 2 && counter <= 5) {
      counter++;
      console.log(`Attempt(s) (${counter}) at scraping`);
      events = await scrapeEvents();
    }

    if (events.length < 1) {
      res.status(404).send('Too many attempts...try again later!');
    }

    events = events.slice(0, amount);
    events = formatEvents(events);
    const batch = firestore.batch();

    for (event of events) {
      const newDocRef = firestore.collection(`${getRootPath()}/data/events`).doc();
      batch.set(newDocRef, {
        ...event,
        id: newDocRef.id
      });
    }

    res.status(200).send(`Events ${events.length} have been persisted!`);
    await batch.commit();
    
  } catch (error) {
    res.status(404).send('Events failed to persist! ', error);
  }
});

module.exports = router;
