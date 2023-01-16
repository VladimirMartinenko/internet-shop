const { RefreshToken } = require("../db/models");
const jwtService = require("../services/jwt.service");

module.exports.checkAccessToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;
    console.log(authorization);

    const [authType, token] = authorization.split(" ");
    // console.log(authType);
    // console.log(token);

    const verifiedToken = await jwtService.verifyAccessToken(token);

    console.log(verifiedToken);

    next();
  } catch (error) {
    next(error);
  }
};

module.exports.checkRefreshToken = async (req, res, next) => {
  try {
    const {
      body: { refreshToken },
    } = req;
    // console.log(refreshToken);

    await jwtService.verifyRefreshToken(refreshToken);
    // console.log(refreshToken);

    const refreshTokenInstance = await RefreshToken.findOne({
      token: refreshToken,
    });
    console.log(refreshTokenInstance);
    if (!refreshTokenInstance) {
      return next(createHttpError(401, "invalid token"));
    }

    req.refreshTokenInstance = refreshTokenInstance;

    next();
  } catch (error) {
    next(error);
  }
};
