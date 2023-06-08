const { User } = require("../db/models");
const createError = require("http-errors");

module.exports.findUser = async (req, res, next) => {
  try {
    const {
      query: { limit, offset },
    } = req;
    const user = await User.findAll();
    if (!user) {
      const err = createError(404, "User not found");
      return next(err);
    }
    res.send({ data: user, limit, offset });
  } catch (error) {
    next(error);
  }
};

module.exports.findUserById = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id);
    if (!user) {
      const err = createError(404, "User not found");
      return next(err);
    }
    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [rowsUpdated, [user]] = await User.update(body, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated !== 1) {
      const err = createError(404, "Cant update user");
      return next(err);
    }
    res.send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const deletedRows = await User.destroy({
      where: { id },
    });
    if (deletedRows !== 1) {
      const err = createError(404, "Cant delete user");
      return next(err);
    }
    res.send({ data: { id } });
  } catch (error) {
    next(error);
  }
};
