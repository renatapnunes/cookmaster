const findByEmailModel = require('./findByEmail');
const insertModel = require('./insert');

module.exports = (collection) => ({
  findByEmail: async (email) => findByEmailModel(collection, email),
  insert: async (entity) => insertModel(collection, entity),
});
