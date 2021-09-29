const express = require('express')
const Animal = require('../models/animal')

const router = express.Router();

router.get('/', (req, res) => {
    Animal.find({}, (err, animals) => {
        res.render('animals/index.ejs', {animals})
    })
})

module.exports = router