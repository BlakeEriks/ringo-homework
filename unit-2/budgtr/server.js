const express = require('express')
const app = express()
const budgets = require('./models/budget')

app.get('/budgets', (req,res) => {
    render('index.ejs', {budgets: budgets});
})

app.post('/budgets', (req,res) => {
    res.redirect('/budgets');
})

app.get('/budgets/new', (req,res) => {
    render('new.ejs');
})

app.get('/budgets/:index', (req,res) => {
    render('show.ejs');
})

app.listen(3000)