"use strict";

const ToDoStorage = require("./ToDoStorage");

class Todo {
  constructor(body) {
    this.body = body;
  }

  async addToDo() {
    try {
      const body = this.body;
      const addResult = await ToDoStorage.addToDo(body);
      return addResult;
    } catch (err) {
      return { success: false, err };
    }
  }

  async getAllToDo() {
    const getResult = await ToDoStorage.getToDos();
    return Object.values(JSON.parse(JSON.stringify(getResult)));
  }

  async updateToDo() {
    try {
      const body = this.body;
      const updateResult = await ToDoStorage.updateToDo(body);
      return updateResult;
    } catch (err) {
      return { success: false, err };
    }
  }

  async removeToDo() {
    try {
      const body = this.body;
      const removeResult = await ToDoStorage.removeToDo(body);
      return removeResult;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Todo;
