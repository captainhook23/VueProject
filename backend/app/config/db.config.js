require("dotenv").config();

module.exports = {
  MONGODB_HOST: process.env.MONGODB_HOST,
  MONGODB_PORT: process.env.MONGODB_PORT,
  MONGODB_DB: process.env.MONGODB_DB,
};
