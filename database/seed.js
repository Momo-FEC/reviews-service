const Sequelize = require('sequelize');
const Model = Sequelize.Model;
var faker = require('faker');
const Review = require('./index.js');

var addData = function() {
  const randomWords = ['It did what it needed to.', 'I guess it is okay', 'Cool, I guess', 'iPhones are better', 'Hi mom!', 'How do I upload videos to facebook?', 'I thought this phone would fix my marriage, it did not', 'I guess this is better than my last phone', 'Good call quality I guess']
  const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  Review.sync({ force: true }).then(() => {
    return Review.create({
      user: faker.name.findName(),
      shortDescription: randomWord,
      description: faker.random.words(5),
      helpfulcount: 0,
      timestamp: faker.date.recent(),
      feature: Math.random() * (5 - 1) + 1,
      performance: Math.random() * (5 - 1) + 1,
      design: Math.random() * (5 - 1) + 1,
      value: Math.random() * (5 - 1) + 1
    });
  });
};

var adder = function() {
  var counter = 0;

  while (counter < 100) {
    addData();
    counter++;
  }
};

adder();

