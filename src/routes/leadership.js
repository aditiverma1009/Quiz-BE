const Models = require('../../models');

const handlerfn = (request, response) => {
  Models.userscores.findAll({
    order: [
      ['score', 'DESC'],
    ],
    raw: true,
  }).then((rec) => {
    response(rec.slice(0, 5));
  });
};


module.exports = [{
  path: '/leadership',
  method: 'GET',
  handler: handlerfn,
}];

