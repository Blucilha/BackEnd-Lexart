const mercadoLivreModel = require('../models/mercadoLivreModel');
const inforCompleteItems = require('../externalApi/apiMLB');
const schemas = require('../schemas/mercadoLivreSchema');
const clientError = require('../utils/clientError');

const listFormatter = (itemsArr, category) => {
    return {
        category,
        results: itemsArr,
    };
}
const createListSearch = async (category) => {
    const { error } = schemas.createListmercadoLivre.validate({ category });
    if (error) throw clientError.badRequest(error.details[0].message);

    const listItemsByCategory = await mercadoLivreModel.getAllBySearch(category);
    if (listItemsByCategory !== null) return listItemsByCategory;

    const itemsList = await inforCompleteItems(category);
    const formatted = listFormatter(itemsList, category);

    await mercadoLivreModel.createListSearch(formatted);
    const listItems = await mercadoLivreModel.getAllBySearch(category);

    return listItems;
}

module.exports = {
    createListSearch,
};