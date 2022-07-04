"use strict";

const { response } = require("express");
const storage = require("./ToDoStorage");

class ToDo {
  constructor(body) { //생성자
    this.body = body;
  }

  async add() { //await을 사용하기 위해서 비동기로 변경 해 주어야 함
    const client = this.body;
    // storage.save(client);
    const a = await storage.getData(client.value);
  }
  async save() {
    const client = this.body;
    const response = await storage.save(client);
    return response;
  }

}

module.exports = ToDo;