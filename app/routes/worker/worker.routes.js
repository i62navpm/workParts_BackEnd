'use strict';

function getWorker(req, res, next) {
  const Worker = require('../../models/index').worker;

  let worker = new Worker({
    name: 'Manuel',
    age: 29 
  });

  worker.save().then(
    (response) => console.log('Worker saved successfully!', reponse),
    (error)    => console.log('Error saving worker!', error)
  );
    
  res.send('User parts\n');
};

module.exports = {
  getWorker: getWorker
};