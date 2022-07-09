"use strict";

const ToDoStorage = require("./ToDoStorage");
class Todo {
  constructor(body) {
    this.body = body;
  }

  async readTodo() {
    const getResult = await ToDoStorage.readTodo();
    return Object.values(JSON.parse(JSON.stringify(getResult)));
  }
  async createToDo() {
    try {
      const createResult = await ToDoStorage.createToDo(this.body);
      return createResult;
    } catch (err) {
      return { success: false, msg: err };
    }
  }

  async updateToDo() {
    try {
      const updateResult = await ToDoStorage.updateToDo(this.body);
      return updateResult;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async deleteToDo() {
    try {
      const deleteResult = await ToDoStorage.deleteToDo(this.body);
      return deleteResult;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = Todo;
