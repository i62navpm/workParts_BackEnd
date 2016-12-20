'use strict';

let router = require('express').Router();

module.exports = (function() {
  router.route('/')
    .get(function (req, res, next) {
      let Worker = require('../models/worker');
  
      let worker = new Worker({
        name: 'Manuel',
        age: 29 
      });

      worker.save().then(
        (response) => console.log('Worker saved successfully!', reponse),
        (error)    => console.log('Error saving worker!', error)
      );

      res.send('User parts\n');
    });
  
  return router;
})()