/////////////////////////////
//  INCLUDE
/////////////////////////////
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const pokemon = require('./models/pokemon')
var typeColors = require('./public/typeColors.json')

/////////////////////////////
//  MIDDLEWARE
/////////////////////////////

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

/////////////////////////////
//  ROUTES
/////////////////////////////
app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {pokemon: pokemon})
})

app.post('/pokemon', (req,res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.get('/pokemon/new', (req,res) => {
    res.render('new.ejs')
})

app.get('/pokemon/:id/edit', (req,res) => {
    res.render('edit.ejs')
})

app.get('pokemon/:id', (req,res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id-1], typeColors: typeColors})
})

app.listen(3000);