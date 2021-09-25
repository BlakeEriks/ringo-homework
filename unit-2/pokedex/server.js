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
    if (req.query.id) res.redirect('/pokemon/' + req.query.id);
    res.render('index.ejs', {pokemon: pokemon})
})

app.post('/pokemon', (req,res) => {
    req.body.stats = {  hp: req.body.hp,
                        attack: req.body.attack,
                        defense: req.body.defence,
                        spattack: req.body.spattack,
                        spdefence: req.body.spdefence,
                        speed: req.body.speed}
    req.body.type = req.body.type.split(',')
    console.log(req.body)
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.put('/pokemon/:id', (req,res) => {
    pokemon[req.params.id-1] = req.body;
    res.redirect('/pokemon')
})

app.get('/pokemon/new', (req,res) => {
    res.render('new.ejs')
})

app.delete('/pokemon/:id', (req,res) => {
    pokemon.splice(req.params.id-1,1);
    res.redirect('/pokemon')
})

app.get('/pokemon/:id/edit', (req,res) => {
    res.render('edit.ejs')
})

app.get('/pokemon/:id', (req,res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id-1], typeColors: typeColors})
})

app.listen(3000);