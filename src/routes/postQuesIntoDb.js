const helperGetQuesAns = require('../helper/helperGetQuesAns');

const Model = require('../../models');

const handlerfn = (request, response) => {
  helperGetQuesAns().then((data) => {
    console.log(data);
    // let newJSONArray=[];
    const jsonArrayEditted = data.map(ele => ({
      ques: ele.question,
      quesid: ele.questionId,
      answer: ele.answer,
    }));
    Model.quizques.destroy({ truncate: true });
    Model.quizques.bulkCreate(jsonArrayEditted).then(() => response('done'));
  });
};

//   let jsonArrayEditted = {};
//   let data = [];
//   helperGetQuesAns().then((totaldata) => {
//     const objData = totaldata.map(ele => ({
//       ques: ele.question,
//       quesid: ele.questionId,
//       answer: ele.answer,
//     }));
//     data = totaldata;
//     jsonArrayEditted = objData;
//   });

//   Model.quizques.destroy({ truncate: true }).then(() => {
//     Model.quizques.bulkCreate(jsonArrayEditted).then(() => {
//       const quizPromises = [];
//       for (let i = 0; i < data.length; i += 1) {
//         const keys = Object.keys(data[i]);
//         for (let j = 0; j < keys.length; j += 1) {
//           if (keys[j].startsWith('option')) {
//             quizPromises.push(Model.quizoptions.create({
//               quesid: data[i].questionId,
//               option: data[i][keys[j]],
//             }));
//           }
//         }
//       }
//       Promise.all(quizPromises).then(() => response('done'));
//     });// bulk create closes
//   });// destroy closes
// };

module.exports = [{
  path: '/postQuesIntoDb',
  method: 'POST',
  handler: handlerfn,
}];
