// Importing the express module
const express = require('express');

// Importing the environment variables
const { PORT } = require('./config/env');
// Importing the database configuration
require('./config/database');
// Importing the routes
const challengeRoutes = require('./routes/challenge.routes');

// Creating an express applications
const app = express();

app.use(express.json());
app.use(challengeRoutes);

// Setting up the basic route
app.get('/', (req, res) => {
    const routes = [
        { route: '/pokemons', description: 'List all Pokémons showing only their name' },
        { route: '/pokemons/attack', description: 'List all Pokémons showing only their name and attack, sorted by attack' },
        { route: '/pokemons/water', description: 'List pokémons of the water type, sorted by speed' },
        { route: '/pokemons/legendary', description: 'List all legendary Pokémons' },
        { route: '/pokemons/attack-speed', description: 'List all Pokémons with attack higher than 70 and speed higher than 60' },
        { route: '/pokemons/hp-defense', description: 'List all Pokémons with hp lower than 60 or defense lower than 60' },
        { route: '/pokemons/types-pff', description: 'List all Pokémons with type1 psychic, fighting or fire' },
        { route: '/pokemons/types-ff', description: 'List all Pokémons with type1 fire and type2 flying' },
        { route: '/pokemons/except-legendary', description: 'List all Pokémons except the legendary ones' },
    ];

    const routesString = routes.reduce((acc, route) => {
        return `${acc} ${route.route} - ${route.description} <br><br>`;
    }, '');

    res.send(`<h1>Routes</h1> <h2>Pre-configured queries</h2> ${routesString}`);
});

// Setting up the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});