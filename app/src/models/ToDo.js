"use strict";

const ToDoStorage = require("./ToDoStorage");

class ToDo {
  constructor(req) {
    this.body = req.body;
    this.params = req.params;
  }

  async readAllToDos() {
    try {
      const toDoList = await ToDoStorage.readAllToDos();

      return toDoList;
    } catch (err) {
      throw err;
    }
  }

  async createToDo() {
    try {
      const { affectedRows, insertId } = await ToDoStorage.createToDo(
        this.body
      );

      if (!affectedRows) {
        return {
          success: true,
          no: insertId,
          msg: "게시글 생성에 성공했습니다.",
        };
      }

      throw {
        msg: "게시글 생성 실패",
      };
    } catch (err) {
      throw err;
    }
  }

  async updateToDo() {
    try {
      const { affectedRows } = await ToDoStorage.updateToDo(
        this.params,
        this.body
      );

      if (affectedRows) {
        return {
          success: true,
          msg: "Todo 수정에 성공했습니다.",
        };
      }

      throw {
        msg: "Todo 수정 실패",
      };
    } catch (err) {
      throw err;
    }
  }

  async updateCheckedToDo() {
    try {
      const { affectedRows } = await ToDoStorage.updateCheckedToDo(
        this.params,
        this.body
      );

      if (affectedRows) {
        return {
          success: true,
          msg: "Todo check 성공",
        };
      }

      throw {
        msg: "Todo check 실패",
      };
    } catch (err) {
      throw err;
    }
  }

  async deleteToDo() {
    try {
      const { affectedRows } = await ToDoStorage.deleteToDo(this.params);

      if (affectedRows) {
        return {
          success: true,
          msg: "Todo 삭제 성공",
        };
      }

      throw {
        msg: "ToDo 삭제 실패",
      };
    } catch (err) {
      return err;
    }
  }
}

module.exports = ToDo;
