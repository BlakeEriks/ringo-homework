const express = require('express')
const app = express()
const budget = require('./models/budget')

/* Parse request bodies if content-type is application/x-www-form-urlencoded */
app.use( express.urlencoded({ extended : false }))
app.use(express.static('public'))

app.get('/budget', (req,res) => {
    res.render('index.ejs', {budget: budget});
})

app.post('/budget', (req,res) => {
    res.redirect('/budgets');
})

app.get('/budget/new', (req,res) => {
    res.render('new.ejs');
})

app.get('/budget/:index', (req,res) => {
    res.render('show.ejs', {item: budget[req.params.index]});
})

app.listen(3000)