const { StatusCodes } = require('http-status-codes');
const listAllRecipes = require('../../services/recipes/listAllRecipes');
const listRecipeById = require('../../services/recipes/listRecipeById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    let list = {};

    if (id) {
      list = await listRecipeById(id);
    } else {
      list = await listAllRecipes();
    }

    if ('error' in list) return next(list.error);

    return res.status(StatusCodes.OK).send(list);
  } catch (err) {
    next(err);
  }
};
