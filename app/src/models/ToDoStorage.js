"use strict";

const mysql = require("../config/mysql");

class ToDoStorage {
  static async readAllToDos() {
    try {
      const query = `SELECT * FROM TODOLIST;`;
      const allBoardsInfo = await mysql.query(query);

      return allBoardsInfo[0];
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async createToDo({ description }) {
    try {
      const query = `INSERT INTO TODOLIST(description) VALUES (?);`;
      const createResult = await mysql.query(query, [description]);

      return createResult[0];
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async updateToDo({ toDoId }, { description }) {
    try {
      const query = `UPDATE TODOLIST SET description=? WHERE id=?`;
      const updateResult = await mysql.query(query, [description, toDoId]);

      return updateResult[0];
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async updateCheckedToDo({ toDoId }, { isCheck }) {
    try {
      const query = `UPDATE TODOLIST SET is_check=? WHERE id=?`;
      const updateResult = await mysql.query(query, [isCheck, toDoId]);

      return updateResult[0];
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }

  static async deleteToDo({ toDoId }) {
    try {
      const query = "DELETE FROM TODOLIST WHERE id=?;";
      const deleteResult = await mysql.query(query, [toDoId]);

      return deleteResult[0];
    } catch (err) {
      throw { err: "Server Error", code: err.code };
    }
  }
}

module.exports = ToDoStorage;
