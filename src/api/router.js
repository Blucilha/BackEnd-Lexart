const express = require('express');
const buscapeController = require('../controllers/buscapeController');
const mercadoLivreController = require('../controllers/mercadoLivreController');
const allController = require('../controllers/allController');

const buscapeRouter = express.Router();
buscapeRouter.post('/buscape', buscapeController.createListSearch);

const mercadoLivreRouter = express.Router();
mercadoLivreRouter.post('/mercado-livre', mercadoLivreController.createListSearch);

const allRouter = express.Router();
allRouter.post('/all', allController.createListSearch);

module.exports = {
    buscapeRouter,
    mercadoLivreRouter,
    allRouter,
}
