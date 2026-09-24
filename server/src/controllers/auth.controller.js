const createHttpError = require("http-errors");
const RefreshToken = require("../db/models");
const { User } = require("../db/models");
const AuthService = require("../services/auth.service");
const klaviyo = require("../services/klaviyo.service");

module.exports.register = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    // if (!user) {
    //   return next(createHttpError(401, "registration error"));
    // }
    klaviyo.upsertProfile({
      email: user.email,
      phone: user.phone,
      firstName: user.firstName,
      lastName: user.lastName,
      properties: {
        source: "medimplant-shop",
        has_account: true,
      },
    });
    const sessionData = await AuthService.createSession(user);

    res.status(201).send({ data: sessionData });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.login = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(createHttpError(401, "user not found"));
    }
    if (user.password !== password) {
      return next(createHttpError(401, "invalid password"));
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
