const express = require('express')
const app = express()

const orders = [
    { item: "Mad cURLy Fries", created_at: Date.now() },
    { item: "Swirly Milkshake", created_at: Date.now() },
    { item: "Burly Burger", created_at: Date.now() }
]

app.use(express.urlencoded({extended: 'false'}))

app.get('/orders', (req,res) => {
    res.send(orders)
})

app.post('/orders', (req,res) => {
    if (!req.body.item) req.body.item = "NO DATA, You'll get an order of the Surly Soup"
    req.body.created_at = Date.now();
    orders.push(req.body)
    console.log('all orders: ', orders);
    res.redirect('/orders');
})

app.listen(3000)