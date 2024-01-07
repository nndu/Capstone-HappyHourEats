/*******************/
/* INITIALIZATIONS */
/*******************/

require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const { PORT, CORS_ORIGIN } = process.env;

/**********************/
/* MIDDLEWARE METHODS */
/**********************/

app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.static("./public"));

/***************/
/* MAIN ROUTES */
/***************/

const restaurantRoutes = require("./routes/restaurant-routes");
app.use("/restaurants", restaurantRoutes);

const eventRoutes = require("./routes/event-routes");
app.use("/events", eventRoutes);

/*****************/
/* MAIN LISTENER */
/*****************/

app.listen(PORT, () => {
  console.log(
    `Happy Hour Restaurant Finder server! Listening on port ${PORT}`
  );
});