// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require('./models/bakedgoods.js');

// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.urlencoded({extended : "false"}));
app.use(express.static('public'))

// =======================================
//              ROUTES
// =======================================
// index route
app.get('/bakedgoods', (req, res) => {
  res.render('index.ejs', {bakedGoods : bakedGoods});
});

app.post('/bakedgoods', (req,res) => {
  bakedGoods.push(req.body);
  res.redirect('/bakedGoods');
})

app.get('/bakedgoods/new', (req,res) => {
  res.render('new.ejs');
})

// show route
app.get('/bakedgoods/:id', (req, res) => {
  res.render('show.ejs', {bakedGood : bakedGoods[req.params.id]});
});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
