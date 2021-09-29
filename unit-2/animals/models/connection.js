require('dotenv').config();

const mongoose = require('mongoose')

const DB_URL = process.env.DATABASE_URL
const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DB_URL, DB_CONFIG)

mongoose.connection
    .on('open', () => console.log('Connected to Mongoose'))
    .on('close', () => console.log('Disconnected from Mongoose'))
    .on('error', error => console.log(error))

module.exports = mongoose