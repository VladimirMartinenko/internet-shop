const productToOrderRouter = require('express').Router();
const productToOrderController = require('../controllers/productToOrder.controller');


productToOrderRouter.post('/:orderId/:productId', productToOrderController.createProductToOrder);

productToOrderRouter.get('/:orderId', productToOrderController.getProductToOrders);

productToOrderRouter.get('/:productToOrderId', productToOrderController.getProductToOrder);

productToOrderRouter.put('/:productToOrderId', productToOrderController.updateProductToOrder);
productToOrderRouter.delete('/:productToOrderId', productToOrderController.deleteProductToOrder);


module.exports = productToOrderRouter;