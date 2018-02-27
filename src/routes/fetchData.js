const fetch = require('../helper/getQuesAndOptions');

const handlerfn = (request, response) => {
  fetch().then((data) => {
    console.log(data);
    return Promise.all(data).then(returnedData => response(returnedData));
  });
};

module.exports = [{
  path: '/fetchData',
  method: 'GET',
  handler: handlerfn,
}];

