const Sequelize = require('sequelize');
const Model = Sequelize.Model;
var faker = require('faker');

const sequelize = new Sequelize('samsung', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Review = sequelize.define('Review', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  user: Sequelize.STRING,
  description: Sequelize.STRING,
  helpfulcount: Sequelize.INTEGER,
  timestamp: Sequelize.DATE,
  feature: Sequelize.INTEGER,
  performance: Sequelize.INTEGER,
  design: Sequelize.INTEGER,
  value: Sequelize.INTEGER,
});



sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = Review;