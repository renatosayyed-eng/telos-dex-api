const { Router } = require('express');

const routes = Router();
const { listPokemons, listPokemonsSortedByAttack, listWaterPokemons, listLegendaryPokemons,
listPokemonsWithAttackAndSpeed, listPokemonsWithHpOrDefense, listPokemonsWithTypesPFF, listPokemonsWithTypesFF,
listPokemonsExceptLegendary } = require('../mongodb/queries');

routes.get('/pokemons', listPokemons);
routes.get('/pokemons/attack', listPokemonsSortedByAttack);
routes.get('/pokemons/water', listWaterPokemons);
routes.get('/pokemons/legendary', listLegendaryPokemons);
routes.get('/pokemons/attack-speed', listPokemonsWithAttackAndSpeed);
routes.get('/pokemons/hp-defense', listPokemonsWithHpOrDefense);
routes.get('/pokemons/types-pff', listPokemonsWithTypesPFF);
routes.get('/pokemons/types-ff', listPokemonsWithTypesFF);
routes.get('/pokemons/except-legendary', listPokemonsExceptLegendary);

module.exports = routes;