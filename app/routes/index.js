'use strict';

const router = require('express').Router();
const worker = require('./worker');

router.get('/', (req, res) => res.send('API works Parts working\n'));
router.use('/worker', worker);

module.exports = router;