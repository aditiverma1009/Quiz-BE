const rp = require('request-promise');

const getQuizData = () => rp('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions')
  .then((jsonString) => {
    const jsonArray = JSON.parse(jsonString).allQuestions;
    const QuizPromises = [];
    for (let i = 0; i < jsonArray.length; i += 1) {
      const quesId = jsonArray[i].questionId;
      QuizPromises.push(rp(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${quesId}`));
    }
    const newjsonArray = jsonArray;
    return Promise.all(QuizPromises).then((values) => {
      // console.log(values);
      for (let i = 0; i < values.length; i += 1) {
        newjsonArray[i].answer = JSON.parse(values[i]).answer;
      }

      return (newjsonArray);
    });
  })
  .catch((error) => {
    console.log(`Crawling Failed${error}`);
  });


module.exports = getQuizData;

