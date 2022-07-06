"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/", ctrl.ToDo.output);
router.post("/:description/:isCheck", ctrl.ToDo.create);
router.patch("/:id/:description/:isCheck", ctrl.ToDo.update);
router.delete("/:id", ctrl.ToDo.delete);
router.get("/readDB", ctrl.ToDo.read);

module.exports = router;
