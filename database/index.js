const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const mysqlStuff = require('./config.js');

const sequelize = new Sequelize('samsung', mysqlStuff.login, mysqlStuff.password, {
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
  phoneId: Sequelize.INTEGER,
  user: Sequelize.STRING,
  shortDescription: Sequelize.STRING,
  description: Sequelize.STRING,
  helpfulcount: Sequelize.INTEGER,
  unhelpfulcount: Sequelize.INTEGER,
  timestamp: Sequelize.DATE,
  feature: Sequelize.INTEGER,
  performance: Sequelize.INTEGER,
  design: Sequelize.INTEGER,
  value: Sequelize.INTEGER,
  overall: Sequelize.INTEGER,
  recommend: Sequelize.STRING
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