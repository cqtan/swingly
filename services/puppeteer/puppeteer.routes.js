const express = require("express")
const router = express.Router()
const {
  firestore,
  getEnvironment,
  writeArrayToJsonObj
} = require("../firebase/firebase-db.utils")
const { scrapeEvents, formatEvents } = require("./puppeteer.utils")
const fs = require("fs")
const path = require("path")

router.get("/simple", (req, res) => {
  const text = `simplest test works!`
  res.send(text)
})

router.post("/test/:text", (req, res) => {
  let text = req.params.text
  text = `Your ${text} has been modified!`
  res.send(text)
})

router.post("/store/:text", async (req, res) => {
  let text = req.params.text

  text = `Your ${text} has been stored!`

  try {
    const newDocRef = firestore
      .collection(`${getEnvironment()}/data/text`)
      .doc()

    let dummyData = {
      id: newDocRef.id,
      text: text
    }

    await newDocRef.set({
      dummyData
    })
    console.log("/store/:text SUCCESS!")
    res.send(text)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

router.post("/sample/:amount", async (req, res) => {
  const amount = req.params.amount
  if (amount < 1) {
    res.status(500).send("Please enter a number larger than 0")
  }

  try {
    let events = []
    let counter = 0

    while (events.length < 2 && counter <= 5) {
      counter++
      console.log(`Attempt(s) (${counter}) at scraping`)
      events = await scrapeEvents()
    }

    if (events.length < 1) {
      res.status(404).send("Too many attempts...try again later!")
    }

    events = events.slice(0, amount)
    events = formatEvents(events)
    const batch = firestore.batch()

    for (event of events) {
      const newDocRef = firestore
        .collection(`${getEnvironment()}/data/events`)
        .doc()
      batch.set(newDocRef, {
        ...event,
        id: newDocRef.id
      })
    }

    res.status(200).send(`Events ${events.length} have been persisted!`)
    await batch.commit()
  } catch (error) {
    res.status(404).send("Events failed to persist! ", error)
  }
})

router.post("/refresh", async (req, res) => {
  try {
    let events = []
    let counter = 0
    let batch = firestore.batch()
    // const env = getEnvironment();
    const env = "production"

    // Delete All Events
    try {
      const eventsSnap = await firestore.collection(`${env}/data/events`).get()
      for (let eventSnap of eventsSnap.docs) {
        batch.delete(eventSnap.ref)
      }
      await batch.commit()
    } catch (err) {
      console.log("Delete err: ", err)
    }

    // Scrape New Events
    while (events.length < 2 && counter <= 5) {
      counter++
      console.log(`Attempt(s) (${counter}) at scraping`)
      events = await scrapeEvents()
    }

    if (events.length < 1) {
      res.status(404).send("Too many attempts...try again later!")
    }

    // Persist Formated Events
    events = formatEvents(events)
    const localMockEvents = []
    batch = firestore.batch()

    for (event of events) {
      const newDocRef = firestore.collection(`${env}/data/events`).doc()
      const newEvent = {
        ...event,
        id: newDocRef.id
      }

      batch.set(newDocRef, {
        ...newEvent
      })

      localMockEvents.push(newEvent)
    }
    await batch.commit()

    if (getEnvironment() !== "production") {
      writeArrayToJsonObj(localMockEvents, "../puppeteer/EVENTS_DATA.json")
    }

    res.status(200).send(`Events ${events.length} have been persisted!`)
  } catch (error) {
    res.status(404).send("Events failed to persist! ", error)
  }
})

router.get("/mockevents", async (req, res) => {
  if (getEnvironment() === "development" || getEnvironment() === "test") {
    const filePath = path.join(__dirname, "EVENTS_DATA.json")

    try {
      fs.readFile(filePath, "utf8", (error, data) => {
        if (!error) {
          const parsedData = JSON.parse(data)
          res.status(200).send(parsedData)
        } else {
          throw new Error(`Read file error for file ${filePath}: ` + error)
        }
      })
    } catch (err) {
      res.status(500).send(err.message)
    }
  } else {
    res.status(401).send("Not meant for you!")
  }
})

module.exports = router
