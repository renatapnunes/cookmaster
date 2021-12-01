const existingEmail = {
  status: 'CONFLICT',
  message: 'Email already registered',
};

const invalidLogin = {
  status: 'UNAUTHORIZED',
  message: 'Incorrect username or password',
};

const tokenError = {
  status: 'UNAUTHORIZED',
  message: 'jwt malformed',
};

module.exports = {
  existingEmail,
  invalidLogin,
  tokenError,
};
