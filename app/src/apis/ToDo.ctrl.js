"use strict";

const ToDo = require("../models/ToDo");

const process = {
  readAllToDos: async (req, res) => {
    try {
      const toDo = new ToDo(req);
      const response = await toDo.readAllToDos();

      if (response) {
        return res.status(200).json({
          success: true,
          msg: "Todo list 전체 조회 성공",
          data: response,
        });
      }

      return res.status(202).json({
        success: true,
        msg: "Todo list 전체 조회했으나 데이터 없음",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorMsg: err,
      });
    }
  },

  createToDo: async (req, res) => {
    try {
      const toDo = new ToDo(req);
      const response = await toDo.createToDo();

      return res.status(201).json(response);
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorMsg: err,
      });
    }
  },

  updateToDo: async (req, res) => {
    try {
      const toDo = new ToDo(req);
      const response = await toDo.updateToDo();

      return res.status(204).json(response);
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorMsg: err,
      });
    }
  },

  updateCheckedToDo: async (req, res) => {
    try {
      const toDo = new ToDo(req);
      const response = await toDo.updateCheckedToDo();

      return res.status(201).json(response);
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorMsg: err,
      });
    }
  },

  deleteToDo: async (req, res) => {
    try {
      const toDo = new ToDo(req);
      const response = await toDo.deleteToDo();

      return res.status(201).json(response);
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorMsg: err,
      });
    }
  },
};

module.exports = {
  process,
};
