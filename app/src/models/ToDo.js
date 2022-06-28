"use strict";

const ToDoStorage = require("./ToDoStorage");

class Todo {
  constructor(body) {
    this.body = body;
  }

  async addTodo() {
    try {
      const body = this.body;
      const response = await ToDoStorage.addTodo(body);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async getAllTodo() {
    const response = await ToDoStorage.getTodos();
    return Object.values(JSON.parse(JSON.stringify(response)));
  }

  async updateTodo() {
    try {
      const body = this.body;
      const response = await ToDoStorage.updateTodo(body);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async removeTodo() {
    try {
      const body = this.body;
      const response = await ToDoStorage.removeTodo(body);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Todo;
