const helperGetQuesAns = require('../helper/helperGetQuesAns');

const Model = require('../../models');

const handlerfn = (request, response) => {
  helperGetQuesAns().then((data) => {
    const jsonArrayEditted = data.map(ele => ({
      ques: ele.ques,
      quesId: ele.questionId,
      options: [ele.option1, ele.option2, ele.option3, ele.option4],
      answer: ele.answer,
    }));
    Model.quizqa.destroy({ truncate: true });
    Model.quizqa.bulkCreate(jsonArrayEditted).then(() => console.log('QuesAnswer table created'));
    return true;
  });
  response('stored');
};

module.exports = [{
  path: '/getQuesAns',
  method: 'POST',
  handler: handlerfn,
}];
