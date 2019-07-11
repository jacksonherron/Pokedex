// Require the mongoose package and connect the data base to mongodb://localhost/Pokedex
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Pokedex', { useNewUrlParser: true });

// Export the ./Pokemon.js file
module.exports = {
    Pokemon: require('./Pokemon.js'),
    Trainer: require('./Trainer.js'),
    Badge: require('./Badge.js')
};