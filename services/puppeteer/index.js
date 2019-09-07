const { scrapeEvents } = require("./puppeteer.utils");

const run = async () => {
  const events = await scrapeEvents();
  console.log('dono', events);
  
}

run();