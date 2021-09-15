const express = require('express');
const app = express();
const port = 3000;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/', (req, res) => {
    res.send(`
    <h1>
        99 Bottles of Beer on the Wall
    </h1>
    <a href="/98">Take one down pass it around</a>
    `);
})

app.get('/:number_of_bottles', (req, res) => {
    let numBottles = req.params.number_of_bottles;
    let ret = `<h1>${numBottles} Bottles of Beer on the Wall</h1>`;
    if (getRandomInt(10) % 10 === 0) numBottles = getRandomInt(100);
    if (numBottles && numBottles > 0) {
        ret += `<a href="/${numBottles-1}">Take one down pass it around</a>`;
    }
    else {
        ret += `<a href="/">Start over</a>`;
    }
    res.send(ret);
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});