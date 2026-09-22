require("dotenv").config();

const common = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "internet_shop_db",
  dialect: "postgres",
  migrationStorage: "json",
  seederStorage: "json",
};

module.exports = {
  development: {
    ...common,
    host: process.env.DB_HOST || "localhost",
  },
  production: {
    ...common,
    host: process.env.DB_HOST || "db-prod",
  },
};
