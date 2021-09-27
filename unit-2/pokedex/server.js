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
app.get('/', (req,res) => {
    res.redirect('/pokemon')
})

app.get('/pokemon', (req,res) => {
    if (req.query.id) res.redirect('/pokemon/' + req.query.id);
    res.render('index.ejs', {pokemon: pokemon})
})

app.post('/pokemon', (req,res) => {
    if (pokemon[req.body.id]) res.redirect('/pokemon/error')
    req.body.stats = {  hp: req.body.hp,
                        attack: req.body.attack,
                        defense: req.body.defence,
                        spattack: req.body.spattack,
                        spdefence: req.body.spdefence,
                        speed: req.body.speed
                    }
    req.body.type = req.body.type.split(',')
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.put('/pokemon/:id', (req,res) => {
    req.body.stats = {  hp: req.body.hp,
                        attack: req.body.attack,
                        defense: req.body.defense,
                        spattack: req.body.spattack,
                        spdefense: req.body.spdefense,
                        speed: req.body.speed
                    }
    req.body.type = req.body.type.split(',')
    let pokeIndex = pokemon.findIndex( poke => poke.id === req.params.id )
    pokemon[pokeIndex] = req.body;
    console.log(pokemon[pokeIndex])
    res.redirect('/pokemon')
})

app.get('/pokemon/new', (req,res) => {
    res.render('new.ejs')
})

app.delete('/pokemon/:id', (req,res) => {
    let pokeIndex = pokemon.findIndex( poke => poke.id === req.params.id )
    pokemon.splice(pokeIndex,1);
    res.redirect('/pokemon')
})

app.get('/pokemon/:id/edit', (req,res) => {
    console.log(req.params.id)
    res.render('edit.ejs', {pokemon: pokemon.find( poke => poke.id === req.params.id)})
})

app.get('/pokemon/error', (req,res) => {
    res.render('error.ejs')
})

app.get('/pokemon/:id', (req,res) => {
    let poke = pokemon.find( item => Number(item.id) === Number(req.params.id));
    if (poke) {
        res.render('show.ejs', {pokemon: poke, typeColors: typeColors})
    }
    else {
        res.redirect('/pokemon/error')
    }
})

app.listen(3000);