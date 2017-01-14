'use strict';

function getWorker(req, res) {
  const Worker = require('../../models').mongoSchema.worker;

  let worker = new Worker({
    name: 'Manuel',
    age: 30 
  });

  worker.save().then(
    (response) => console.log('Worker saved successfully!', response),
    (error)    => console.log('Error saving worker!', error)
  );
    
  res.send('User parts\n');
}

module.exports = {
  getWorker: getWorker
};