const { StatusCodes } = require('http-status-codes');
const uploadImage = require('../../services/recipes/uploadImage');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const image = req.file;
    const { _id } = req.user;
  
    const updatedRecipe = await uploadImage(id, image, _id);
    if ('error' in updatedRecipe) return next(updatedRecipe.error);
    
    return res.status(StatusCodes.OK).send(updatedRecipe);
  } catch (err) {
    next(err);
  }
};
