// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const watchlistController = require('./Controllers/watchlistController')

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use('/watchlist', watchlistController)

// ROUTES
app.get("/", (req, res) => {
  res.send("Grab a drink, Grab a snack, and lets start the Show");
});

app.get('*', (req, res) => {
  res.status(404).send('page not found')
})


// EXPORT
module.exports = app;
