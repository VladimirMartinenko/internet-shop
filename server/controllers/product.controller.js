const createError = require("http-errors");
const { Product } = require("../db/models");

module.exports.createProduct = async (req, res, next) => {
  try {
    const { body } = req;
    const product = await Product.create(body);
    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllProduct = async (req, res, next) => {
  try {
    const {
      query: { limit, offset },
    } = req;
    const products = await Product.findAll();
    res.send({ data: products, limit, offset });
  } catch (error) {
    next(error);
  }
};

module.exports.findProductbyId = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const product = await Product.findByPk(id);
    if (!user) {
      const err = createError(404, "Product not found");
      return next(err);
    }
    res.send({ data: product });
  } catch (error) {
    next(error);
  }
};
module.exports.updateProduct = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [rowsUpdatet, [updateProduct]] = await Product.update(body, {
      where: { id },
      returning: true,
    });
    if (rowsUpdatet != 1) {
      const err = createError(404, "cant update product");
      return next(err);
    }

    res.send({ data: updateProduct });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deleteRows = await Product.destroy({ where: { id } });
    if (deleteRows != 1) {
      const err = createError(404, "cant delete product");
      return next(err);
      
    }

    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};
