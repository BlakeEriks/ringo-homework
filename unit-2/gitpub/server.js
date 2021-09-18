const express = require('express');
const app = express();
const drinks = require('./models/drinks');
const food = require('./models/food')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/food', (req,res) => {
    res.render('food_index.ejs', {food : food})
})

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks : drinks});
});

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drink : drinks[req.params.id]});
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});