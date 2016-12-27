'use strict';

const router = require('express').Router();
const worker = require('./worker.routes');

router.route('/').get(worker.getWorker);

module.exports = router;