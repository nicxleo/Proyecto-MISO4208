module.exports = app => {
  const Tests = require('../controllers/test.controller.js');

  //Create a new Test
  app.post('/tests', Tests.create);

  //Update a Test with TestId
  app.put('/tests/:testId', Tests.update);

  //Delete a Test with TestId
  app.delete('/tests/:testId', Tests.delete);

  //Retrieve a sigle Test with TestId
  app.get('/tests/:testId', Tests.findOne);

  //Retrieve all Tests
  app.get('/tests', Tests.findAll);
};
