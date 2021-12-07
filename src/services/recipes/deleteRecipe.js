const authorizedUser = require('./authorizedUser');
const { deleteById } = require('../../models/entity')('recipes');

module.exports = async (id, userId) => {
  await authorizedUser(id, userId);

  await deleteById(id);
};
