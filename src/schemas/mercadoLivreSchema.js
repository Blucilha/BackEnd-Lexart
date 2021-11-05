const Joi = require('joi');

const createListmercadoLivre = Joi.object({
    category: Joi.string().min(2).required(),
}).required();

module.exports = {
    createListmercadoLivre,
};
