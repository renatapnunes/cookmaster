const recipeSchema = require('../../schemas/recipeSchema');
const { findById, updateById } = require('../../models/entity')('recipes');
const authorizedUser = require('./authorizedUser');

module.exports = async (id, newData, userId) => {
  const { error } = recipeSchema.validate(newData);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  await authorizedUser(id, userId);

  let updatedRecipe = await updateById(id, { ...newData, userId });

  updatedRecipe = await findById(id);

  return updatedRecipe;
};
