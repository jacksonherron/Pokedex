// ----------------- CONNECT EXPRESS AND MONGODB ----------------- //
const express = require('express');
const app = express();

const db = require('./models');
// console.log(db.Pokemon);

// ----------------- GLOBAL VARIABLES ----------------- //
const PORT = 3000;

// --- MIDDLEWARE --- //
app.use(express.static(`${__dirname}/public`));

// ----------------- ROUTES ----------------- //

// Home page
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// Return all poikemon as json endpoint
app.get('/api/pokemon', (req, res) => {
    db.Pokemon.find({}, (error, foundPokemons) => {
        if (error) return console.log(error);
        res.json(foundPokemons);
    });
});

// Return a specific pokemon by name
app.get('/api/pokemon/:name', (req, res) => {
    db.Pokemon.findOne({ name: req.params.name }, (error, foundPokemon) => {
        if (error) return console.log(error);
        res.json(foundPokemon);
    });
});

// return all trainers with their pokemon embedded in so they can be viewed, not just the pokemon id
app.get('/api/trainers', (req, res) => {
    db.Trainer.find({})
    .populate('pokemon')
    .exec((error, foundTrainers) => {
        if (error) return console.log( {error} );
        res.status(200).json(foundTrainers);
    });
});

// ----------------- SERVER LISTENER ----------------- //
app.listen(PORT, () => console.log(`Welcome Professor Oak.\nserver.js is connected at http://localhost:${PORT}`));