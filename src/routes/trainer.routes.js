const { Router } = require('express');

const routes = Router();
const {getByID, getByName, create, updateById, updateByName, deleteById, deleteByName } = require('../controllers/trainers.controller');

routes.get('/trainers/:id', getByID);
routes.get('/trainers/:name', getByName);
routes.post('/trainers', create);
routes.put('/trainers/:id', updateById);
routes.put('/trainers/:name', updateByName);
routes.delete('/trainers/:id', deleteById);
routes.delete('/trainers/:name', deleteByName);

module.exports = routes;