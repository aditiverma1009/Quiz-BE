

module.exports = (sequelize, DataTypes) => {
  const userscores = sequelize.define('userscores', {
    username: DataTypes.STRING,
    score: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return userscores;
};
