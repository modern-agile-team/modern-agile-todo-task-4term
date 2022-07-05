"use strict";

const db = require("../config/mysql");

class ToDoStorage {
  static readTodo() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM todolist ORDER BY id DESC";
      db.query(query, (err, data) => {
        if (err) reject(`${err}`);
        resolve(data);
      });
    });
  }

  static async createToDo({ description, is_check }) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO todolist (description, is_check) VALUES (?, ?);";
      db.query(query, [description, is_check], err => {
        if (err) reject(`${err}`);
        resolve({ success: "추가" });
      });
    });
  }

  static async updateToDo({ description, is_check, id }) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE todolist SET description = ?, is_check = ? WHERE id = ?;";
      db.query(query, [description, is_check, id], err => {
        if (err) reject(`${err}`);
        resolve({ success: "변경" });
      });
    });
  }

  static async deleteToDo({ id }) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM todolist WHERE id = ?;";
      console.log(query);
      db.query(query, [id], err => {
        if (err) reject(`${err}`);
        resolve({ success: "삭제" });
      });
    });
  }
}

module.exports = ToDoStorage;
