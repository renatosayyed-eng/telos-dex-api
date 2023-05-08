// Importing the express module
const express = require('express');

// Importing the environment variables
const { PORT } = require('./config/env');

// Creating an express applications
const app = express();

// Setting up the basic route
app.get('/', (req, res) => {
    res.end('Setting up the basic structure of a Node.js API');
});

// Setting up the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});