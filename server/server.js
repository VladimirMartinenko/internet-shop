require("dotenv").config();
const express = require("express");
const router = require("./routers");

const app = express();
app.use(router);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
