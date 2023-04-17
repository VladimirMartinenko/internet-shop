const productInfoRouter = require('express').Router();
const productInfoController = require('../controllers/productInfo.controller');


productInfoRouter.post('/',productInfoController.createProductInfo);
productInfoRouter.get('/:id',productInfoController.findProductInfoById);
productInfoRouter.put('/:id',productInfoController.updateProductInfo);
productInfoRouter.delete('/:id',productInfoController.deleteProductInfo);

module.exports = productInfoRouter;