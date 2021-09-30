const express = require('express')
const Animal = require('../models/animal')

const router = express.Router();

router.get('/', (req, res) => {
    Animal.find({}, (err, animals) => {
        res.render('animals/index.ejs', {animals})
    })
})

router.get('/:id', (req, res) => {
    Animal.findById(req.params.id, (err, animal) => {
        console.log(animal)
        res.render('animals/show.ejs', {animal})
    })
})

module.exports = router