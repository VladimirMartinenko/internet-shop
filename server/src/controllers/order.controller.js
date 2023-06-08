const createError = require("http-errors");
const { Order } = require("../db/models");

module.exports.createOrderUser = async (req, res, next) => {
  try {
    const {
      user: { id: userId },
    } = req;
    const order = await Order.create({ userId });
    res.status(201).send({ data: order });
  } catch (error) {
    next(error);
  }
};
module.exports.createOrderBuyer = async (req, res, next) => {
  try {
    const {
      body: { id: buyerId },
      query: { sum },
    } = req;
    const order = await Order.create({ buyerId, sum });
    res.send({ data: order });
  } catch (error) {
    next(error);
  }
};

module.exports.getOrdersUser = async (req, res, next) => {
  try {
    const {
      user: { id: userId },
    } = req;
    const orders = await Order.findAll({ where: { userId } });
    if (!orders) {
      return next(createError(404, "Orders not found"));
    }
    res.send({ data: orders });
  } catch (error) {
    next(error);
  }
};
module.exports.getOrdersBuyer = async (req, res, next) => {
  try {
    const {
      buyer: { id: buyerId },
    } = req;
    const orders = await Order.findAll({ where: { buyerId } });
    if (!orders) {
      return next(createError(404, "Orders not found"));
    }
    res.send({ data: orders });
  } catch (error) {
    next(error);
  }
};

module.exports.getOrderUser = async (req, res, next) => {
  try {
    const {
      params: { orderId },
      user: { id: userId },
    } = req;
    const order = await Order.findOne({ where: { id: orderId, userId } });
    if (!order) {
      return next(createError(404, "Order not found"));
    }
    res.send({ data: order });
  } catch (error) {
    next(error);
  }
};
module.exports.getOrderBuyer = async (req, res, next) => {
  try {
    const {
      params: { orderId },
      buyer: { id: buyerId },
    } = req;
    const order = await Order.findOne({ where: { id: orderId, buyerId } });
    if (!order) {
      return next(createError(404, "Order not found"));
    }
    res.send({ data: order });
  } catch (error) {
    next(error);
  }
};
module.exports.updateOrder = async (req, res, next) => {
  try {
    const {
      body,
      params: { orderId },
    } = req;
    const [updatedCount, [order]] = await Order.update(body, {
      where: { id: orderId },
      returning: true,
    });
    if (updatedCount !== 1) {
      return next(createError(404, "Order not found"));
    }
    res.send({ data: order });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOrderUser = async (req, res, next) => {
  try {
    const {
      params: { orderId },
      user: { id: userId },
    } = req;
    const deletedCount = await Order.destroy({
      where: { id: orderId, userId },
    });

    if (deletedCount !== 1) {
      return next(createError(404, "Order not found"));
    }
    res.send({ data: { id: orderId } });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteOrderBuyer = async (req, res, next) => {
  try {
    const {
      params: { orderId },
      buyer: { id: buyerId },
    } = req;
    const deletedCount = await Order.destroy({
      where: { id: orderId, buyerId },
    });
    if (deletedCount !== 1) {
      return next(createError(404, "Order not found"));
    }
    res.send({ data: { id: buyerId } });
  } catch (error) {
    next(error);
  }
};
