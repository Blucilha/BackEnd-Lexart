const express = require('express');
const buscapeController = require('../controllers/buscapeController');
const mercadoLivreController = require('../controllers/mercadoLivreController');

const buscapeRouter = express.Router();
buscapeRouter.post('/buscape', buscapeController.createListSearch);

const mercadoLivreRouter = express.Router();
mercadoLivreRouter.post('/mercado-livre', mercadoLivreController.createListSearch);

module.exports = {
    buscapeRouter,
    mercadoLivreRouter,
}
