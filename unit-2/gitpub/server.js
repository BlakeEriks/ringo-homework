const express = require('express');
const app = express();
const drinks = require('./models/drinks');

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks : drinks});
});

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drink : drinks[req.params.id]});
});

app.listen(3001, () => {
    console.log('listening on port 3000');
});