const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_DIALECT: process.env.DB_DIALECT,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME_PROD: process.env.DB_USERNAME_PROD,
  DB_PASSWORD_PROD: process.env.DB_PASSWORD_PROD,
  DB_NAME_PROD: process.env.DB_NAME_PROD,
  DB_HOST_PROD: process.env.DB_HOST_PROD,
  DB_DIALECT_PROD: process.env.DB_DIALECT_PROD,
  DB_PORT_PROD: process.env.DB_PORT_PROD,
};
