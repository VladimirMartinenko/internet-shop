const productRouter = require('express').Router();
const productController = require('../controllers/product.controller');
const imageUpload = require('../utils/imagesUpload');

productRouter.post(
  "/",
  imageUpload.fields([
    { name: "img", maxCount: 1 },
    { name: "img2", maxCount: 1 },
  ]),
  productController.createProduct
);
productRouter.get('/',productController.findProductByCategory);
productRouter.get('/all',productController.findAllProduct);
productRouter.get('/:id',productController.findProductbyId);
productRouter.put(
  "/:id",
  imageUpload.fields([
    { name: "img", maxCount: 1 },
    { name: "img2", maxCount: 1 },
  ]),
  productController.updateProduct
);
productRouter.delete('/:id',productController.deleteProduct);

module.exports = productRouter;