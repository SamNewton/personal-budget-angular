// Budget API
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

var budget = require('./data.json');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.send(budget);
});

app.listen(port, () => {
    console.log(`API Served at http://localhost:${port}`);
});