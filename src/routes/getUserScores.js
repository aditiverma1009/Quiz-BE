const Models = require('../../models');

const handlerfn = (request, response) => {
  // console.log(request.payload.username);
  const usern = request.payload.username;
  Models.userscores.findOne({ where: { username: usern }, raw: true }).then((rec) => {
    console.log(rec);
    if (rec === null) {
    //   console.log('0');
      response(0);
    } else {
    //   console.log(`<<${rec.score}`);
      response(rec.score);
    }
    return true;
  });
};

module.exports = [{
  path: '/getUserScore',
  method: 'POST',
  handler: handlerfn,
}];

