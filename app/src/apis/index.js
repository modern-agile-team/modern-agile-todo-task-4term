"use strict";

const express = require("express");
// const { router } = require("../../app");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

console.log("index.js");

router.get("/", ctrl.ToDo.output);
router.get("/readDB", ctrl.ToDo.read);
// router.post("/:description/:is_check", ctrl.ToDo.create);
router.post("/", ctrl.ToDo.create);
router.patch("/", ctrl.ToDo.update);
router.delete("/:id", ctrl.ToDo.delete);

module.exports = router;
