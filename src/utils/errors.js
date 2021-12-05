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

const noRecipe = {
  status: 'NOT_FOUND',
  message: 'recipe not found',
};

module.exports = {
  existingEmail,
  invalidLogin,
  tokenError,
  noRecipe,
};
