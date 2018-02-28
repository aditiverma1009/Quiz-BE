const Models = require('../../models');
const fetchAllAnswers = require('../helper/fetchAllAnswers');
const fetchAllSelected = require('../helper/fetchAllSelected');

const handlerfn = (request, response) => {
  console.log(request.payload.username);


  const usern = request.payload.username;

  const count=0;

  const promise1=new Promise((resolve)=>{
    resolve(fetchAllSelected(usern));
  })
  promise1.then((userAns)=>{
    const promise2=new Promise((resolve)=>{
        resolve(fetchAllAnswers());
      })
      promise2.then((realAns)=>{
        const promise3=new Promise((resolve)=>{
            realAns.forEach((ans)=>{
                let ansid=ans.quesid;
                let ansans=ans.answer;
                userAns.forEach((sel)=>{
                    let selid=sel.quesid;
                    let selans=sel.selected;
                    if(selid===ansid && selans===ansans){
                        count++;
                    }
                }) 
            }); //for each close
            resolve(count);
        });
        response(count);
    });
});
}


module.exports = [{
  path: '/calculateScore',
  method: 'POST',
  handler: handlerfn,
}];

