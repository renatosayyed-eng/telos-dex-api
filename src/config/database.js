// Importing the mongoose module
const mongoose = require('mongoose');

// Importing the environment variables
const { CLUSTER_URI, COLLECTION, USER, PASS } = require('./env');

// Creating the connection URI
const URI = `mongodb+srv://${USER}:${PASS}@${CLUSTER_URI}/${COLLECTION}?retryWrites=true&w=majority`;

// Connecting to the database and checking the connection status
mongoose.connect(URI, { 
    autoIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log('Database connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database', err);
});