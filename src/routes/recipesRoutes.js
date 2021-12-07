const express = require('express');
const auth = require('../meddlewares/auth');
const createController = require('../controllers/recipes/create');
const readController = require('../controllers/recipes/read');
const updateController = require('../controllers/recipes/update');
const deleteController = require('../controllers/recipes/delete');
const uploadController = require('../controllers/recipes/uploadImage');
const uploadMiddleware = require('../meddlewares/upload');

const recipesRouter = express.Router({ mergeParams: true });

recipesRouter.post('/', auth, createController);
recipesRouter.get('/', readController);
recipesRouter.get('/:id', readController);
recipesRouter.put('/:id', auth, updateController);
recipesRouter.delete('/:id', auth, deleteController);
recipesRouter.put('/:id/image/', auth, uploadMiddleware.single('image'), uploadController);

module.exports = recipesRouter;
