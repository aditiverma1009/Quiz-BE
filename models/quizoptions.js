'use strict';
module.exports = (sequelize, DataTypes) => {
  var quizoptions = sequelize.define('quizoptions', {
    quesid: DataTypes.INTEGER,
    option: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return quizoptions;
};