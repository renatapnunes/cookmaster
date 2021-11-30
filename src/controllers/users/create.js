const { StatusCodes } = require('http-status-codes');
const usersServices = require('../../services/users/usersServices');

module.exports = async (req, res, next) => {
  try {
    const user = req.body;
  
    const newUser = await usersServices.createUser(user);
    if ('error' in newUser) return next(newUser.error);
  
    return res.status(StatusCodes.CREATED).send(newUser);
  } catch (err) {
    next(err);
  }
};
