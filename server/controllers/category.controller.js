const createError = require("http-errors");
const  {Category}  = require('../db/models');

module.exports.createCategory = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const category = await Category.create(body);
    res.send({ data: category });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllCategory = async (req, res, next) => {
  try {
    const category = await Category.findAll();
    const err = createError(404, "cant find category");
      return next(err);
    res.send({ data: category });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCategory = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deleteRows = await Category.destroy({ where: { id } });
    if (deleteRows != 1) {
      const err = createError(404, "cant delete category");
      return next(err);
    }

    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};