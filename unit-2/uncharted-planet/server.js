const express = require('express')
const app = express()
const methodOverride = require('method-override')
const scientists = [
{name : "Steve", description: "loves ferns"},
{name : "Laura", description: "microbio specialist"},
{name : "Jordan", description: "huge fan"},
{name : "Jorge", description: "spell caster"},
{name : "Cameron", description: "moon baller"}
]
const categories = [
    {name: "plants",
    elements: ['fern', 'money plant', 'shrub']},
    {name: "flowers",
    elements: ['dandelion', 'sunflower', 'bougainvillea']}
];

/* MIDDLEWARE */
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req,res) => {
    res.render('index.ejs', {scientists: scientists, categories: categories})
})

app.post('/', (req,res) => {
    scientists.push(req.body)
    res.redirect('/')
})

app.get('/new', (req,res) => {
    res.render('new.ejs')
})

app.delete('/:index', (req,res) => {
    scientists.splice(req.params.index, 1);
    res.redirect('/')
})

app.put('/:index', (req,res) => {
    scientists[req.params.index] = req.body;
    res.redirect('/')
})

app.get('/:index/edit', (req,res) => {
    res.render('edit.ejs', {scientist : scientists[req.params.index], index: req.params.index})
})

app.get('/:index', (req, res) => {
    res.render('show.ejs', {scientist: scientists[req.params.index], index: req.params.index})
})

app.listen(3000)