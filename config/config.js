require("dotenv").config();

module.exports = {
  HTTP_PORT: process.env.HTTP_PORT,
  SALT_PASSWORD: process.env.SALT_PASSWORD,
};
