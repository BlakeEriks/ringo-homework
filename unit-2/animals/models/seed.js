const animals = [
    {
        species: 'Monkey',
        extinct: false,
        location: 'Jungle',
        lifeExpectancy: 12
    },
    {
        species: 'Snake',
        extinct: false,
        location: 'Desert',
        lifeExpectancy: 15
    },
    {
        species: 'Bear',
        extinct: false,
        location: 'Forest',
        lifeExpectancy: 18
    },
    {
        species: 'Mammoth',
        extinct: true,
        location: 'Tundra',
        lifeExpectancy: 43
    }
]

const mongoose = require('./connection')
const Animal = require('./animal')

mongoose.connection.on('open', () => {
    Animal.deleteMany({}, (err,data) => {
        console.log('Removed all fruits in DB')
        Animal.create(animals, (err,data) => {
            console.log('Added started animals')
            mongoose.connection.close()
        })
    })
})
