const { StatusCodes } = require('http-status-codes');
const recipesService = require('../../services/recipes/recipesService');

module.exports = async (req, res, next) => {
  try {
    const list = await recipesService.listAllRecipes();
    if ('error' in list) return next(list.error);

    return res.status(StatusCodes.OK).send(list);
  } catch (err) {
    next(err);
  }
};
