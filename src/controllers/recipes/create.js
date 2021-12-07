const { StatusCodes } = require('http-status-codes');
const createRecipe = require('../../services/recipes/createRecipe');

module.exports = async (req, res, next) => {
  try {
    const recipe = req.body;
    const { _id } = req.user;

    const newRecipe = await createRecipe(recipe, _id);
    if ('error' in newRecipe) return next(newRecipe.error);

    return res.status(StatusCodes.CREATED).send(newRecipe);
  } catch (err) {
    next(err);
  }
};
