const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Role = sequelize.define('role', {

  role_name: DataTypes.STRING,
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();