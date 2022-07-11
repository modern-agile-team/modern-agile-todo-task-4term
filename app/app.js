"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const home = require("./src/apis/index");

app.set("views", "./src/views/");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src`));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/readDB", home);
app.post("/", home);
app.patch("/", home);
app.delete("/", home);

module.exports = app;
