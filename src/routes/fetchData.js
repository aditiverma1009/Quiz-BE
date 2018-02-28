const fetch = require('../helper/getQuesAndOptions');

const handlerfn = (request, response) => {
  fetch().then((data) => {
    console.log(data);
    if(data.length === 0){
      return helperGetQuesAns().then((data) => {
        console.log(data);
        // let newJSONArray=[];
        const jsonArrayEditted = data.map(ele => ({
          ques: ele.question,
          quesid: ele.questionId,
          answer: ele.answer,
        }));
        return Model.quizques.destroy({ truncate: true }).then(()=>{
          return Model.quizques.bulkCreate(jsonArrayEditted).then(() => response(jsonArrayEditted));

        });
      });
    }
    return Promise.all(data).then(returnedData => response(returnedData));
  });
};

module.exports = [{
  path: '/fetchData',
  method: 'GET',
  handler: handlerfn,
}];

