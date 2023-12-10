const mysqlPool = require("../database/config");
const bcrypt = require("bcrypt");

module.exports.getUsers = async () => {
  const [results] = await mysqlPool.query("SELECT * FROM Users");
  return results;
};

module.exports.getUserById = async (id) => {
  const [[results]] = await mysqlPool.query(
    "SELECT * FROM Users WHERE id = ?",
    [id]
  );
  return results;
};

module.exports.getUserByEmail = async (email) => {
  const [[results]] = await mysqlPool.query(
    "SELECT * FROM Users WHERE email = ?",
    [email]
  );
  return results;
};

module.exports.deleteUserConversations = async (id) => {
  try {
    const [{ affectedRows }] = await mysqlPool.query(
      "DELETE FROM Conversations WHERE user_id_1 = ? OR user_id_2 = ?",
      [id, id]
    );
    return affectedRows;
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteUserMessages = async (id) => {
  try {
    const [{ affectedRows }] = await mysqlPool.query(
      "DELETE FROM Messages WHERE sender_id = ?",
      [id]
    );
    return affectedRows;
  } catch (error) {
    console.log(error);
  }
  return affectedRows;
};

module.exports.deleteUserById = async (id) => {
  const [{ affectedRows }] = await mysqlPool.query(
    "DELETE FROM Users WHERE id = ?",
    [id]
  );
  return affectedRows;
};

module.exports.createUser = async (data) => {
  const [{ affectedRows }] = await mysqlPool.query(
    "INSERT INTO Users (full_name, password, email) VALUES (?, ?, ?)",
    [data.full_name, data.password, data.email]
  );
  return affectedRows;
};

module.exports.updateUser = async (data, id) => {
  const [{ affectedRows }] = await mysqlPool.query(
    "UPDATE Users SET full_name = ?, email = ?, password = ?, token = ? WHERE id = ?",
    [data.full_name, data.email, data.password, data.token, id]
  );
  return affectedRows;
};
