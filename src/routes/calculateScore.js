const Models = require('../../models');
const fetchAllAnswers = require('../helper/fetchAllAnswers');
const fetchAllSelected = require('../helper/fetchAllSelected');

const handlerfn = (request, response) => {
  console.log(request.payload.username);


  const usern = request.payload.username;
  let ansObj={};
  let selObj={};
  const promise1=new Promise((resolve)=>{
    selObj = fetchAllSelected(usern);
    resolve(selObj);
  });
  const promise2=new Promise((resolve)=>{
    ansObj = fetchAllAnswers();
    resolve(ansObj);
  });
  const promise3=new Promise((resolve)=>{
    ansObj.forEach((ans)=>{
        let ansid=ans.quesid;
        console.log(ansid);
        resolve(ansid);
    })
    resolve(ansObj);
  });


  promise1.then(()=>{
      promise2.then(()=>{
          promise3.then((data)=>{
              
          })
      })
  })
};

module.exports = [{
  path: '/calculateScore',
  method: 'POST',
  handler: handlerfn,
}];

