const findByEmailModel = require('./findByEmail');
const insertModel = require('./insert');
const findAllModel = require('./findAll');

module.exports = (collection) => ({
  findByEmail: async (email) => findByEmailModel(collection, email),
  insert: async (entity) => insertModel(collection, entity),
  findAll: async () => findAllModel(collection),
});
