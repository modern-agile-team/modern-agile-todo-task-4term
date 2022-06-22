"use strict";

const express = require("express");
const app = express();
const home = (req, res) => {
  res.render("index");
};

const PORT = 3000;

app.use(express.static(`${__dirname}/src`));
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.get("/", home);

app.listen(PORT, () => {
  console.log("test");
});

module.exports = app;
