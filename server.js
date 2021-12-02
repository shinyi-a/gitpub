const express = require('express');
const app = express();
const drinks = require('./models/drinks');
const food = require('./models/food');
const PORT = process.env.PORT || 5000;

app.use('/', express.static('views'));
app.use('/drinks', express.static('views'));
app.use('/drinks/:id', express.static('views'));
app.use('/food', express.static('views'));
app.use('/food/:id', express.static('views'));

app.get('/', (req, res) => {
    res.render('main.ejs', {food: food, drinks: drinks})
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs', {drinks: drinks})
})

app.get('/drinks/:id', (req, res) => {
    const drink = drinks[req.params.id];
    res.render('show.ejs', {drink: drink})
})

app.get('/food', (req, res) => {
    res.render('indexf.ejs', {food: food})
})

app.get('/food/:id', (req, res) => {
    const meal = food[req.params.id];
    res.render('showf.ejs', {meal: meal})
})

app.listen(PORT, () => {
    console.log(`server port ${PORT} is running`)
});