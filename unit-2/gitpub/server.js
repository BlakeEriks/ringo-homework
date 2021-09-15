const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.send('drink index');
});

app.get('/drinks/:indexOfDrink', (req, res) => {
    res.send('drink show page');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});