const { findById: findUserById } = require('../../models/entity')('users');
const { findById } = require('../../models/entity')('recipes');
const { noRecipe, unauthenticated } = require('../../utils/errors');

module.exports = async (id, userId) => {
  const { role } = await findUserById(userId);

  if (role !== 'admin') {
    const recipeFound = await findById(id);
    if (!recipeFound) return { error: noRecipe };
  
    if (recipeFound.userId !== userId) return { error: unauthenticated };
  }
};
