const klaviyoRouter = require("express").Router();
const klaviyoController = require("../controllers/klaviyo.controller");

klaviyoRouter.post("/track", klaviyoController.trackOnsiteEvent);

module.exports = klaviyoRouter;
