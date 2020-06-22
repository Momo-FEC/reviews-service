const express = require('express');
const app = express();
const port = 3006;
const bodyParser = require('body-parser');
const path = require('path');
const Review = require('../database/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/../dist')));


app.get('/api/reviews', (req, res) => {
  Review.findAll().then(review => {
    res.send(review);
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

