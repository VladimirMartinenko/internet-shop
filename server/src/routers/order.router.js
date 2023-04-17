const orderRouter = require('express').Router();
const orderController = require('../controllers/order.controller')


orderRouter.post('/', orderController.createOrderUser);
orderRouter.post('/buyer', orderController.createOrderBuyer);

orderRouter.get('/', orderController.getOrdersUser);
orderRouter.get('/', orderController.getOrdersBuyer);

orderRouter.get('/:orderId', orderController.getOrderUser);
orderRouter.get('/:orderId', orderController.getOrderBuyer);
orderRouter.put('/:orderId', orderController.updateOrder);
orderRouter.delete('/:orderId', orderController.deleteOrderUser);
orderRouter.delete('/:orderId', orderController.deleteOrderBuyer);

module.exports = orderRouter;