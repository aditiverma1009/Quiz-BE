const helperGetQuesAns = require('../helper/helperGetQuesAns');

const Model = require('../../models');

const handlerfn = (request, response) => {
  helperGetQuesAns().then((data) => {
    for (let i = 0; i < data.length; i += 1) {
      const keys = Object.keys(data[i]);
      for (let j = 0; j < keys.length; j += 1) {
        if (keys[j].startsWith('option')) {
          Model.quizoptions.create({
            quesid: data[i].questionId,
            option: data[i][keys[j]],
          });
        }
      }
    }
  }).then(() => response('done'));
};


module.exports = [{
  path: '/postOptionsIntoDb',
  method: 'POST',
  handler: handlerfn,
}];
