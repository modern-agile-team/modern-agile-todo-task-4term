"use strict";
const logger = require("../../src/config/logger");
const Todo = require("../models/ToDo");

const ToDo = {
  output: (req, res) => {
    logger.info(`GET / 200 "초기 페이지 로드"`);
    res.render("index");
  },
  create: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.addTodo();
    log(response, {
      method: "POST",
      status: response.err ? 400 : 201,
    });
    return res.status(response.err ? 400 : 200).json(response);
  },
  read: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.getAllTodo();
    return res.json(response);
  },
  update: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.updateTodo();
    log(response, {
      method: "PATCH",
      status: response.err ? 400 : 200,
    });
    return res.status(response.err ? 400 : 200).json(response);
  },
  delete: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.removeTodo();
    log(response, {
      method: "DELETE",
      status: response.err ? 400 : 200,
    });
    return res.status(response.err ? 400 : 200).json(response);
  },
};

module.exports = {
  ToDo,
};

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} / ${url.status} Response: ${response.success}, ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} / ${url.status} Response: ${response.success}, msg: ${response.msg}`
    );
  }
};
