const createHttpError = require('http-errors');
const {ProductInfo} = require('../db/models');

module.exports.createProductInfo = async (req, res, next) => {
  try {
    const { product: { id: productId },body } = req;
    const productInfo = await ProductInfo.create({productId},body);
    res.send({ data: productInfo });
  } catch (error) {
    next(error);
  }
};
module.exports.findProductInfoById = async (req, res, next) => {
  try {
    const {
      params: { id },
      product: { id: productId }

    } = req;

    const productInfo = await ProductInfo.findOne({where:{id,productId}});

    if (!productInfo) {
      // throw new Error('404. User not found');
      // throw createError(404, 'User not found');
      const err = createHttpError(404, 'ProductInfo not found');
      return next(err);
    }

    res.send({ data: productInfo });
  } catch (error) {
    next(error);
  }
};

module.exports.updateProductInfo = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsUpdated, [productInfo]] = await ProductInfo.update(body, {
      where: { id },
      returning: true,
    });

    if (rowsUpdated !== 1) {
      return next(createHttpError('Cant update productInfo'));
    }


    res.send({ data: productInfo });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteProductInfo = async (req, res, next) => {
  try {
    const {
      params: { id },
      product: { id: productId }
    } = req;

    const deletedRows = await ProductInfo.destroy({
      where: { id ,productId},
    });

    if (deletedRows !== 1) {
      return next(createHttpError('Cant delete productInfo'));
    }

    res.send({ data: { id: productId } });
  } catch (error) {
    next(error);
  }
};