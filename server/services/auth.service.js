const createHttpError = require("http-errors");
const { RefreshToken } = require("../db/models");
const { User } = require("../db/models");
const jwtService = require("./jwt.service");

module.exports.createSession = async (user) => {
  const tokenPair = await jwtService.generateTokenPair({
    userId: user.id,
    email: user.email,
  });
  // console.log(tokenPair);
  await RefreshToken.create({
    token: tokenPair.refreshToken,
    userId: user.id,
  });
  // console.log(token);
  return {
    user,
    tokenPair,
  };
};

module.exports.refreshSession = async (refreshTokenInstance) => {
  const user = await User.findById(refreshTokenInstance.userId);

  if (!user) {
    throw new createHttpError(404, "User not found");
  }
  const tokenPair = await jwtService.generateTokenPair({
    userId: user._id,
    email: user.email,
  });

  await RefreshToken.findOneAndUpdate(
    { token: refreshTokenInstance.token },
    { token: tokenPair.refreshToken }
  );

  return {
    user,
    tokenPair,
  };
};
