const createHttpError = require("http-errors");
const RefreshToken = require("../db/models");
const { User } = require("../db/models");
const AuthService = require("../services/auth.service");

module.exports.register = async (req, res, next) => {
  try {
    const { body } = req;
    // console.log(body);
    const user = await User.create(body);
    // console.log(user.id);

    const sessionData = await AuthService.createSession(user);
    //  console.log(sessionData);

    res.status(201).send({ data: sessionData });
  } catch (error) {
    next(error);
  }
};
module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({ email });

    if (!user) {
      return next(createHttpError(401, "invalid data"));
    }

    if (user.password !== password) {
      return next(createHttpError(401, "invalid data"));
    }
    const sessionData = await AuthService.createSession(user);

    res.status(200).send({ data: sessionData });
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  const { refreshTokenInstance } = req;
  const sessionData = await AuthService.refreshSession(refreshTokenInstance);
  res.status(200).send({ data: sessionData });
};
