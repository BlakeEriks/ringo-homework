/////////////////////////////
//  INCLUDE
/////////////////////////////
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const pokemon = require('./models/pokemon')

/////////////////////////////
//  MIDDLEWARE
/////////////////////////////

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

/////////////////////////////
//  ROUTES
/////////////////////////////
app.get('/', (req,res) => {
    res.render('index.ejs', {pokemon: pokemon})
})

app.listen(3000);