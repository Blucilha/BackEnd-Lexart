const Joi = require('joi');

const createListBuscape = Joi.object({
    category: Joi.string().min(4).required(),
}).required();

module.exports = {
    createListBuscape,
};
