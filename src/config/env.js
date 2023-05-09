// Setting file for environment variables
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    CLUSTER_URI: process.env.CLUSTER_URI,
    COLLECTION: process.env.COLLECTION,
    USER: process.env.USER,
    PASS: process.env.PASS,
};