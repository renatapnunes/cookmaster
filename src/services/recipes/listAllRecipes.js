const { findAll } = require('../../models/entity')('recipes');

module.exports = async () => {
  const recipeList = await findAll();

  return recipeList;
};
