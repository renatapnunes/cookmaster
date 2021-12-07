const jwt = require('jsonwebtoken');
const loginSchema = require('../../schemas/loginSchema');
const { findByEmail } = require('../../models/entity')('users');
const { invalidLogin } = require('../../utils/errors');

const API_SECRET = 'nadaseguro';

const JWT_CONFIG = {
  expiresIn: '30m', // token expira após 30min
  algorithm: 'HS256', //  criptografia: HMAC com SHA256 (chaves privadas)
};

module.exports = async (user) => {
  const { error } = loginSchema.validate(user);
  if (error) {
    error.status = 'UNAUTHORIZED';
    return { error };
  }

  const userFound = await findByEmail(user.email);
  if (!userFound || userFound.password !== user.password) return { error: invalidLogin };

  delete userFound.password;
  delete userFound.name;

  const token = jwt.sign({ data: userFound }, API_SECRET, JWT_CONFIG);

  return { token };
};
