const productRouter = require('express').Router();
const productController = require('../controllers/product.controller')

productRouter.post('/',productController.createProduct);
productRouter.get('/',productController.findAllProduct);
productRouter.get('/:id',productController.findProductbyId);
productRouter.put('/:id',productController.updateProduct);
productRouter.delete('/:id',productController.deleteProduct);

module.exports = productRouter;