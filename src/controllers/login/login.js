const { StatusCodes } = require('http-status-codes');
const loginService = require('../../services/login/loginService');

module.exports = async (req, res, next) => {
  try {
    const user = req.body;

    const response = await loginService.authorizeLogin(user);
    if ('error' in response) return next(response.error);

    return res.status(StatusCodes.OK).send(response);
  } catch (err) {
    next(err);
  }
};
