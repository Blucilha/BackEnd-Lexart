const Joi = require('joi');

const createListmercadoLivre = Joi.object({
    category: Joi.string().min(4).required(),
}).required();

module.exports = {
    createListmercadoLivre,
};
