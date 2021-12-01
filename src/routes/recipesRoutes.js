const express = require('express');
const createController = require('../controllers/recipes/create');
const auth = require('../meddlewares/auth');

const recipesRouter = express.Router({ mergeParams: true });

recipesRouter.post('/', auth, createController);

module.exports = recipesRouter;
