const express = require("express");
const router = require("./routers");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',router);

module.exports = app;