const buscapeModel = require('../models/buscapeModel');
const inforCompleteItems = require('../externalApi/buscapeScraping');
const schemas = require('../schemas/buscapeSchema');
const clientError = require('../utils/clientError');

const listFormatter = (itemsArr, category) => {
    return {
        category,
        results: itemsArr,
    };
}
const createListSearch = async (category) => {
    const { error } = schemas.createListBuscape.validate({ category });
    if (error) throw clientError.badRequest(error.details[0].message);

    const listItemsByCategory = await buscapeModel.getAllBySearch(category);
    if (listItemsByCategory !== null) return listItemsByCategory;

    const itemsList = await inforCompleteItems(category);
    const formatted = listFormatter(itemsList, category);

    await buscapeModel.createListSearch(formatted);
    const listItems = await buscapeModel.getAllBySearch(category);

    return listItems;
}

module.exports = {
    createListSearch,
};
