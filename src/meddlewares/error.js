const { StatusCodes } = require('http-status-codes');

module.exports = async (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: err.details[0].message });
  }
  
  if ('status' in err) {
    return res.status(StatusCodes[err.status]).json({ message: err.message });
  }
  
  console.log(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};
