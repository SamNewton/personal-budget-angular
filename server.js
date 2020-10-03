const express = require('express');
const app = express();
const port = 3000;

const budget = {
    myBudget:[
        {
            title: 'Eat out',
            budget: 50
        },
        {
            title: 'Rent',
            budget: 400
        },
        {
            title: 'Groceries',
            budget: 100
        }
    ]
};

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.send(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});