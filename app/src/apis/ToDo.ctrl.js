"use strict";

const { response } = require("../../app");
const ToDoStorage = require("../models/ToDoStorage");
const Todo = require("../models/ToDo");

const ToDo = {
  output: (req, res) => {
    res.render("index");
  },
  read: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.readTodo();
    return res.json(response);
  },
  // create: async (req, res) => {
  //   const todo = new Todo(req.params);
  //   const response = await todo.createToDo();
  //   return res;
  // },
  create: async (req, res) => {
    const todo = new Todo(req.body);
    const response = await todo.createToDo(req.body);
    return res.json(response);
  },

  update: async (req, res) => {
    // console.log("ffffff");
    const todo = new Todo(req.params);
    const response = await todo.updateToDo();
    return res;
  },

  delete: async (req, res) => {
    // console.log(req.params);
    const todo = new Todo(req.params);
    const response = await todo.deleteToDo();
    return res;
  },
};

module.exports = {
  ToDo,
};
