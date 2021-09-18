const express = require('express')
const app = express()
const scientists = []

/* MIDDLEWARE */
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.render('index.ejs', {scientists: scientists})
})

app.post('/', (req,res) => {
    scientists.push(req.body)
    res.redirect('/')
})

app.get('/new', (req,res) => {
    res.render('new.ejs')
})

app.get('/:index', (req, res) => {
    res.render('show.ejs', {scientist: scientists[req.params.index]})
})

app.listen(3000)