const { Router } = require('express');

const routes = Router();
const { listPokemons, listPokemonsSortedByAttack, listWaterPokemons, listLegendaryPokemons,
listPokemonsWithAttackAndSpeed, listPokemonsWithHpOrDefense, listPokemonsWithTypesPFF, listPokemonsWithTypesFF,
listPokemonsExceptLegendary } = require('../mongodb/queries');

routes.get('/cpokemons', listPokemons);
routes.get('/cpokemons/attack', listPokemonsSortedByAttack);
routes.get('/cpokemons/water', listWaterPokemons);
routes.get('/cpokemons/legendary', listLegendaryPokemons);
routes.get('/cpokemons/attack-speed', listPokemonsWithAttackAndSpeed);
routes.get('/cpokemons/hp-defense', listPokemonsWithHpOrDefense);
routes.get('/cpokemons/types-pff', listPokemonsWithTypesPFF);
routes.get('/cpokemons/types-ff', listPokemonsWithTypesFF);
routes.get('/cpokemons/except-legendary', listPokemonsExceptLegendary);

module.exports = routes;