'use strict';

const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const morgan     = require('morgan');

const PORT = process.env.PORT || 8080;

// App
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo/api');

app.use("/api", require("./app/routes"));

app.all('/', function (req, res) {
  res.send('Work Parts Project\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);