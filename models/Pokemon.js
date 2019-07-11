// Bring in the Schema class from the mongoose package
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    name: String,
    type: String,
    level: Number,
    health: Number,
    image: String,
});

// Create a pointer to a new model in mongoose called 'Pokemon'
const Pokemon = mongoose.model('Pokemon', PokemonSchema);


// Export the Pokemon model
module.exports = Pokemon;