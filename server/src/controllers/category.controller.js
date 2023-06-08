const createError = require("http-errors");
const { Category } = require("../db/models");

module.exports.createCategory = async (req, res, next) => {
  try {
    const { body } = req;
    const category = await Category.create(body);
    res.send({ data: category });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllCategory = async (req, res, next) => {
  try {
    const category = await Category.findAll();
    if (!category) {
      const err = createError(404, "cant find category");
      return next(err);
    }
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

module.exports.updateCategory = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [rowsUpdatet, [updateCategory]] = await Category.update(body, {
      where: { id },
      returning: true,
    });
    if (rowsUpdatet != 1) {
      const err = createError(404, "cant update category");
      return next(err);
    }
    res.send({ data: updateCategory });
  } catch (error) {
    next(error);
  }
};

module.exports.findCategoryBySection = async (req, res, next) => {
  try {
    const {
      query: { limit, page, sectionId },
    } = req;
    let offset = page * limit - limit;
    let category;
    if (!sectionId) {
      category = await Category.findAll();
      if (!category) {
        const err = createError(404, "cant find product");
        return next(err);
      }
    }
    if (sectionId) {
      category = await Category.findAll({ where: { sectionId } });
      console.log(category);
      if ((!category, category.length == 0)) {
        const err = createError(404, "cant find product");
        return next(err);
      }
    }
    res.send({ data: category, limit, offset });
  } catch (error) {
    next(error);
  }
};
