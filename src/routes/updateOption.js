const Models = require('../../models');

const handlerfn = (request, response) => {
  console.log(request.payload.username);
  const usern = request.payload.username;

//   Models.usertables.findAll({ where: { username: usern } })
//     .then((records) => {
//       if (records.length === 0) {
//         Models.usertables.create({
//           username: usern,
//           quesid: 0,
//           selected: '',
//         });
//         response('user created');
//       } else {
//         response('user exists');
//       }
//       return true;
//     });
// };

module.exports = [{
  path: '/setUser',
  method: 'POST',
  handler: handlerfn,
}];

