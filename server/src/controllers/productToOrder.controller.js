const createHttpError = require("http-errors");
const { ProductToOrder, Product, sequelize } = require("../db/models");
const { parseSizes, totalQuantity } = require("../utils/sizes");

module.exports.createProductToOrder = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const {
      params: { orderId, productId },
      query: { quantity, size },
    } = req;
    const qty = Number(quantity || 1);
    const sizeName = size ? String(size).trim() : null;
    if (!qty || qty < 1) {
      await t.rollback();
      return next(createHttpError(400, "invalid quantity"));
    }

    const product = await Product.findByPk(productId, { transaction: t });
    if (!product) {
      await t.rollback();
      return next(createHttpError(404, "product not found"));
    }

    const sizes = parseSizes(product.sizes);
    if (sizes.length) {
      if (!sizeName) {
        await t.rollback();
        return next(createHttpError(400, "size is required"));
      }
      const row = sizes.find((item) => item.name === sizeName);
      if (!row) {
        await t.rollback();
        return next(createHttpError(400, "invalid size"));
      }
      if (Number(row.quantity) < qty) {
        await t.rollback();
        return next(createHttpError(400, "not enough stock for this size"));
      }
      const nextSizes = sizes.map((item) =>
        item.name === sizeName
          ? { ...item, quantity: Number(item.quantity) - qty }
          : item
      );
      await Product.update(
        { sizes: nextSizes, quantity: totalQuantity(nextSizes) },
        { where: { id: productId }, transaction: t }
      );
    } else {
      if (Number(product.quantity) < qty) {
        await t.rollback();
        return next(createHttpError(400, "not enough stock"));
      }
      await Product.decrement("quantity", {
        by: qty,
        where: { id: productId },
        transaction: t,
      });
    }

    const productToOrder = await ProductToOrder.create(
      {
        orderId,
        productId,
        quantity: qty,
        size: sizeName,
      },
      { transaction: t }
    );
    if (!productToOrder) {
      await t.rollback();
      return next(createHttpError(404, "invalid data"));
    }

    await t.commit();
    res.status(201).send({ data: productToOrder });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};
module.exports.getProductToOrders = async (req, res, next) => {
  try {
    const {
      params: { orderId },
    } = req;
    const productToOrder = await ProductToOrder.findAll({ where: { orderId } });
    if (!productToOrder) {
      return next(createHttpError(404, "order not found"));
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
    const productToOrder = await ProductToOrder.findOne({
      where: { id: productToOrderId, orderId },
    });
    if (!productToOrder) {
      return next(createHttpError(404, "Order not found"));
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
      return next(createHttpError(404, "Order not found"));
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
      return next(createHttpError(404, "Order not found"));
    }
    res.send({ data: { id: productToOrderId } });
  } catch (error) {
    next(error);
  }
};
