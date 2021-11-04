const rescue = require('express-rescue');
const buscapeService = require('../services/buscapeService');
const sucess = require('../utils/success');

const createListSearch = rescue(async (req, res) => {
    const { category } = req.body;

    const result = await buscapeService.createListSearch(category);
    res.status(sucess.OK).json({ message: result });
});

module.exports = {
    createListSearch,
}
