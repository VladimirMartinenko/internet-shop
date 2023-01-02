module.exports.basicEH = async (err, req, res, next) => {
    const status = err.status || 500;

  res.status(status).send({ errors: [err] });
};