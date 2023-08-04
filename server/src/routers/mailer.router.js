const mailerRouter = require('express').Router();
const mailerController = require('../controllers/mailer.controller');
const imageUpload = require('../utils/imagesUpload');

mailerRouter.post('/',mailerController.send);

module.exports = mailerRouter;