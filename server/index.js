const express = require('express');
const app = express();
const port = 3006;
const database = require('../database');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/../dist')));



app.get('/api/reviews', (req, res) => {
  res.send('Hello World!');
});

// app.post('/api/ratings', (req, res) => {

// })

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

