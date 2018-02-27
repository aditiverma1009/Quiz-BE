'use strict';
module.exports = (sequelize, DataTypes) => {
  var quizques = sequelize.define('quizques', {
    ques: DataTypes.STRING,
    quesid: DataTypes.INTEGER,
    answer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return quizques;
};