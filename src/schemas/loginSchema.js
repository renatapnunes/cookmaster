const Joi = require('@hapi/joi');

module.exports = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).messages({
   'any.required': 'All fields must be filled',
   'string.email': 'All fields must be filled',
   'string.base': 'All fields must be filled',
});
