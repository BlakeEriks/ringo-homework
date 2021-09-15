const express = require('express');
const app = express();
const port = 3000;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});

app.get('/tip/:total/:perc', (req, res) => {
    let total = Number(req.params.total);
    let perc = Number(req.params.perc);
    res.send('The tip amount is: ' + total * perc / 100);
});

let magic8Responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:question', (req, res) => {
    let randomIndex = getRandomInt(magic8Responses.length);
    res.send(`<h1>${magic8Responses[randomIndex]}</h1>`);
});

app.get('/fibonnaci/:num', (req, res) => {
    let num = Number(req.params.num), cur = 1, prev = 0;
    if (num === 0) {
        res.send(true);
    }
    else {
        while (cur < num) {
            let next = cur + prev; // 1, 
            prev = cur; // 1
            cur = next; // 1
        }
        res.send(cur === num);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});