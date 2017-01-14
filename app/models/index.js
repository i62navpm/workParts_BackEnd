'use strict';

const worker   = require('./worker/worker.model');
const user     = require('./user/user.model');
const graffiti = require('@risingstack/graffiti-mongoose');

module.exports = {
  mongoSchema: {
    worker: worker,
    user: user
  },
  graphSchema: graffiti.getSchema([worker, user])
};