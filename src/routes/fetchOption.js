const Models = require('../../models');

const handlerfn = (request, response) => {
  console.log(request.payload.username);
  console.log(request.payload.quesid);

  const usern = request.payload.username;
  const quesi = request.payload.quesid;


  Models.usertables.findOne({ where: { username: usern, quesid: quesi } })
    .then((rec) => {
      // not found quesid
      if (rec === null) {
        response('null');
      } else {
        response(rec.selected);
      }
    });
};

module.exports = [{
  path: '/fetchOption',
  method: 'POST',
  handler: handlerfn,
}];

