const recipeSchema = require('../../schemas/recipeSchema');
const { insert, findAll } = require('../../models/entity')('recipes');

const createRecipe = async (recipe, userId) => {
  const { error } = recipeSchema.validate(recipe);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const newRecipe = await insert({ ...recipe, userId });

  const recipeData = newRecipe.ops[0];
  
  return { recipe: recipeData };
};

const listAllRecipes = async () => {
  const recipeList = await findAll();

  return recipeList;
};

module.exports = {
  createRecipe,
  listAllRecipes,
};
