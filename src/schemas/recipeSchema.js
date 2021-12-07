const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required(),
  ingredients: Joi.string().required(),
  preparation: Joi.string().required(),
}).messages({
   'any.required': 'Invalid entries. Try again.',
   'string.base': 'Invalid entries. Try again',
});
