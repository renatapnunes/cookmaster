const express = require('express');
const loginController = require('../controllers/login/login');

const loginRouter = express.Router({ mergeParams: true });

loginRouter.post('/', loginController);

module.exports = loginRouter;
