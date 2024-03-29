const createError = require("http-errors");
const { Buyer, Order, ProductToOrder, Product } = require("../db/models");
const createHttpError = require("http-errors");

module.exports.createBuyer = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(req);
    const buyer = await Buyer.create(body);
    if (!buyer) {
      return next(createHttpError(401, "помилка при створенні"));
    }

    res.send({ data: buyer });
  } catch (error) {
    next(error);
  }
};

module.exports.findBuyers = async (req, res, next) => {
  try {
    const buyer = await Buyer.findAll({
      include: [
        {
          model: Order,
          attributes: ["id", "sum"],
          include: [
            {
              model: Product,
              attributes: ["name", "price"],
              through: { attributes: ["quantity"] },
            },
          ],
        },
      ],
    });
    if ((!buyer, buyer.length == 0)) {
      const err = createError(404, "Покупців не знайдено");
      return next(err);
    }

    res.send({ data: buyer });
  } catch (error) {
    next(error);
  }
};

module.exports.findBuyerById = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const buyer = await Buyer.findByPk(id);
    if (!buyer) {
      const err = createError(404, "Buyer not found");
      return next(err);
    }

    res.send({ data: buyer });
  } catch (error) {
    next(error);
  }
};

module.exports.updateBuyer = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsUpdated, [buyer]] = await Buyer.update(body, {
      where: { id },
      returning: true,
    });

    if (rowsUpdated !== 1) {
      const err = createError(404, "Cant update Buyer");
      return next(err);
    }

    res.send({ data: buyer });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteBuyer = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedRows = await Buyer.destroy({
      where: { id },
    });

    if (deletedRows !== 1) {
      const err = createError(404, "Cant delete Buyer");
      return next(err);
    }

    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};
