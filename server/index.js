const express = require('express');
const app = express();
const port = 3006;
const bodyParser = require('body-parser');
const path = require('path');
const Review = require('../database/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/:id', express.static(path.join(__dirname, '/../dist')));

app.get('/', (req, res) => {
  res.redirect('/1');
});

app.get('/api/reviews/:id', (req, res) => {
  Review.findAll({ where: { phoneId: req.params.id }}).then(review => {
    res.send(review);
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));

module.exports = app;