"use strict";

const { response } = require("express");
const storage = require("./ToDoStorage");

class ToDo {
  constructor(body) { //생성자
    this.body = body;
  }
  
  async save() {
    const client = this.body;
    const response = await storage.dataSave(client);
    
    return response;
    }

  async load() {
    const response = await storage.getData();

    return response;
    }

  async del() {
    const client = this.body;
    const response = await storage.delData(client);

    return response;
    }

  async up() {
    const client = this.body;
    console.log(client);
    const response = await storage.upData(client);

    return response;
    }

}

module.exports = ToDo;