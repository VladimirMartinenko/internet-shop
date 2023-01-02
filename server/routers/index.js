const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();
const buyerRouter = require('./buyer.router');
const categoryRouter = require('./category.router');
const orderRouter = require('./order.router');
const productRouter = require('./product.router');
const productInfoRouter = require('./productInfo.router');
const productToOrderRouter = require('./productToOrde.router');
// const authRouter = require('./user.router');

router.use('/auth', userRouter);
router.use('/buyer', buyerRouter);
router.use('/category', categoryRouter);
router.use('/order', orderRouter);
router.use('/product', productRouter);
router.use('/productInfo', productInfoRouter);
router.use('/productToOrder', productToOrderRouter);
module.exports = router;