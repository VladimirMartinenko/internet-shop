const { imagePath } = require('../constants');
const fs = require('fs');
const multer = require('multer');
const env = process.env.NODE_ENV || 'development';

const filePath = env === 'production' ? '/var/www/html/images/' : imagePath;

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, {
    recursive: true,
  });
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, filePath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageUpload = multer({ storage });

module.exports = imageUpload;