const Models = require('../../models');

const fetchAllSelected = (username) => {
  const usern = username;
  Models.usertables.findAll({
    where: { username: usern },
    raw: true,
  })
    .then((rec) => {
      const newArSelected = [];
      if (rec === null) {
        return [];
      }
      rec.forEach((element) => {
        // console.log(element);
        newArSelected.push({ quesid: element.quesid, selected: element.selected });
      });
      console.log(newArSelected);
      return (newArSelected);
    });
};

module.exports = fetchAllSelected;

