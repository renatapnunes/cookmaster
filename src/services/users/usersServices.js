const userSchema = require('../../schemas/userSchema');
const { findByEmail, insert } = require('../../models/entity')('users');
const { existingEmail } = require('../../utils/errors');

const createUser = async (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    error.status = 'BAD_REQUEST';
    return { error };
  }

  const userFound = await findByEmail(user.email);
  if (userFound) return { error: existingEmail };

  const newUser = await insert({ ...user, role: 'user' });

  const userData = newUser.ops[0];
  delete userData.password;
  
  return { user: userData };
};

module.exports = {  
  createUser,
};
