'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let workerSchema = new Schema({
  name: String,
  age:  {type: Number, default: 28}
});

module.exports = mongoose.model('Worker', workerSchema);