'use strict';

const passport = require('passport');
const Strategy = require('passport-http-bearer').Strategy;
const User     = require('./../../models').mongoSchema.user;
const secret   = require('./../auth');
const jwt      = require('jsonwebtoken');

passport.use(new Strategy(function (token, cb) {
  jwt.verify(token, secret.key, function(err, decoded) {
    if (err) return cb(err);
    User.findById(decoded.id, (err, user) => cb(null, user ? user : false));
  });
}));