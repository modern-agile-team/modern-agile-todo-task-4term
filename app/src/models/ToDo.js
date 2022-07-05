"use strict";

const { response } = require("express");
const storage = require("./ToDoStorage");

class ToDo {
  constructor(body) { //생성자
    this.body = body;
  }

  async info() { //await을 사용하기 위해서 비동기로 변경 해 주어야 함
    const response = await storage.getData();
    return response;
  }
  
  async save() {
    const client = this.body;
      const response = await storage.dataSave(client);
      return response;
    }

}

module.exports = ToDo;