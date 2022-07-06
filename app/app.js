"use strict";
//모듈
const express = require("express");

const dotenv = require("dotenv");

const app = express();
dotenv.config();
//라우팅
const ToDo = require("./src/apis/index");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", ToDo);
app.get("/readDB", ToDo);

module.exports = app;
