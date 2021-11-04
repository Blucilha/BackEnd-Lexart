const connection = require('./connect');

const COLLECTION = 'buscape';

const createListSearch = async (items) => {
    const db = await connection();
    try {
        const result = db.collection(COLLECTION).insertOne(items);
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
