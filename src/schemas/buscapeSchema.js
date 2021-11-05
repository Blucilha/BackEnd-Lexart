const Joi = require('joi');

const createListBuscape = Joi.object({
    category: Joi.string().min(2).required(),
}).required();

module.exports = {
    createListBuscape,
};
