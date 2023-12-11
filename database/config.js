const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "chitchat-admin",
  password: process.env.DB_PASSWORD || "Azerty123456?",
  database: process.env.DB_DATABASE || "chitchat_api",
});

module.exports = mysqlPool;
