const express = require('express');
const usersRoutes = require('./usersRoutes');

const route = express.Router({ mergeParams: true });

route.use('/users', usersRoutes);

module.exports = route;
