const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).messages({
   'any.required': 'Invalid entries. Try again.',
   'string.email': 'Invalid entries. Try again.',
   'string.base': 'Invalid entries. Try again',
});
