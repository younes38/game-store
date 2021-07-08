const express = require("express");
const mongoose = require("mongoose");

const serverless = require("serverless-http");

const app = express();
const databseURI =
  "mongodb+srv://younes38:aa123123@nodeninja.qaalr.mongodb.net/gameStore?retryWrites=true&w=majority";
mongoose
  .connect(databseURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
    app.listen();
  });

// import Routes
const clientsRoutes = require("../routes/client");
const itemsRoutes = require("../routes/item");

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/.netlify/functions/api", clientsRoutes);
app.use("/.netlify/functions/api", itemsRoutes);
app.use("/", (res) => {
  res.json({ message: "route not found" });
});

module.exports = app;
module.exports.handler = serverless(app);
