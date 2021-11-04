const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_URL = process.env.URL || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'Lexart';

let db = null;

const connection = () => {
    return db
            ? Promise.resolve(db)
            : MongoClient.connect(MONGO_URL, OPTIONS)
                .then((conn) => {
                    db = conn.db(DB_NAME);
                    return db;
                });
}

module.exports = connection;