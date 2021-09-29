////////////////////////////////////////////
// Import dependencies
////////////////////////////////////////////
const express = require("express") // import express
const morgan = require("morgan") // import morgan
const methodOverride = require("method-override")
const FruitRouter = require('./controllers/fruit')

/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = express()

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(express.urlencoded({extended: true})) // parse urlencoded request bodies
app.use(express.static("public")) // serve files from public statically
app.use('/fruits', FruitRouter)

////////////////////////////////////////////
// Routes
////////////////////////////////////////////
app.get('/', (req,res) => {
    res.send('your server is running... better go catch it.')
})

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT
app.listen(PORT, () => console.log('Now listening on port ' + PORT))