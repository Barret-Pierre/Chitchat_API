const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "chitchat-admin",
  password: "Azerty123456?",
  database: "chitchat_api",
});

module.exports = mysqlPool;
