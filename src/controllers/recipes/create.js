const { StatusCodes } = require('http-status-codes');
const recipesService = require('../../services/recipes/recipesService');

module.exports = async (req, res, next) => {
  try {
    const recipe = req.body;
    const { _id } = req.user;

    const newRecipe = await recipesService.createRecipe(recipe, _id);
    if ('error' in newRecipe) return next(newRecipe.error);

    return res.status(StatusCodes.CREATED).send(newRecipe);
  } catch (err) {
    next(err);
  }
};
