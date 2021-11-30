const existingEmail = {
  status: 'CONFLICT',
  message: 'Email already registered',
};

const invalidLogin = {
  status: 'UNAUTHORIZED',
  message: 'Incorrect username or password',
};

module.exports = {
  existingEmail,
  invalidLogin,
};
