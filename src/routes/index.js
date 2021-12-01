const express = require('express');
const usersRoutes = require('./usersRoutes');
const loginRoutes = require('./loginRoutes');
const recipesRoutes = require('./recipesRoutes');

const route = express.Router({ mergeParams: true });

route.use('/users', usersRoutes);
route.use('/login', loginRoutes);
route.use('/recipes', recipesRoutes);

module.exports = route;
