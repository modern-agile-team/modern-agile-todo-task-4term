"use strict"

const express = require("express");
const router = express.Router();

const ctrl = require("./index.ctrl");

router.get("/", ctrl.output.home);

// router.post("/", ctrl.process.home);
router.post("/", ctrl.process.save);

module.exports = router;
