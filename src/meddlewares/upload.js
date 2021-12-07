const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_req, _image, callback) => callback(null, path.resolve(__dirname, '..', 'uploads')),
  filename: (req, _image, callback) => callback(null, `${req.params.id}.jpeg`),
});

module.exports = multer({ storage });
