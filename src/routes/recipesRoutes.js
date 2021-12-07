const express = require('express');
const auth = require('../meddlewares/auth');
const createController = require('../controllers/recipes/create');
const readController = require('../controllers/recipes/read');
const updateController = require('../controllers/recipes/update');

const recipesRouter = express.Router({ mergeParams: true });

recipesRouter.post('/', auth, createController);
recipesRouter.get('/', readController);
recipesRouter.get('/:id', readController);
recipesRouter.put('/:id', auth, updateController);

module.exports = recipesRouter;
