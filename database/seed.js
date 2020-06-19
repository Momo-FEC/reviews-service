const Sequelize = require('sequelize');
const Model = Sequelize.Model;
var faker = require('faker');
const Review = require('./index.js');



var addData = function() {
  var counter = 0;
  if (counter !== 10) {
    Review.create({
      user: faker.name.findName(),
      description: faker.random.words(5),
      helpfulcount: 0,
      timestamp: faker.date.recent(),
      feature: Math.random() * (5 - 1) + 1,
      performance: Math.random() * (5 - 1) + 1,
      design: Math.random() * (5 - 1) + 1,
      value: Math.random() * (5 - 1) + 1
    });
    counter++;
  }
};

addData(); 