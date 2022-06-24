"use strict";

const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host:127.0.0.1:3306,
  user:root,
  password:0905,
  database:ujindb,
});

module.exports = db;
