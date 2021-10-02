const express = require('express')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const {application} = require('express')

const router = express.Router()

router.get('/signup', (req,res) => {
    res.render('user/signup.ejs')
})

router.post('/signup', async (req,res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    User.create(req.body, (err,user) => {
        res.redirect('/user/login')
    })
})

router.get('/login', (req,res) => {

    res.render('user/login.ejs')
})

router.post("/login", (req, res) => {
    // get username and password
    const { username, password } = req.body;
    // check if user exists
    User.findOne({ username }, async (err, user) => {
      // handle if user doesn't exist
      if (err) res.send("user doesn't exist");
      // compare passwords
      const result = await bcrypt.compare(password, user.password);
      // check is match was a success
      if (!result) res.send("wrong password");
      // save login info in sessions
      req.session.loggedIn = true
      req.session.username = username
      // redirect to fruits page
      res.redirect("/animals");
    });
});

router.get('/logout', (req,res) => {
    // Destroy session and redirect to home page
    req.session.destroy((err) => {
        res.redirect('/')
    })
})

module.exports = router