const connection = require('../connection');

module.exports = async (collection, email) => {
  const user = (await connection()).collection(collection).findOne({ email });

  return user;
};
