const Sequelize = require('sequelize');
const Model = Sequelize.Model;
var faker = require('faker');
const Review = require('./index.js');

var addData = function() {
  const randomWords = ['It did what it needed to.', 'I guess it is okay', 'Cool, I guess', 'iPhones are better', 'Hi mom!', 'How do I upload videos to facebook?', 'I thought this phone would fix my marriage, it did not', 'I guess this is better than my last phone', 'Good call quality I guess']
  const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  const randomParagraphs = ['These phones get more delicate as they get expensive. What phone cracks its screen from a 2 feet drop while out for a walk in the park?', 'I got this phone about a month ago. After some time using it I was slightly disappointed with the camera. Although it has many great perks. Still, I think this phone is great for anyone who wants good photos.', 'This product was okay', 'Does my review go here?', 'The product was okay', 'Im going to trade my house in for this product', 'I bought this product for my wife, I dont have a wife', 'They said this phone could cure baldness', 'Nobody has ever wanted this phone more than me', 'My old phone broke so i had to get a new one and my insurance didnt cover iphones, so i had to get this', 'Why do my snapchats look so bad???', 'I love pizza', 'expectations = met', 'What do you call batman that skips church on sunday? Christian Bale', 'Im going to buy this once i get friends!', 'Testing 1, 2. Testing 1, 2.', 'I had a great day at the park today. I met an old man who told me about his life. I was inspired. Which is why im here.'];
  const randomParagraph = randomParagraphs[Math.floor(Math.random() * randomParagraphs.length)];
  const yesOrNo = ['yes', 'no'];
  const phoneId = Math.random() * (100 - 1) + 1;
  const recommend = yesOrNo[Math.floor(Math.random() * yesOrNo.length)];
  const feature = Math.random() * (5 - 3) + 1;
  const performance = Math.random() * (5 - 1) + 1;
  const design = Math.random() * (3 - 1) + 1;
  const value = Math.random() * (5 - 3) + 1;
  const overall = (feature + performance + design + value) / 4;
  const randomhelpful = Math.random() * (10 - 1) + 1;
  const randomunhelpful = Math.random() * (3 - 1) + 1;
  
  Review.sync({ force: true }).then(() => {
    return Review.create({
      phoneId: phoneId,
      user: faker.name.findName(),
      shortDescription: randomWord,
      description: randomParagraph,
      helpfulcount: randomhelpful,
      unhelpfulcount: randomunhelpful,
      timestamp: faker.date.recent(),
      feature: feature,
      performance: performance,
      design: design,
      value: value,
      overall: overall,
      recommend: recommend
    });
  });
};

var adder = function() {
  var counter = 0;

  while (counter < 2500) {
    addData();
    counter++;
  }
};

adder();

