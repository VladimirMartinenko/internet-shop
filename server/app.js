const express = require("express");
const router = require("./routers");
const cors = require("cors");
const { basicEH } = require("./middlewares/error.handlers");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(basicEH);

module.exports = app;
