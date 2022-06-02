"use strict";

const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello, MODERN-AGILE 4TERM!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const toDo = require("./src/apis/index");

app.use("/api/todo", toDo);

// 404 렌더링
app.get("*", (req, res) => {
  res.render("not-found/404");
});

module.exports = app;
