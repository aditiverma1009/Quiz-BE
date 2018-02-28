const postQuesIntoDb = require('./postQuesIntoDb');
const postOptionsIntoDb = require('./postOptionsIntoDb');
const fetchData = require('./fetchData');
const setUserScore = require('./setUserScore');
const updateOption = require('./updateOption');
const fetchOption = require('./fetchOption');
const getUserScore = require('./getUserScores');
const leadership = require('./leadership');
const calculateScore = require('./calculateScore');

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
  .concat(setUserScore)
  .concat(getUserScore)
  .concat(leadership)
  .concat(updateOption)
  .concat(fetchOption)
  .concat(calculateScore);
