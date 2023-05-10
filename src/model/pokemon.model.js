// Importing the mongoose module
const mongoose = require('mongoose');

// Schema for manipulating Pokémon data
const PokemonSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    pokedex_number : {
        type: Number,
        unique: true
    },
    attack : {
        type: Number,
        required: true,
    },
    defense : {
        type: Number,
        required: true,
    },
    speed : {
        type: Number,
        required: true,
    },
    hp : {
        type: Number,
        required: true,
    },
    type1 : {
        type: String,
        required: true,
    },
    type2 : {
        type: String,
        required: false,
    },
    is_legendary : {
        type: String,
        required: true,
    },
});

// Exporting the model
module.exports = mongoose.model('pokemons', PokemonSchema);