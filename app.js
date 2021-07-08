const express = require("express");
const mongoose = require("mongoose");

const app = express();
const databseURI =
  "mongodb+srv://younes38:aa123123@nodeninja.qaalr.mongodb.net/gameStore?retryWrites=true&w=majority";
mongoose
  .connect(databseURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected");
    app.listen();
  });

const bodyParser = require('body-parser');
// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Routes
app.get("/", async (req, res) => {
  console.log("here");
  res.json({name: "younes"})
});

// import Routes
const clientsRoutes = require('./routes/client')
const itemsRoutes = require('./routes/item')
app.use(clientsRoutes);
app.use(itemsRoutes);
