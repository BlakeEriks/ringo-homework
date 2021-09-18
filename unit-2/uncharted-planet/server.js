const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.render('new.ejs')
})

app.get('/new', (req,res) => {
    res.render('new.ejs')
})

app.listen(3000)