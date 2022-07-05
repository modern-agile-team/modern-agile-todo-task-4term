"use strict";

const { response } = require("../../app");
const ToDoStorage = require("../models/ToDoStorage");
const Todo = require("../models/ToDo");

const ToDo = {
  read: async (req, res) => {
    const todo = new Todo();
    const response = await todo.readTodo();
    return res.json(response);
  },
  create: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.createToDo(req.body);
    return res.json(response);
  },
  update: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.updateToDo(req.body);
    return res.json(response);
  },

  delete: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.deleteToDo(req.body);
    return res.json(response);
  },
};

module.exports = {
  ToDo,
};
