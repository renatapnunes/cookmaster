const { StatusCodes } = require('http-status-codes');
const createUser = require('../../services/users/createUser');

module.exports = async (req, res, next) => {
  try {
    const user = req.body;
  
    const newUser = await createUser(user);
    if ('error' in newUser) return next(newUser.error);
  
    return res.status(StatusCodes.CREATED).send(newUser);
  } catch (err) {
    next(err);
  }
};
