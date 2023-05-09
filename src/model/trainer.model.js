// Importing the mongoose module
const mongoose = require('mongoose');

// Schema for manipulating trainer data
const TrainerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true
    },
    age : {
        type: Number,
        required: true,
    },
    location : {
        type: String,
        required: true,
    },
    is_leader : {
        type: Boolean,
        required: true,
    },
    badges : {
        type: Array,
        required: false,
    },
    speciality : {
        type: String,
        required: true,
    },
    pokemons : {
        type: Array,
        required: true,
    },
});

// Exporting the model
module.exports = mongoose.model('trainers', TrainerSchema);