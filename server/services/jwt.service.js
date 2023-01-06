const jwt = require('jsonwebtoken');
const { promisify } = require("util");
const {
  JWT_ACCESS_SECRET,
  JWT_ACCESS_EXPIRATION_TIME,
  JWT_REFRESH_EXPIRATION_TIME,
  JWT_REFRESH_SECRET,
} = require("../constants");

const jwtSign = promisify(jwt.sign);
const jwtVerify = promisify(jwt.verify);

const createToken = (payload, { expiresIn, secret }) =>
  jwtSign(payload, secret, { expiresIn });

const verifyToken = (token, secret) => jwtVerify(token, secret);

// module.exports.createAccessToken = async (payload) =>
//   await createToken(payload, {
//     expiresIn: JWT_ACCESS_EXPIRATION_TIME,
//     secret: JWT_ACCESS_SECRET,
//   });

module.exports.generateTokenPair = async(payload) => ({
  accessToken:await createToken(payload, {
        expiresIn: JWT_ACCESS_EXPIRATION_TIME,
        secret: JWT_ACCESS_SECRET,
}),
  refreshToken:await createToken(payload, {
        expiresIn: JWT_REFRESH_EXPIRATION_TIME,
        secret: JWT_REFRESH_SECRET,
})
})
module.exports.verifyAccessToken = async (token) =>
  verifyToken(token, JWT_ACCESS_SECRET);

module.exports.verifyRefreshToken = async (token) =>
  verifyToken(token, JWT_REFRESH_SECRET);
