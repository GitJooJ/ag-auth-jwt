const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('auth', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
