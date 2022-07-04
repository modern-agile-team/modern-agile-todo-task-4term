"use strict";

const storage = require("./ToDoStorage");

class ToDo {
  constructor(body) { //생성자
    this.body = body;
  }

  add() {
    const a = storage.getData("1");
    const body = this.body;
    console.log(a);
    console.log(body.id, body.value);
  }
}

module.exports = ToDo;