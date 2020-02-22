const express = require('express');
const sessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/users', sessionController.store);

module.exports = routes;
