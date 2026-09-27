const { TokenExpiredError, JsonWebTokenError } = require("jsonwebtoken");
const { ValidationError, UniqueConstraintError } = require("sequelize");

module.exports.basicEH = async (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    const fields = Object.keys(err.fields || {});
    const paths = (err.errors || []).map((item) => item.path);
    const isPhone = fields.includes("phone") || paths.includes("phone");
    return res.status(409).send({
      errors: [
        {
          message: isPhone
            ? "phone already registered"
            : "email already registered",
          status: 409,
        },
      ],
    });
  }
  if (err instanceof ValidationError) {
    return res.status(400).send({
      errors: err.errors.map((item) => ({
        message: item.message,
        path: item.path,
        status: 400,
      })),
    });
  }

  const status = err.status || 500;
  res.status(status).send({
    errors: [
      {
        message: err.message || "Internal Server Error",
        status,
      },
    ],
  });
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