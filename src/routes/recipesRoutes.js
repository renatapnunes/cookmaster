const express = require('express');
const auth = require('../meddlewares/auth');
const createController = require('../controllers/recipes/create');
const readController = require('../controllers/recipes/read');

const recipesRouter = express.Router({ mergeParams: true });

recipesRouter.post('/', auth, createController);
recipesRouter.get('/', readController);
recipesRouter.get('/:id', readController);

module.exports = recipesRouter;
