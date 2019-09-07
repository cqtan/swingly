const express = require('express');
const app = express();
const puppeteer = require('./services/puppeteer/puppeteer.routes');
require('dotenv').config();

app.use(express.json());
app.use('/api/data', puppeteer);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT;

app.listen(port, error => {
  if (error) throw error;
  console.log(`Listening to port ${port}...`)
});
