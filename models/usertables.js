module.exports = (sequelize, DataTypes) => {
  const usertables = sequelize.define('usertables', {
    username: DataTypes.STRING,
    quesid: DataTypes.INTEGER,
    selected: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return usertables;
};
