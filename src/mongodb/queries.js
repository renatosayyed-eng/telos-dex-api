const PokemonModel = require('../model/pokemon.model');

// List all Pokémons showing only their name, sorted by pokédex number
const listPokemons = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({}, {name: 1, _id: 0}).sort({pokedex_number: 1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listPokemons',
            message: err.message || 'Failed to list all Pokémons',
        });
    }
};

// List all Pokémons showing only their name and attack, sorted by attack
const listPokemonsSortedByAttack = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({}, {name: 1, attack: 1, _id: 0}).sort({attack: -1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listPokemonsSortedByAttack',
            message: err.message || 'Failed to list all Pokémons sorted by attack',
        });
    }
};

// List pokémons of the water type, showing only their name and speed, sorted by speed
const listWaterPokemons = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({ $or: [{type1 : 'water'}, {type2 : 'water'}] }, {name: 1, speed: 1, _id: 0}).sort({speed: -1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listWaterPokemons',
            message: err.message || 'Failed to list all water Pokémons',
        });
    }
};

// List all legendary Pokémons, showing only their name, pokédex number and type 1, sorted by pokédex number
const listLegendaryPokemons = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({is_legendary: "1"}, {name: 1, pokedex_number: 1, type1: 1, _id: 0}).sort({pokedex_number: 1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listLegendaryPokemons',
            message: err.message || 'Failed to list all legendary Pokémons',
        });
    }
};

// List all Pokémons with attack higher than 70 and speed higher than 60, showing only their id, name, attack, defense, speed and hp, sorted by pokédex number
const listPokemonsWithAttackAndSpeed = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({attack: {$gt: 70}, speed: {$gt: 60}}, {type1: 0, type2: 0, is_legendary: 0, pokedex_number: 0}).sort({pokedex_number: 1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listPokemonsWithAttackAndSpeed',
            message: err.message || 'Failed to list all Pokémons with attack higher than 70 and speed higher than 60',
        });
    }
};

// List all Pokémon with hp lower than 60 or defense lower than 60, showing only their id, name, hp and defense, sorted by pokédex number
const listPokemonsWithHpOrDefense = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({$or: [{hp: {$lt: 60}}, {defense: {$lt: 60}}]}, {_id: 1, name: 1, hp: 1, defense:1}).sort({pokedex_number: 1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listPokemonsWithHpOrDefense',
            message: err.message || 'Failed to list all Pokémon with hp lower than 60 or defense lower than 60',
        });
    }
};

// List all Pokémnos with type1 equal to psychic or fighting or fire, showing only their name, type1 and if they are legendary, sorted by pokédex number
const listPokemonsWithTypesPFF = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({type1: {$in: ['psychic', 'fighting', 'fire']}}, {name: 1, type1: 1, is_legendary: 1, _id: 0}).sort({pokedex_number: 1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listPokemonsWithTypesPFF',
            message: err.message || 'Failed to list all Pokémnos with type1 equal to psychic or fighting or fire',
        });
    }
};

// List all Pokémons with type1 equal to fire and type2 equal to flying, showing only their name, type1 and type2, sorted by name (ascending)
const listPokemonsWithTypesFF = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({type1: 'fire', type2: 'flying'}, {name: 1, type1: 1, type2: 1, _id: 0}).sort({name: 1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listPokemonsWithTypesFF',
            message: err.message || 'Failed to list all Pokémons with type1 equal to fire and type2 equal to flying',
        });
    }
};

// List all Pokémons except the legendary ones, showing only their name and pokédex number, sorted by pokédex number
const listPokemonsExceptLegendary = async (req, res) => {
    try {
        const pokemons = await PokemonModel.find({is_legendary: {$ne: "1"}}, {name: 1, pokedex_number: 1, _id: 0}).sort({pokedex_number: 1});
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@queries/listPokemonsExceptLegendary',
            message: err.message || 'Failed to list all Pokémons except the legendary ones',
        });
    }
};