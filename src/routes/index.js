const express = require('express');
const usersRoutes = require('./usersRoutes');
const loginRoutes = require('./loginRoutes');

const route = express.Router({ mergeParams: true });

route.use('/users', usersRoutes);
route.use('/login', loginRoutes);

module.exports = route;
