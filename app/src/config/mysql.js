"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host:"todo-list.cmnv9yypbtod.ap-northeast-2.rds.amazonaws.com",
  user:"admin",
  password:"0119kimsoo",
  database:"todo_list",
});

db.connect();

module.exports = db;

