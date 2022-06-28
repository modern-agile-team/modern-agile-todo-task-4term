"use strict";
//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const fs = require("fs");

const app = express();
dotenv.config();
//라우팅
const ToDo = require("./src/apis/index");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", ToDo);
app.post("/", ToDo);
app.delete("/", ToDo);
app.patch("/", ToDo);
app.put("/", ToDo);

module.exports = app;
