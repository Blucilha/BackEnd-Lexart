const express = require('express');
const cors = require('cors');
const routes = require('./router');
const handleError = require('../middlewares/handlerError');

const app = express();

app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes.buscapeRouter);
app.use(routes.mercadoLivreRouter);

app.use(handleError);

module.exports = app;
