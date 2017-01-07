'use strict';

const passport = require('passport');
const jwt      = require('jsonwebtoken');
const secret   = require('./../../config').auth;

function doLogin(req, res, next) {
  passport.authenticate('local', {session: false}, function(err, user, info) {

    if (err) return next(err);
    if (!user) {
      return res.status(401).json({status: 'error', code: 'unauthorized', info: info});
    } else {
      return res.json({token: jwt.sign({id: user.id}, secret.key, {expiresIn: '2d'})});
    }

  })(req, res, next);
}

module.exports = {
  doLogin: doLogin
};