"use strict"

//모듈
const express = require("express");
const app = express();

const home = require("./src/routes/home")

//뷰 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //미들웨어 등록 메세지   routes의 home 폴더로

module.exports = app;ad