const { StatusCodes } = require('http-status-codes');
const recipesService = require('../../services/recipes/recipesService');

module.exports = async (req, res, next) => {
  try {
    const id = req.params;
    let list = {};

    if ('id' in id) {
      list = await recipesService.listRecipeById(id);
    } else {
      list = await recipesService.listAllRecipes();
    }

    if ('error' in list) return next(list.error);

    return res.status(StatusCodes.OK).send(list);
  } catch (err) {
    next(err);
  }
};
