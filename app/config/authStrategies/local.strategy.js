'use strict';

const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User     = require('./../../models').user;

passport.use(new Strategy(
  function(username, password, cb) {
    User.findOne({username: username}, function(err, user) {
      if (err) { return cb(err); }

      if (!user) { return cb(null, false, { message: 'Incorrect username.' }); }
      user.comparePassword(password, function(err, isMatch) {
        if (err) { return cb(err); }
        if (!isMatch) { return cb(null, false, { message: 'Incorrect password.' }); }
        return cb(null, user);
      });
    });
  })
);