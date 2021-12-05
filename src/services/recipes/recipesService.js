const recipeSchema = require('../../schemas/recipeSchema');
const { insert, findAll, findById } = require('../../models/entity')('recipes');
const { noRecipe } = require('../../utils/errors');

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

const listRecipeById = async (id) => {
  const recipe = await findById(id);
  if (!recipe) return { error: noRecipe };

  return recipe;
};

module.exports = {
  createRecipe,
  listAllRecipes,
  listRecipeById,
};
