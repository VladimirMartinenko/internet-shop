const productRouter = require('express').Router();
const productController = require('../controllers/product.controller');
const imageUpload = require('../utils/imagesUpload');

productRouter.post('/',imageUpload.single('img'),productController.createProduct);
productRouter.get('/',productController.findProductByCategory);
productRouter.get('/all',productController.findAllProduct);
productRouter.get('/:id',productController.findProductbyId);
productRouter.put('/:id',imageUpload.single('img'),productController.updateProduct);
productRouter.delete('/:id',productController.deleteProduct);

module.exports = productRouter;