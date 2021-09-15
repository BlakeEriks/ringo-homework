const express = require('express');

const app = express();

app.get('/Homer', (req, res) => {
    res.send('I am homer');
});

app.get('/Marge', (req, res) => {
    res.send('I am marge');
});

app.get('/Bart', (req, res) => {
    res.send('I am bart');
});

app.get('/Lisa', (req, res) => {
    res.send('I am Lisa');
});

app.get('/Maggie', (req, res) => {
    res.send('I am Maggie');
});

app.get('/Snowball-II', (req, res) => {
    res.send('I am snowball II');
});

app.get('/santas-little-helper', (req, res) => {
    res.send('I am santa\'s little helper');
});

app.get('/html', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Ruh roh Raggy!</h1>
        </body>
    </html>
    `)
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});