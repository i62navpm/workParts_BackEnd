'use strict'

const router = require('express').Router();
const worker = require('./worker/index')

router.use('/worker', worker)

module.exports = router