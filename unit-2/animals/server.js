const express = require('express')
const middleware = require('./utils/middleware')

/* Create */
const app = express()

/* Middleware */
middleware(app)

/* Server Listener */
app.get('/', (req,res) => {
    res.render('index.ejs')
})

app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT))