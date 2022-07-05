"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/", ctrl.ToDo.read);
router.post("/", ctrl.ToDo.create);
router.patch("/", ctrl.ToDo.update);
router.delete("/", ctrl.ToDo.delete);

module.exports = router;
