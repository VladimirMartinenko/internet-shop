const { imagePath } = require('../constants');

// const filePath = env === 'production' ? '/var/www/html/images/' : imagePath;

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagePath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageUpload = multer({ storage });

module.exports = imageUpload;