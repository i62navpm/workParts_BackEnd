'use strict';

const router   = require('express').Router();
const login    = require('./login.service');

router.route('/login')
  .get((req, res) => res.send('Auth login working\n'))
  .post(login.doLogin);

module.exports = router;