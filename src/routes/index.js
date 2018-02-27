const postQuesIntoDb = require('./postQuesIntoDb');
const postOptionsIntoDb = require('./postOptionsIntoDb');
const fetchData = require('./fetchData');
const setUser = require('./setUser');

const getHelloWorld = (request, response) => {
  response('On root. Go to login.');
};

module.exports = [{
  path: '/',
  method: 'GET',
  handler: getHelloWorld,
}].concat(postQuesIntoDb)
  .concat(postOptionsIntoDb)
  .concat(fetchData)
  .concat(setUser);
