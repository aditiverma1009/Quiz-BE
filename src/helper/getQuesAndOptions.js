const Models = require('../../models/');


const fetch = () => {
  console.log('GET /data');
  const newBookLibrary = [];
  return Models.quizques.findAll().then(allData =>
    allData.map((bookData) => {
      const quesidHere = bookData.quesid;
      return Models.quizoptions.findAll({ where: { quesid: quesidHere } })
        .then((records) => {
          const newRec = {
            quesid: records.quesid,
            ques: bookData.ques,
            answer: bookData.answer,
            options: records.options,
          };
          newBookLibrary.push(newRec);
        });
    })).then(returned => Promise.all(returned).then(() => newBookLibrary));
};
module.exports = fetch;
