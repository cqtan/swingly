const puppeteer = require('puppeteer');
const faker = require('faker');
const { uniqWith, isEqual } = require('lodash');
const fs = require('fs');

async function startBrowser() {
  const browser = await puppeteer.launch({
    args: ['--lang=en-US']
  });
  const page = await browser.newPage();
  const userAgent = await faker.internet.userAgent();
  await page.setUserAgent(userAgent);
  return {browser, page};
}

async function closeBrowser(browser) {
  return browser.close();
}

function translate(month) {
  switch(month) {
    case 'Januar':
      return 'January';
    case 'Februar':
      return 'February';
    case 'März':
      return 'March';
    case 'April':
      return 'April';
    case 'Mai':
      return 'May';
    case 'Juni':
      return 'June';
    case 'Juli':
      return 'July';
    case 'August':
      return 'August';
    case 'September':
      return 'September';
    case 'Oktober':
      return 'October';
    case 'November':
      return 'November';
    case 'Dezember':
      return 'December';
    default:
      return month;
  }
}

// TODO: Make sure to remove sub-string once matched!
function formatTime(timeString) {
  let parts = timeString.split('–');
  const regTime = /\d{2}\:\d{2}/;
  const startTime = parts[0].match(regTime);
  parts[0] = parts[0].replace(regTime, "");
  const endTime = parts[1].match(regTime);
  parts[1] = parts[1].replace(regTime, "");

  const regMonth = /[a-zA-Z.]{3,9}/;
  let startMonth = parts[0].match(regMonth);
  startMonth = translate(startMonth[0]);
  parts[0] = parts[0].replace(regMonth, "");
  let endMonth = parts[1].match(regMonth);
  endMonth = endMonth === null ? startMonth : translate(endMonth[0]);
  parts[1] = parts[1].replace(regMonth, "");

  const regDay = /\d{1,2}/;
  const startDay = parts[0].match(regDay);
  let endDay = parts[1].match(regDay);
  endDay = endDay === null ? startDay[0] : endDay[0];

  const year = new Date().getFullYear();

  const startDate = new Date(`${startMonth} ${startDay}, ${year} ${startTime}:00`);
  const endDate = new Date(`${endMonth} ${endDay}, ${year} ${endTime}:00`);
  return [startDate, endDate];
}

function formatDescription(description) {
  let cleaned = description.replace(/<wbr>/g, '');
  cleaned = cleaned.replace(/&amp;/g, '&');

  return cleaned;
}

const getDetails = async detailItems => {
  let when = null;
  let startDate = null;
  let endDate = null;
  let location = null;
  let mapLink = null;
  let description = null;
  
  for (let detailItem of detailItems) {
    if (await detailItem.$('div > span.event-when') !== null) {
      when = await detailItem.$eval('div > span.event-when', el => el.innerText);
      [ startDate, endDate ] = formatTime(when);
    }

    if (await detailItem.$('div > span.event-where') !== null)
      location = await detailItem.$eval('div > span.event-where', el => el.innerText);

    if (await detailItem.$('div > span.event-where > a') !== null)
      mapLink = await detailItem.$eval('div > span.event-where > a', el => el.getAttribute('href'));

    if (await detailItem.$('div > span.event-description') !== null) {
      description = await detailItem.$eval('div > span.event-description', el => el.innerText);
      description = formatDescription(description);
    }
  }

  return {
    start: startDate,
    end: endDate,
    location: location === null ? 'none' : location, 
    mapLink: mapLink === null ? 'none' : mapLink, 
    description: description === null ? 'none': description
  }
}

const scrapeEvents = async () => {
  const {browser, page} = await startBrowser();
  await page.goto('http://swinginberlin.de/', {
    waitUntil: 'networkidle0'
  });

  let nestedFrame = null;

  for (const frame of page.mainFrame().childFrames()) {
    if (frame._name === "Content") {
      nestedFrame = frame;
    }
  }

  // let linkNames = [];
  let data = [];

  if (nestedFrame !== null) {
    const monthRows = await nestedFrame.$$('#mvEventContainer2 > div');
    for (let monthRow of monthRows) {
      const eventRows = await monthRow.$$('table.st-grid > tbody > tr');
      for (let eventRow of eventRows) {
        if (await eventRow.$('td.st-c') !== null) {
          const eventsWrapper = await eventRow.$$('td.st-c');
          for (let eventWrapper of eventsWrapper) {
            const event = await eventWrapper.$('div.st-c-pos');
            if (event !== null) await event.click();

            await nestedFrame.waitForSelector('div[id="bubbleContent\:1"]');

            const detailItems = await nestedFrame.$$('div.details > div.detail-content > div');
            const details = await getDetails(detailItems);

            let title = null;
            if (await nestedFrame.$('div[id="bubbleContent\:1"] > div.details > span.title') !== null) 
              title = await nestedFrame.$eval('div[id="bubbleContent\:1"] > div.details > span.title', el => el.innerText );
            
            data.push({ title, ...details });

            await page.keyboard.press('Escape');
          }
        }
      }
    }
  }
  await closeBrowser(browser);

  const uniqueEvents = uniqWith(data, isEqual);
  console.log('Raw: ', data.length);
  console.log('Unique: ', uniqueEvents.length);
  
  return uniqueEvents;
}

const formatEvents = events => {
  const newEvents = events.map(event => (
    {
      ...event,
      id: '',
      cancelled: false,
      host: ['A8WnU1fmQnWQ3bjvI6PYro32Tjh1'],
      type: 'social',
      currency: 'euro',
      links: [],
      courses: [],
      otherFees: [],
      interested: [],
      going: []
    }
  ));
  console.log(`${newEvents.length} have been formated!`);

  return newEvents;
}

exports.formatEvents = formatEvents; 
exports.scrapeEvents = scrapeEvents;
