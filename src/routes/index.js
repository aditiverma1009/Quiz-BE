const getQuesAns = require('./getQuesAns');

const getHelloWorld = (request, response) => {
  response('On root. Go to login.');
};

module.exports = [{
  path: '/',
  method: 'GET',
  handler: getHelloWorld,
}].concat(getQuesAns);
