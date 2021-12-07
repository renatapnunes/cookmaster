const { StatusCodes } = require('http-status-codes');
const deleteRecipe = require('../../services/recipes/deleteRecipe');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;
  
    await deleteRecipe(id, _id);
    
    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    next(err);
  }
};
