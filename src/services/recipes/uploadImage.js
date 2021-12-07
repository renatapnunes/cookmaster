const { findById, updateById } = require('../../models/entity')('recipes');
const authorizedUser = require('./authorizedUser');

module.exports = async (id, image, userId) => {
  await authorizedUser(id, userId);

  const recipe = await findById(id);

  const URL = `localhost:3000/src/uploads/${image.filename}`;

  let updatedRecipe = await updateById(id, { ...recipe, image: URL });

  updatedRecipe = await findById(id);

  return updatedRecipe;
};
