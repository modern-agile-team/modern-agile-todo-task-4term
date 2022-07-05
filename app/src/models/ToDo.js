"use strict";

const ToDoStorage = require("./ToDoStorage");
class Todo {
  constructor(body) {
    this.body = body;
  }

  async readTodo() {
    try {
      const getResults = await ToDoStorage.readTodo();
      return getResults;
    } catch (err) {
      return { success: false, msg: err };
    }
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
      const updatetodo = await ToDoStorage.updateToDo(this.body);
      return updatetodo;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async deleteToDo() {
    try {
      const deletetodo = await ToDoStorage.deleteToDo(this.body);
      return deletetodo;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = Todo;
