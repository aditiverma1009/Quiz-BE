const Model = require('../../models');

const getQuesAndOptions = () => Model.quizques.findAll({ raw: true }).then((data) => {
  const aP = [];
  data.forEach((ele) => {
    let newObj = {};
    const optionTotal = [];
    const quesidHere = ele.quesid;
    aP.push(Model.quizoptions.findAll({
      where: { quesid: quesidHere },
      raw: true,
    }).then((record) => {
      record.forEach((eachRecord) => {
        optionTotal.push(eachRecord.option);
      });
      newObj = ele;
      newObj.options = optionTotal;
      return newObj;
    }));
  });
  // console.log(`ap${aP}`);
  return aP;
});

module.exports = getQuesAndOptions;
