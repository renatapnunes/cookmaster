const { findById } = require('../../models/entity')('recipes');
const { noRecipe } = require('../../utils/errors');

module.exports = async (id) => {
  const recipeFound = await findById(id);
  if (!recipeFound) return { error: noRecipe };

  return recipeFound;
};
