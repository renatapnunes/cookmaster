const { StatusCodes } = require('http-status-codes');
const updateRecipe = require('../../services/recipes/updateRecipe');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const { _id } = req.user;
  
    const updatedRecipe = await updateRecipe(id, newData, _id);
    if ('error' in updatedRecipe) return next(updatedRecipe.error);
    
    return res.status(StatusCodes.OK).send(updatedRecipe);
  } catch (err) {
    next(err);
  }
};
