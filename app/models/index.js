'use strict';

const worker = require('./worker/worker.model');
const user   = require('./user/user.model');

module.exports = {
  worker: worker,
  user: user
};