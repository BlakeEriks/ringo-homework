const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const {application} = require('express')

const router = express.Router()

router.get('/signup', (req,res) => {
    res.render('user/signup.ejs')
})

router.post('/signup', (req,res) => {
    res.send('signup')
})

router.get('/login', (req,res) => {
    res.render('user/login.ejs')
})

router.post('login', (req,res) => {
    res.render('login')
})

module.exports = router