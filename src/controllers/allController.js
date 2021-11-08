const rescue = require('express-rescue');
const buscapeService = require('../services/buscapeService');
const mercadoLivreService = require('../services/mercadoLivreService');
const sucess = require('../utils/success');

const createListSearch = rescue(async (req, res) => {
    const { category } = req.body;

    const buscape = await buscapeService.createListSearch(category);
    const mercadoLivre = await mercadoLivreService.createListSearch(category)
    res.status(sucess.OK).json({ message: {
        results: [...buscape.results, ...mercadoLivre.results]
    } });
});

module.exports = {
    createListSearch,
}
