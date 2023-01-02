const createHttpError = require('http-errors');
const {ProductToOrder} = require('../db/models');

module.exports.createProductToOrder = async (req, res, next) => {
  try {
    const {
      order: { id: orderId },
      product: {id: productId},
      body

    } = req;

    const productToOrder = await ProductToOrder.create({ orderId, productId},body);

    res.status(201).send({ data: productToOrder });
  } catch (error) {
    next(error);
  }
};
module.exports.getProductToOrders = async (req, res, next) => {
  try {
    const {
      order: { id: orderId },
    } = req;
    const productToOrder = await ProductToOrder.findAll({ where: { orderId } });

    if (!productToOrder) {
      return next(createHttpError(404, 'Orders not found'));
    }

    res.send({ data: productToOrder });
  } catch (error) {
    next(error);
  }
};

module.exports.getProductToOrder = async (req, res, next) => {
  try {
    const {
      params: { productToOrderId },
      order: { id: orderId },
    } = req;

    const productToOrder = await ProductToOrder.findOne({ where: { id: productToOrderId, orderId } });

    if (!productToOrder) {
      return next(createHttpError(404, 'Order not found'));
    }

    res.send({ data: productToOrder });
  } catch (error) {
    next(error);
  }
};
module.exports.updateProductToOrder = async (req, res, next) => {
  try {
    const {
      body,
      params: { productToOrderId },
    } = req;

    const [updatedCount, [productToOrder]] = await ProductToOrder.update(body, {
      where: { id: productToOrderId },
      returning: true,
    });

    if (updatedCount !== 1) {
      return next(createHttpError(404, 'Order not found'));
    }

    res.send({ data: productToOrder });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteProductToOrder = async (req, res, next) => {
  try {
    const {
      params: { productToOrderId },
      order: { id: orderId },
    } = req;

    const deletedCount = await ProductToOrder.destroy({
      where: { id: productToOrderId, orderId },
    });

    if (deletedCount !== 1) {
      return next(createHttpError(404, 'Order not found'));
    }

    res.send({ data: { id: productToOrderId } });
  } catch (error) {
    next(error);
  }
};