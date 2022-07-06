"use strict";

const ToDoStorage = require("../../models/ToDoStorage");
const ToDo = require("../../models/ToDo");
const logger = require("../../config/logger");
const { response } = require("express");

const output = {
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면"`);
        res.render("index");
    },
};

const process = {
    viewList: async (req, res) => {
        const todo = new ToDo();
        const response = await todo.viewList();
        const url = {
            method: "GET",
            path: "/home",
            status: !response.success ? 404 : 200,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },

    addList: async (req, res) => {
        const todo = new ToDo(req.body);
        const response = todo.addList();
        const url = {
            method: "POST",
            path: "/",
            status: response.err ? 400 : 201,
        };
        log(response, url);
        return res.status(url.status).json(response);
    },

    deleteList: async (req, res) => {
        const todo = new ToDo(req.body);
        const response = todo.deleteList();

        const url = {
            method: "POST",
            path: "/",
            status: response.err ? 404 : 226,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },

    editList: async (req, res) => {
        const todo = new ToDo(req.body);
        const response = todo.editList();

        const url = {
            method: "POST",
            path: "/",
            status: response.err ? 400 : 226,
        };

        log(response, url);
        return res.status(url.status).json(response);
    },
};

module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if (response.err) {
        logger.error(
            `${url.method} / ${url.status}  Response: ${response.err}`
        );
    } else {
        logger.info(
            `${url.method} / ${url.status}  Response: ${response.msg || ""}`
        );
    }
};
