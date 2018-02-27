'use strict';
module.exports = (sequelize, DataTypes) => {
  var usernames = sequelize.define('usernames', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usernames;
};