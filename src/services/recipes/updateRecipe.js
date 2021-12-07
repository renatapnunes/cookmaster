const recipeSchema = require('../../schemas/recipeSchema');
const { findById: findUserById } = require('../../models/entity')('users');
const { findById, updateById } = require('../../models/entity')('recipes');
const { noRecipe, unauthenticated } = require('../../utils/errors');

const authorizedUser = async (id, userId) => {
  const recipeFound = await findById(id);
  if (!recipeFound) return { error: noRecipe };

  if (recipeFound.userId !== userId) return { error: unauthenticated };

  return recipeFound;
};

module.exports = async (id, newData, userId) => {
  const { error } = recipeSchema.validate(newData);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const { role } = await findUserById(userId);
  if (role !== 'admin') {
    const authorized = await authorizedUser(id, userId);
    if ('error' in authorized) return authorized;
  }

  let updatedRecipe = await updateById(id, { ...newData, userId });

  updatedRecipe = await findById(id);

  return updatedRecipe;
};
