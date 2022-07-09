"use strict"

//모듈
const express = require("express");
// const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const home = require("./src/routes/index");

//뷰 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/views`));

app.use(express.json());
//한글 공백 등과같은 문자가 포함될 경우 실행되지 않는 문제 해결
app.use(express.urlencoded({ extended: true}));

app.use("/", home); //미들웨어 등록 메세지   routes의 home 폴더로

module.exports = app;