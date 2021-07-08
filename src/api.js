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
