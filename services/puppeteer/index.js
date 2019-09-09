const { scrapeEvents, formatEvents } = require("./puppeteer.utils");
const { createMockData, writeObjToJson, loadJsonToObj } = require('../firebase/firebase-db.utils');

const run = async () => {
  let events = [];
  let counter = 0;

  while (events.length < 2 && counter <= 5) {
    counter++;
    console.log(`Attempt(s) (${counter}) at scraping`);
    events = await scrapeEvents();
  }

  events = formatEvents(events);
  console.log(`Events (${events.length}) created!`);

  events = createMockData(events);
  writeObjToJson(events, 'EVENTS_DATA.json');
  loadJsonToObj('EVENTS_DATA.json');

}

run();
