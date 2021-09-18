const express = require('express')
const app = express()
const budget = require('./models/budget')

/* Parse request bodies if content-type is application/x-www-form-urlencoded */
app.use( express.urlencoded({ extended : false }))
app.use(express.static('public'))

app.get('/budgets', (req,res) => {
    res.render('index.ejs', {budgets: budgets});
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