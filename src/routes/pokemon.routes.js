const { Router } = require('express');

const routes = Router();
const {create, updateById, updateByName, deleteById, deleteByName, getByQuery} = require('../controllers/pokemons.controller');

routes.get('/pokemons', getByQuery);
routes.post('/pokemons', create);
routes.put('/pokemons/:id', updateById);
routes.put('/pokemons/name/:name', updateByName);
routes.delete('/pokemons/:id', deleteById);
routes.delete('/pokemons/name/:name', deleteByName);

module.exports = routes;