const Models = require('../../models');

const fetchAllAnswers = () => {
  Models.quizques.findAll({
    raw: true,
  }).then((rec) => {
    const newArAnswer = [];
    rec.forEach((element) => {
      // console.log(element);
      newArAnswer.push({ quesid: element.quesid, answer: element.answer });
    });
    console.log(newArAnswer);
    return (newArAnswer);
  });
};

module.exports = fetchAllAnswers;
