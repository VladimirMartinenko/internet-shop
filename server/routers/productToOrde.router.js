const productToOrderRouter = require('express').Router();
const productToOrderController = require('../controllers/productToOrder.controller');


productToOrderRouter.post('/', productToOrderController.createProductToOrder);

productToOrderRouter.get('/', productToOrderController.getProductToOrders);

productToOrderRouter.get('/:productToOrderId', productToOrderController.getProductToOrder);

productToOrderRouter.put('/:productToOrderId', productToOrderController.updateProductToOrder);
productToOrderRouter.delete('/:productToOrderId', productToOrderController.deleteProductToOrder);


module.exports = productToOrderRouter;