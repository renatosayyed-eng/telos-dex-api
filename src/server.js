// Importing the express module
const express = require('express');

// Importing the environment variables
const { PORT } = require('./config/env');
// Importing the database configuration
require('./config/database');

// Creating an express applications
const app = express();

// Setting up the basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Pokedex API');
});

// Setting up the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});