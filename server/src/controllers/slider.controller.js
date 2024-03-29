const createError = require("http-errors");
const { Slider } = require("../db/models");
const { Product, ProductInfo } = require("../db/models");

module.exports.createSlider = async (req, res, next) => {
  try {
    const { body } = req;
    const sliders = await Slider.create(body);
    const slider = await Slider.findOne({
      where: { id: sliders.id },
      attributes: ["id"],
      include: { model: Product },
    });
    if (!slider) {
      const err = createError(404, "невдала спроба");
      return next(err);
    }
    res.send({ data: slider });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllSlider = async (req, res, next) => {
  try {
    const slider = await Slider.findAll({
      attributes: ["id"],
      include: { model: Product },
    });
    if (!slider) {
      const err = createError(404, "не знайдено");
      return next(err);
    }
    res.send({ data: slider });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSlider = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deleteRows = await Slider.destroy({ where: { id } });
    if (deleteRows != 1) {
      const err = createError(404, "неможливо видалити");
      return next(err);
    }
    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSlider = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [rowsUpdatet, [updateSection]] = await Slider.update(body, {
      where: { id },
      returning: true,
    });
    if (rowsUpdatet != 1) {
      const err = createError(404, "cant update slider");
      return next(err);
    }
    res.send({ data: updateSlider });
  } catch (error) {
    next(error);
  }
};
