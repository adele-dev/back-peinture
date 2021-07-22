const db = require("../db");

const find = async () => {
  return db.promise().query("SELECT * FROM tableaux");
};

const findOne = async (id) => {
  return db.promise().query("SELECT * FROM tableaux WHERE id = ?", [id]);
};

const create = async ({ title, artist, format, price, image, description }) => {
  return db
    .promise()
    .query(
      "INSERT INTO tableaux (title, artist, format, price, image, description) VALUES (?, ?, ?, ?, ?, ?)",
      [title, artist, format, price, image, description]
    );
};

module.exports = { find, findOne, create };
