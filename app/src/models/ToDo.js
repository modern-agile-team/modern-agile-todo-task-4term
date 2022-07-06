"use strict";

const ToDoStorage = require("./ToDoStorage");

class Todo {
  constructor(body) {
    this.body = body;
  }

  async addToDo() {
    try {
      const params = this.body;
      const addResult = await ToDoStorage.addToDo(params);
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
      const params = this.body;
      const updateResult = await ToDoStorage.updateToDo(params);
      return updateResult;
    } catch (err) {
      return { success: false, err };
    }
  }

  async removeToDo() {
    try {
      const params = this.body;
      const removeResult = await ToDoStorage.removeToDo(params);
      return removeResult;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = Todo;
