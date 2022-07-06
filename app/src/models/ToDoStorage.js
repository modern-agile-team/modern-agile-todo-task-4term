"use strict";

const db = require("../config/mysql");

class ToDoStorage {
  static getToDos() {
    return new Promise((resolve, reject) => {
      const query = "SELECT id,description,is_check FROM todos";
      db.query(query, (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data);
      });
    });
  }

  static addToDo({ description, isCheck }) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO todos(description,is_check) VALUES(?,?);";
      db.query(query, [description, isCheck], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true, msg: "테이블에 데이터를 추가했습니다." });
      });
    });
  }

  static updateToDo({ description, isCheck, id }) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE todos SET description = ?, is_check = ? WHERE id = ?;";
      db.query(query, [description, isCheck, id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true, msg: "테이블의 데이터를 변경했습니다." });
      });
    });
  }

  static removeToDo({ id }) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM todos WHERE id=?";
      db.query(query, [id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true, msg: "테이블의 데이터를 삭제했습니다." });
      });
    });
  }
}

module.exports = ToDoStorage;
