const connection = require('./connect');

const COLLECTION = 'mercado_livre';

const createListSearch = async (item) => {
    const db = await connection();
    try {
        const result = db.collection(COLLECTION).insertOne(item);
        return result;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

const getAllBySearch = async (category) => {
    const db = await connection();
    try {
        const result = db.collection(COLLECTION).findOne({ category });
        return result;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

module.exports = {
    createListSearch,
    getAllBySearch,
}