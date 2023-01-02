const buyerRouter = require('express').Router();
const buyerController = require('../controllers/buyer.controller')

buyerRouter.post('/',buyerController.createBuyer);
buyerRouter.get('/',buyerController.findBuyers);
buyerRouter.get('/:id',buyerController.findBuyerById);
buyerRouter.put('/:id',buyerController.updateBuyer);
buyerRouter.delete('/:id',buyerController.deleteBuyer);
module.exports = buyerRouter;