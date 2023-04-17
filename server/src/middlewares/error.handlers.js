const { TokenExpiredError, JsonWebTokenError } = require('jsonwebtoken');

module.exports.basicEH = async (err, req, res, next) => {
    const status = err.status || 500;

  res.status(status).send({ errors: [err] });
};

module.exports.tokenErrorHandler = async (err, req, res, next) => {
  if (err instanceof TokenExpiredError) {
    return res.status(419).send({error:{message: 'Token expired'}})
  }
  if (err instanceof JsonWebTokenError) {
    return res.status(401).send({error:{message: 'Token invalid'}})
  }
  
  next(err);
};