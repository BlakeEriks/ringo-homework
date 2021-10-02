const express = require('express')
const Animal = require('../models/animal')

const router = express.Router();

router.use((req,res,next) => {
    if (req.session.loggedIn) {
        next();
    }
    else {
        res.redirect('/user/login')
    }
})

router.get('/', (req, res) => {
    Animal.find({username: req.session.username}, (err, animals) => {
        res.render('animals/index.ejs', {animals})
    })
})

router.delete('/:id', (req,res) => {
    Animal.findByIdAndDelete(req.params.id, (err, animal) => {
        res.redirect('/animals')
    })
})

router.post('/', (req,res) => {
    req.body.extinct = req.body.extinct === 'on'
    req.body.username = req.session.username
    Animal.create(req.body, (err,animal) => {
        res.redirect('/animals')
    })
})

router.put('/:id', (req,res) => {
    req.body.extinct = req.body.extinct === 'on'
    Animal.findByIdAndUpdate(req.params.id, req.body, (err,animal) => {
        res.redirect('/animals')
    })
})

router.get('/new', (req,res) => {
    res.render('animals/new.ejs')
})

router.get('/:id/edit', (req,res) => {
    Animal.findById(req.params.id, (err, animal) => {
        res.render('animals/edit.ejs', {animal})
    })
})

router.get('/:id', (req, res) => {
    Animal.findById(req.params.id, (err, animal) => {
        res.render('animals/show.ejs', {animal})
    })
})

module.exports = router