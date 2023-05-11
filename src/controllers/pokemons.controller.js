const PokemonModel = require('../model/pokemon.model');

const getByQuery = async (req, res) => {
    try {
        const query = req.query;
        const pokemons = await PokemonModel.find(query).sort({pokedex_number: 1});
        if (!pokemons) {
            throw new Error();
        }
        return res.status(200).send(pokemons);
    } catch (err) {
        return res.status(400).json({
            error: '@pokemons/getByQuery',
            message: err.message || 'Failed to find Pokémon by query',
        });
    }
};
const create = async (req, res) => {
    try {
        const pokemon = new PokemonModel(req.body);
        const lastPokemon = await PokemonModel.findOne().sort({pokedex_number: -1});
        pokemon.pokedex_number = lastPokemon.pokedex_number + 1;
        await pokemon.save();
        return res.status(201).send(pokemon);
    } catch (err) {
        return res.status(400).json({
            error: '@pokemons/create',
            message: err.message || 'Failed to create Pokémon',
        });
    }
};
const updateById = async (req, res) => {
    try {
        const pokemon = await PokemonModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pokemon) {
            throw new Error();
        }
        return res.status(200).send(pokemon);
    } catch (err) {
        return res.status(400).json({
            error: '@pokemons/updateById',
            message: err.message || 'Failed to update Pokémon by id',
        });
    }
};
const updateByName = async (req, res) => {
    try {
        const pokemon = await PokemonModel.findOneAndUpdate({name: req.params.name}, req.body, { new: true });
        if (!pokemon) {
            throw new Error();
        }
        return res.status(200).send(pokemon);
    } catch (err) {
        return res.status(400).json({
            error: '@pokemons/updateByName',
            message: err.message || 'Failed to update Pokémon by name',
        });
    }
};
const deleteById = async (req, res) => {
    try {
        const pokemon = await PokemonModel.findByIdAndDelete(req.params.id);
        if (!pokemon) {
            throw new Error();
        }
        return res.status(200).send(pokemon);
    } catch (err) {
        return res.status(400).json({
            error: '@pokemons/deleteById',
            message: err.message || 'Failed to delete Pokémon by id',
        });
    }
};
const deleteByName = async (req, res) => {
    try {
        const pokemon = await PokemonModel.findOneAndDelete({name: req.params.name});
        if (!pokemon) {
            throw new Error();
        }
        return res.status(200).send(pokemon);
    } catch (err) {
        return res.status(400).json({
            error: '@pokemons/deleteByName',
            message: err.message || 'Failed to delete Pokémon by name',
        });
    }
};

module.exports = {
    create,
    updateById,
    updateByName,
    deleteById,
    deleteByName,
    getByQuery
};