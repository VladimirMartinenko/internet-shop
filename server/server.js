require("dotenv").config();
const http = require('http');

const app = require('../server/app');
const server = http.createServer(app);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
