const mongoose = require('./connection')

const {Schema, model} = mongoose;

const animalSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number,
    username: String
})

const Animal = model('Animal', animalSchema)

module.exports = Animal 