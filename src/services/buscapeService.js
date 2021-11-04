const buscapeModel = require('../models/buscapeModel');
const inforCompleteItems = require('../externalApi/buscapeScraping');

const listFormatter = (itemsArr, category) => {
    return {
        category,
        results: itemsArr,
    };
}
const createListSearch = async (category) => {
    const listItemsByCategory = await buscapeModel.getAllBySearch(category);

    if (listItemsByCategory !== null) return listItemsByCategory;

    const itemsList = await inforCompleteItems(category);
    const formatted = listFormatter(itemsList, category);

    const createList = await buscapeModel.createListSearch(formatted);

    return createList;
}

module.exports = createListSearch;
