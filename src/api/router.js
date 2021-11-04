const express = require('express');
const buscapeController = require('../controllers/buscapeController');

const buscapeRouter = express.Router();
buscapeRouter.post('/buscape', buscapeController.createListSearch);

module.exports = {
    buscapeRouter,
}
