const Models = require('../../models');

const handlerfn = (request, response) => {
  // console.log(request.payload.username);
  const usern = request.payload.username;
  const scoreHere = request.payload.score;
  Models.userscores.findAll({ where: { username: usern } }).then((rec) => {
    if (rec.length === 0) {
      Models.userscores.create({
        username: usern,
        score: scoreHere || 0,
      }).then(() => response('new entry created'));
    } else if (rec.length > 0) {
      Models.userscores.update(
        {
          score: scoreHere,
        },
        {
          where: {
            username: usern,
          },
        },
      ).then(() => response('entry updated'));
    }
    return true;
  });
};

module.exports = [{
  path: '/setUserScore',
  method: 'POST',
  handler: handlerfn,
}];

