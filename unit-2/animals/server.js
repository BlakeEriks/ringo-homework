require("dotenv").config(); 
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const AnimalRouter = require('./controllers/animal')
const UserRouter = require('./controllers/user')
const session = require('express-session')
const MongoStore = require('connect-mongo')

/* Create */
const app = express()

/* Middleware */
app.use(morgan("tiny"))                 // Logging
app.use(methodOverride('_method'))      // Override for put and delete requests
app.use(express.urlencoded({extended: false}))   // parse urlencoded request
app.use(express.static('public'))       //serve files from public statically
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
}))
app.use('/animals', AnimalRouter)
app.use('/user', UserRouter)

/* Server Listener */
app.get('/', (req,res) => {
    res.render('index.ejs')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log('Listening on port ' + PORT))
