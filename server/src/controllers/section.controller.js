const createError = require("http-errors");
const { Section } = require("../db/models");

module.exports.createSection = async (req, res, next) => {
  try {
    const { body } = req;
    const section = await Section.create(body);
    if (!section) {
      const err = createError(404, "не вдалось створити розділ");
      return next(err);
    }
    res.send({ data: section });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllSection = async (req, res, next) => {
  try {
    const section = await Section.findAll();
    if (!section) {
      const err = createError(404, "не знайдено розділів");
      return next(err);
    }
    res.send({ data: section });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteSection = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deleteRows = await Section.destroy({ where: { id } });
    if (deleteRows != 1) {
      const err = createError(404, "не вдалося видалити розділ");
      return next(err);
    }
    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};

module.exports.updateSection = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [rowsUpdatet, [updateSection]] = await Section.update(body, {
      where: { id },
      returning: true,
    });
    if (rowsUpdatet != 1) {
      const err = createError(404, "не вдалось оновити розділ");
      return next(err);
    }
    res.send({ data: updateSection });
  } catch (error) {
    next(error);
  }
};
