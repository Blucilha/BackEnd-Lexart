const rescue = require('express-rescue');
const mercadoLivreService = require('../services/mercadoLivreService');
const sucess = require('../utils/success');

const createListSearch = rescue(async (req, res) => {
    const { category } = req.body;

    const result = await mercadoLivreService.createListSearch(category);
    res.status(sucess.OK).json({ message: result });
});

module.exports = {
    createListSearch,
}
