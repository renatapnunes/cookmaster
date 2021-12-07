const recipeSchema = require('../../schemas/recipeSchema');
const { insert } = require('../../models/entity')('recipes');

module.exports = async (recipe, userId) => {
  const { error } = recipeSchema.validate(recipe);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const newRecipe = await insert({ ...recipe, userId });

  const recipeData = newRecipe.ops[0];
  
  return { recipe: recipeData };
};
