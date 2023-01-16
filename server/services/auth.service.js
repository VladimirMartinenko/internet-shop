const createHttpError = require("http-errors");
const { RefreshToken } = require("../db/models");
const { User } = require("../db/models");
const jwtService = require("./jwt.service");

module.exports.createSession = async (user) => {
  const tokenPair = await jwtService.generateTokenPair({
    userId: user.id,
    email: user.email,
    role: user.role
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
  const user = await User.findOne({where:{id:refreshTokenInstance.userId}});
  // console.log(user);

  if (!user) {
    throw new createHttpError(404, "User not found");
  }
  const tokenPair = await jwtService.generateTokenPair({
    userId: user.id,
    email: user.email,
    role: user.role
  });
  console.log(refreshTokenInstance.token);

  await RefreshToken.update({ token: tokenPair.refreshToken },{where:
    { token: refreshTokenInstance.token }}
    
  );

  return {
    user,
    tokenPair,
  };
};
