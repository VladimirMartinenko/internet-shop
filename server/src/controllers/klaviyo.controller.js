const klaviyo = require("../services/klaviyo.service");

const ALLOWED_METRICS = new Set([
  "Viewed Product",
  "Viewed Category",
  "Added to Cart",
  "Started Checkout",
]);

module.exports.trackOnsiteEvent = async (req, res, next) => {
  try {
    const {
      metric,
      properties = {},
      email,
      phone,
      firstName,
      lastName,
      _kx,
      anonymousId,
      value,
      uniqueId,
    } = req.body || {};

    if (!ALLOWED_METRICS.has(metric)) {
      return res.status(400).send({
        errors: [{ message: "unsupported Klaviyo metric" }],
      });
    }

    const eventValue =
      value !== undefined && value !== null
        ? value
        : properties.$value !== undefined
        ? properties.$value
        : properties.Price;

    const result = await klaviyo.createEvent({
      metric,
      email,
      phone,
      firstName,
      lastName,
      kx: _kx,
      anonymousId,
      properties,
      value: eventValue,
      uniqueId:
        uniqueId ||
        properties.$event_id ||
        `${metric}:${Date.now()}`,
    });

    res.send({ data: { ok: !result.error, skipped: result.skipped || false } });
  } catch (error) {
    next(error);
  }
};
