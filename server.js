'use strict';

const express     = require('express');
const passport    = require('passport');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const graffiti    = require('@risingstack/graffiti');
const graphSchema = require('./app/models').graphSchema;

require('./app/config/authStrategies/local.strategy');
require('./app/config/authStrategies/bearer.strategy');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan('combined'));

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo/api');

app.use("/api", passport.authenticate('bearer', { session: false }), require("./app/routes"));
app.use("/auth", require("./app/services"));
app.use('/graphql', passport.authenticate('bearer', { session: false }), (req, res, next) => next());
app.use(graffiti.express({schema: graphSchema}));

app.all('/', function (req, res) {
  res.send('Work Parts Project\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);