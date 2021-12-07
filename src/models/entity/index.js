const findByEmailModel = require('./findByEmail');
const insertModel = require('./insert');
const findAllModel = require('./findAll');
const findByIdModel = require('./findById');
const updateByIdModel = require('./updateById');

module.exports = (collection) => ({
  findByEmail: async (email) => findByEmailModel(collection, email),
  insert: async (entity) => insertModel(collection, entity),
  findAll: async () => findAllModel(collection),
  findById: async (id) => findByIdModel(collection, id),
  // findUserById: async (id) => findByIdModel(collection, id),
  updateById: (id, newData) => updateByIdModel(collection, id, newData),
});
