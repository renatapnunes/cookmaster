const jwt = require('jsonwebtoken');
const { tokenError, unauthenticated } = require('../utils/errors');

const API_SECRET = 'nadaseguro';

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return next(unauthenticated);

    const decoded = jwt.verify(token, API_SECRET);
    if (!decoded) return next(tokenError);

    const user = decoded.data;
    req.user = user;

    next();
  } catch (err) {
    next(tokenError);
  }
};
