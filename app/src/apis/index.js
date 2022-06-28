"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ToDo.ctrl");

router.get("/", ctrl.ToDo.output);
router.post("/", ctrl.ToDo.create);
// router.get("/hi", ctrl.ToDo.read);
router.patch("/", ctrl.ToDo.update);
router.delete("/", ctrl.ToDo.delete);
router.put("/", ctrl.ToDo.read);

module.exports = router;
