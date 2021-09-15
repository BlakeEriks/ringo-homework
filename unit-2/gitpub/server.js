const express = require('express');
const app = express();
const drinks = require('./models/drinks');

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks : drinks});
});

app.get('/drinks/:indexOfDrink', (req, res) => {
    res.send('drink show page');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});