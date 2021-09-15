const express = require('express');
const app = express();

const port = 3000;

app.get('/calc/:num1/:num2', (req, res) => {
    res.send('The sum is ' + (Number(req.params.num1) + Number(req.params.num2)));
});

app.get('/calcquery/:num1/:num2', (req, res) => {
    let func, operation = req.query.operation;
    if (!operation) {
        res.send('Please supply an operation');
        return;
    }
    if (operation === 'add') {
        func = (x,y) => x + y;
    }
    else if (operation === 'sub') {
        func = (x,y) => x - y;
    }
    else if (operation === 'mult') {
        func = (x,y) => x * y;
    }
    else if (operation === 'div') {
        func = (x,y) => x / y;
    }
    res.send(`The result is ` + func(Number(req.params.num1), Number(req.params.num2)));
});

app.listen(port, () => {
    console.log('Listening on port 3000');
});