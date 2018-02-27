const Models = require('../../models');

const handlerfn = (request, response) => {
  console.log(request.payload.username);
  console.log(request.payload.quesid);
  console.log(request.payload.selectedOption);

  const usern = request.payload.username;
  const quesi = request.payload.quesid;
  const selectedOp = request.payload.selectedOption;

  Models.usertables.findAll({ where: { username: usern } })
    .then((records) => {
      if (records === null) {
        Models.usertables.create({
          username: usern,
          quesid: quesi,
          selected: selectedOp,
        }).then(() => response('entry created'));
      } else {
        Models.usertables.findOne({ where: { username: usern, quesid: quesi } })
          .then((rec) => {
            // not found quesid
            if (rec === null) {
              Models.usertables.create({
                username: usern,
                quesid: quesi,
                selected: selectedOp,
              }).then(() => response('entry created'));
            } else {
              Models.usertables.update(
                {
                  selected: selectedOp,
                },
                {
                  where: {
                    username: usern,
                    quesid: quesi,
                  },
                },
              ).then(() => response('entry updated'));
            }
          });
      }
      return true;
    });
};

module.exports = [{
  path: '/updateOption',
  method: 'POST',
  handler: handlerfn,
}];

