require("dotenv").config();
const http = require('https');

const app = require('./app');
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
